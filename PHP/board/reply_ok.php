<?php
   include "../../connect/connect.php";
   include "../../connect/session.php";
   include "../../connect/sessionCheck.php";

    $myReplyID = $_POST['myReplyID'];
    // $myBoardID = $_POST['myBoardID'];
    $myMemberID = $_SESSION['myMemberID'];
    // $_SESSION['myBoardID'] = $myBoardID;
    $ReplyName = $_POST['ReplyName'];
    $ReplyPass = $_POST['ReplyPass'];
    $ReplyComment = $_POST['ReplyComment'];
    $regTime = time();

    // var_dump($myBoardID);

    $sql = "INSERT INTO myReply(myMemberID, ReplyName, ReplyPass, ReplyComment, regTime) VALUES('$myMemberID','$ReplyName', '$ReplyPass', '$ReplyComment', '$regTime')";
    // var_dump($sql);
    
    // $sql = 'insert into myReply values(null, ' .$bNo . ', null, "' . $coContent . '", "' . $coId . '", password("' . $coPassword . '"))';
    
	$result = $connect -> query($sql);
    // var_dump($result);
    // var_dump($result);
    // var_dump($result);
	// $info = $c-> insert_id;

	if($result) {
?>
	<script>
		alert('댓글이 정상적으로 작성되었습니다.');
		location.replace("boardView copy.php?myReplyID=<?=$_GET['myReplyID']?>");
	</script>
<?php
	}
?>