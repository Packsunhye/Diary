<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

const commentName = $("#commentName");  //댓글 이름
const commentPass = $("#commentPass");  //댓글 비밀번호
const commentWrite = $("#commentWrite");  //댓글 내용

let commentID = "";

// 댓글 삭제 버튼 클릭시
$(".comment__del-dat").click(function(e){
    e.preventDefault();
    // alert("댓글 삭제 버튼 클릭");
    $(".comment__delete").show();

    //클릭한 댓글의 아이디값 가져오기
    commentID = $(this).parent().parent().attr("id");
});
//댓글 삭제 -> 취소 버튼
$("#commentDelete-Cancle").click(function(e){
    e.preventDefault();
    $(".comment__delete").hide();
});
//댓글 삭제 -> 삭제 버튼
$("#commentDelete-Button").click(function(e){

    let number = commentID.replace("comment", "");
    
    e.preventDefault();
    if($("#commentDeletePass").val() == ''){
        alert("댓글 작성시의 비밀번호를 적어주세요.");
        $("#commentDeletePass").focus();
    } else {
        $.ajax({
            url : "blogCommentDelete.php",
            method : "POST",
            dataType : "json",
            data : {
                "pass" : $("#commentDeletePass").val(),
                "commentID" : number
            },
            success: function(data){
                // console.log(data);
                alert("댓글이 삭제되었습니다.");
                location.reload();
            },
            error: function(request, status, error){
                console.log("request" + request);
                console.log("request" + status);
                console.log("request" + error);
            }
        });
    }
});


// 댓글 수정 버튼 클릭시
$(".comment__del__mod").click(function(e){
    e.preventDefault();
    // alert("댓글 수정 버튼 클릭");
    $(".commemt__modify").show();
    commentID = $(this).parent().parent().attr("id");
});
//댓글 수정 -> 취소 버튼
$("#commentModifyCancle").click(function(e){
    e.preventDefault();
    $(".commemt__modify").hide();
});
//댓글 수정 -> 수정 버튼
$("#commentModifyButton").click(function(e){
    let number = commentID.replace("comment", "");
    e.preventDefault();
    if($("#commentModifyMsg").val() == '' || $("#commentModifyPass").val() == ''){
        alert("수정 내용과 비밀번호를 적어주세요.");
        $("#commentModifyMsg").focus();
    } else {
        $.ajax({
            url : "blogCommentModify.php",
            method : "POST",
            dataType : "json",
            data : {
                "msg" : $("#commentModifyMsg").val(),
                "pass" : $("#commentModifyPass").val(),
                "commentID" : number
            },
            success: function(data){
                // console.log(data);
                alert("댓글이 수정되었습니다.");
                location.reload();
            },
            error: function(request, status, error){
                console.log("request" + request);
                console.log("request" + status);
                console.log("request" + error);
            }
        });
    }
});

// 댓글 작성하기
$("#commentBtn").click(function(){
    if($("#commentWrite").val() == ""){
        alert("댓글을 써주세요");
        $("#commentWrite").focus();
    } else {
        $.ajax({
            url: "blogCommentWrite.php",
            method: "POST",
            dataType: "json",
            data: {
                "blogID" : <?=$myBlogID?>,
                "name" : commentName.val(),
                "pass" : commentPass.val(),
                "msg" : commentWrite.val()
            },
            success: function(data){
                console.log(data);
                location.reload();
            },
            error: function(request, status, error){
                console.log("request" + request);
                console.log("request" + status);
                console.log("request" + error);
            }
        })
    }
});
