
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='T';
a[2]='ấ';
a[3]='t';
a[4]=' ';
a[5]='n';
a[6]='h';
a[7]='i';
a[8]='ê';
a[9]='n';
a[10]=' ';
a[11]='l';
a[12]='à';
a[13]=' ';
a[14]='a';
a[15]='n';
a[16]='h';
a[17]=' ';
a[18]='đ';
a[19]='ẹ';
a[20]='p';
a[21]=' ';
a[22]='t';
a[23]='r';
a[24]='a';
a[25]='i';
a[26]=' ';
a[27]='♥';
a[28]=' ';


function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==28)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>AI CŨNG NÓI VẬY MÀ <img src='https://64.media.tumblr.com/daec37408a83cad4f09bb8ec8584fca1/a9dfb59c8d7551e4-b9/s400x600/603c49315ac8bac90fcbbc8525729bba76492420.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ ỪA THÌ ANH BIẾT ĐẸP TRAI THẬT. NHƯNG EM CŨNG THÍCH ANH VẬY ANH CŨNG ĐÀNH CHỊU THIỆT YÊU MẦY VẬY .<img src='https://i.pinimg.com/originals/da/d1/d2/dad1d2cec81acd2589de664b9a3bc999.jpg'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>VẬY HÃY ĐỂ TRÁI TIM ANH THUỘC VỀ EM MỘT LẦN NHÉ!  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeWoZgV-82r4O2k0T5HkUCiJiSdfgtgVHMA&usqp=CAU'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				