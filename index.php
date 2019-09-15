<?php
///**
//  * wechat php test
//  */
////define your token
///*
//define("TOKEN", "spider");
//$wechatObj = new wechatCallbackapiTest();
//$wechatObj->valid();
//class wechatCallbackapiTest{
//public function valid(){
//        $echoStr = $_GET["echostr"];
//        //valid signature , option
//        if($this->checkSignature()){
//        echo $echoStr;
//        exit;
//        }
//    }
//    public function responseMsg(){
////get post data, May be due to the different environments
//$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
//      //extract post data
//if (!empty($postStr)){
//              $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
//                $fromUsername = $postObj->FromUserName;
//                $toUsername = $postObj->ToUserName;
//                $keyword = trim($postObj->Content);
//                $time = time();
//                $textTpl = "<xml>
//<ToUserName><![CDATA[%s]]></ToUserName>
//<FromUserName><![CDATA[%s]]></FromUserName>
//<CreateTime>%s</CreateTime>
//<MsgType><![CDATA[%s]]></MsgType>
//<Content><![CDATA[%s]]></Content>
//<FuncFlag>0</FuncFlag>
//</xml>";
//if(!empty( $keyword )){
//              $msgType = "text";
//                $contentStr = "Welcome to wechat world!";
//                $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
//                echo $resultStr;
//                }else{
//                echo "Input something...";
//                }
//        }else {
//        echo "";
//        exit;
//        }
//    }
//private function checkSignature(){
//        $signature = $_GET["signature"];
//        $timestamp = $_GET["timestamp"];
//        $nonce = $_GET["nonce"];
//$token = TOKEN;
//$tmpArr = array($token, $timestamp, $nonce);
//sort($tmpArr);
//$tmpStr = implode( $tmpArr );
//$tmpStr = sha1( $tmpStr );
//if( $tmpStr == $signature ){
//return true;
//}else{
//return false;
//}
//}
//}
//*/
////处理用户发送的信息
//include_once './Xcxmsg.php';
//$xcxmsg = new Xcxmsg();
//$postStr = file_get_contents('php://input');
//if (!$postStr)
//    return false;
//$postArr = json_decode($postStr, true);
//if (!isset($postArr['MsgType']) || !isset($postArr['FromUserName']))
//    return false;
//$data = ["touser" => $postArr['FromUserName']];
//$accessToken = $xcxmsg->getAccessToken($data);
//$url = "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" . $accessToken;
//switch ($postArr['MsgType']) {
//    case "text":
//        //如用户发送的是文字信息，这里处理
//        //回复图文链接，也可以回复别的类型，根据需要
//        $data['msgtype'] = "transfer_customer_service";//"link";
//        $data['link'] = [
//            "title" => "hello",
//            "description" => "Is Really A Happy Day",
//            "url" => "LINK_URL",//连接url
//            "thumb_url" => "THUMB_URL" //图片url
//        ];
//        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
//        $xcxmsg->curl($json, $url);
//        break;
//    case "image": //如用户发送图片消息，进入这里
//        //服务端回复 图片，也可以回复别的类型，根据需要
//        $data['msgtype'] = "image";
//        $data['image'] = ['media_id' => 'media_id值']; // 执行 $xcxmsg->upload($accessToken)返回的 media_id
//        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
//        $xcxmsg->curl($json, $url);
//    case "miniprogrampage":
//        //如用户发送小程序卡片，进入这里
//        //这里服务端回复小卡片，也可以回复别的类型，根据需要
//        $data['msgtype'] = "miniprogrampage";
//        $data['miniprogrampage'] = [
//            "title" => "title",
//            "pagepath" => "pages/index/index",
//            "thumb_media_id" => "media_id值"];// 执行 $xcxmsg->upload($accessToken)返回的 media_id
//        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
//        $xcxmsg->curl($json, $url);
//        break;
//    case "event":
//        //如用户进入会话事件
//        //这里可以回复文本
//        $data['msgtype'] = "text";
//        $data['text'] = [
//            "content" => "Hello World",
//        ];
//        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
//        $xcxmsg->curl($json, $url);
//        break;
//    default:
//}
//?>


//<?php
/*
 jiayouya
 CopyRight 2014 All Rights Reserved
*/



define("TOKEN", "spider");
$wechatObj = new wechatCallbackapiTest();
if (!isset($_GET['echostr'])) {
 $wechatObj->responseMsg();
}else{
 $wechatObj->valid();
}
class wechatCallbackapiTest
{
 //验证消息
 public function valid()
 {
  $echoStr = $_GET["echostr"];
  if($this->checkSignature()){
   echo $echoStr;
   exit;
  }
 }
 //检查签名
 private function checkSignature()
 {
  $signature = $_GET["signature"];
  $timestamp = $_GET["timestamp"];
  $nonce = $_GET["nonce"];
  $token = TOKEN;
  $tmpArr = array($token, $timestamp, $nonce);
  sort($tmpArr, SORT_STRING);
  $tmpStr = implode($tmpArr);
  $tmpStr = sha1($tmpStr);
  if($tmpStr == $signature){
   return true;
  }else{
   return false;
  }
 }
 //响应消息
 public function responseMsg()
 {
  $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
  if (!empty($postStr)){
   $this->logger("R ".$postStr);
   $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
   $RX_TYPE = trim($postObj->MsgType);
   switch ($RX_TYPE)
   {
    case "event":
     $result = $this->receiveEvent($postObj);
     break;
    case "text":
     $result = $this->receiveText($postObj);
     break;
   }
   $this->logger("T ".$result);
   echo $result;
  }else {
   echo "";
   exit;
  }
 }
 //接收事件消息
 private function receiveEvent($object)
 {
  switch ($object->Event)
  {
   case "subscribe":
    $content['subscribe'] = array("Title" =>"欢迎关注加遊鸭！", "Description" =>"欢迎关注加遊鸭！\n\n使用方法：\n回复 1 : 查看行程表\n回复 2 : 呼叫专属客服\n回复 3 : 填写行程调查问卷", "PicUrl" =>"http://www.3856.cc/weixin/weixin/logo.jpg", "Url" =>"");
    break;
   default:
    $content = "receive a new event: ".$object->Event;
    break;
  }
  if(is_array($content)){
   if (isset($content['subscribe'])){
    $result = $this->transmitText($object, $content['subscribe']['Description']);
   }else if (isset($content['MusicUrl'])){
    $result = $this->transmitMusic($object, $content);
   }
  }else{
   $result = $this->transmitText($object, $content);
  }
  return $result;
 }
 //接收文本消息
 private function receiveText($object)
 {
  $keyword = trim($object->Content);
  //读取数据库开始
     //mysql -hrm-2zev4zhndng0524j3.mysql.rds.aliyuncs.co -P3306 -ujiayouya -pRoot1234 -Djiayouya
     $servername = "rm-2zev4zhndng0524j3.mysql.rds.aliyuncs.com";
     $username = "jiayouya";
     $password = "Root1234";
     $dbname = "jiayouya";
      // 创建连接
      $conn = new mysqli($servername, $username, $password, $dbname,'3306');
      $sql = "select title,description,picurl,url from (juser join jgroup on juser.groupid=jgroup.groupid) join jgrouptype on jgroup.grouptype=jgrouptype.grouptype where juser.`passport` = '".$keyword."';";
      // Check connection
      if ($conn->connect_error) {

          $content['Title'] = $conn->connect_error;
          $content['Description'] = $conn->connect_error;
          $content['PicUrl'] = "http://aether.ren/lib/exe/fetch.php?media=scenic_rgdzg.jpg";
          $content['Url'] = "http://erbgmail.com/tokyo.htm";
          $newsArray[0] = $content;
           return $result = $this->transmitNews($object, $newsArray);
      }

      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
          // 输出数据
          while($row = $result->fetch_assoc()) {
              $content['Title'] = $row["title"];
              $content['Description'] = $row["description"];
              $content['PicUrl'] = $row["picurl"];
              $content['Url'] = $row["url"];
              $newsArray[0] = $content;
               return $result = $this->transmitNews($object, $newsArray);
              //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
          }
      } else {
          if($keyword == "2" || $keyword == "客服"){
               $result = $this->transmitService($object);
               return $result;
            }
            else if($keyword == "3" || $keyword == "问卷调查"){
              $content['Title'] = "东京行程满意度调查表";
              $content['Description'] = "完善满意度调查\n我们下次将会给您提供更贴心的服务";
              $content['PicUrl'] = "http://aether.ren/lib/exe/fetch.php?media=300i10000000p1osz36bb_c_500_333_q70.png";
              $content['Url'] = "https://wj.qq.com/s2/4361453/7e7d/";
              $newsArray[0] = $content;
              return $result = $this->transmitNews($object, $newsArray);
            }
            else if($keyword == "时间" || $keyword == "测试"){
             $content = time();
             return $result = $this->transmitText($object, $content);
            }
            //触发多客服模式
            else if (strstr($keyword, "您好") || strstr($keyword, "你好") || strstr($keyword, "在吗") || strstr($keyword, "有人吗")){
             $result = $this->transmitService($object);
             return $result;
            } else {
            $result = $this->transmitService($object);
            return $result;
            }
      }
      $conn->close();
  //读取数据库结束
 }
 private function transmitText($object, $content)
 {
  $textTpl = "<xml>
        <ToUserName><![CDATA[%s]]></ToUserName>
        <FromUserName><![CDATA[%s]]></FromUserName>
        <CreateTime>%s</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[%s]]></Content>
        </xml>";
  $result = sprintf($textTpl, $object->FromUserName, $object->ToUserName, time(), $content);
  return $result;
 }
 private function transmitNews($object, $newsArray)
 {
  if(!is_array($newsArray)){
   return;
  }
  $itemTpl = " <item>
  <Title><![CDATA[%s]]></Title>
  <Description><![CDATA[%s]]></Description>
  <PicUrl><![CDATA[%s]]></PicUrl>
  <Url><![CDATA[%s]]></Url>
 </item>
";
  $item_str = "";
  foreach ($newsArray as $item){
   $item_str .= sprintf($itemTpl, $item['Title'], $item['Description'], $item['PicUrl'], $item['Url']);
  }
  $newsTpl = "<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[news]]></MsgType>
<Content><![CDATA[]]></Content>
<ArticleCount>%s</ArticleCount>
<Articles>
$item_str</Articles>
</xml>";
  $result = sprintf($newsTpl, $object->FromUserName, $object->ToUserName, time(), count($newsArray));
  return $result;
 }
 private function transmitMusic($object, $musicArray)
 {
  $itemTpl = "<Music>
 <Title><![CDATA[%s]]></Title>
 <Description><![CDATA[%s]]></Description>
 <MusicUrl><![CDATA[%s]]></MusicUrl>
 <HQMusicUrl><![CDATA[%s]]></HQMusicUrl>
</Music>";
  $item_str = sprintf($itemTpl, $musicArray['Title'], $musicArray['Description'], $musicArray['MusicUrl'], $musicArray['HQMusicUrl']);
  $textTpl = "<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[music]]></MsgType>
$item_str
</xml>";
  $result = sprintf($textTpl, $object->FromUserName, $object->ToUserName, time());
  return $result;
 }
 //回复多客服消息
 private function transmitService($object)
 {
  $xmlTpl = "<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[transfer_customer_service]]></MsgType>
</xml>";
  $result = sprintf($xmlTpl, $object->FromUserName, $object->ToUserName, time());
  return $result;
 }
 private function logger($log_content)
 {
//  if(isset($_SERVER['HTTP_APPNAME'])){ //SAE
//   sae_set_display_errors(false);
//   sae_debug($log_content);
//   sae_set_display_errors(true);
//  }else if($_SERVER['REMOTE_ADDR'] != "127.0.0.1"){ //LOCAL
//   $max_size = 10000;
//   $log_filename = "log.xml";
//   if(file_exists($log_filename) and (abs(filesize($log_filename)) > $max_size)){unlink($log_filename);}
//   file_put_contents($log_filename, date('H:i:s')." ".$log_content."\r\n", FILE_APPEND);
//  }
 }
}
?>
