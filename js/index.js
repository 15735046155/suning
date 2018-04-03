//banner效果图
{
    let imgs = document.querySelectorAll(".banner_zhong_img li");
    let pagers = document.querySelectorAll(".banner_lunbo li");
    let banner = document.querySelector(".banner_zhong");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    //点击切换
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele  pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });
    //自动轮播
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    //鼠标移入暂停
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    //s鼠标离开继续自动翻页
    banner.onmouseleave = function () {
        t = setInterval(move, 3000)
    };
    // let flag=true;
    //点击切换下一张
    next.onclick = function () {
        // if(flag){
        // flag=false;
        move();
        // }
    };
    //点击切换上一张
    prev.onclick = function () {
        // if(flag){
        // flag=false;
        n = n - 2;
        move();
        // }
    };
    // imgs.forEach(function (ele,index) {
    //     ele.addEventListener("transitionend",function () {
    //         flag=true;
    //     })
    // })
}
//banner 左侧导航的效果
{
    let tips = document.querySelectorAll(".banner_zuo_item");
    let tan = document.querySelectorAll(".banner_zuo_item_tan");
    // let obj = tan[0];
    tips.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            // obj.style.display = "none";
            tan[index].style.display = "block";
            // obj = tan[index];
        };
        ele.onmouseleave = function () {
            tan[index].style.display = "none";
        };
    });
}
//banner 中间导航效果
{
    let top = document.querySelectorAll(".daohang_zhong_item");
    let tan = document.querySelectorAll(".daohang_zhong_img");
    top.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            tan[index].style.height = "8px";
        };
        ele.onmouseleave = function () {
            tan[index].style.height = "0";
        }
    });
}
//banner 右侧导航的效果  文字轮播
{
    let inner = document.querySelector(".banner_you_zhong_inner");
    let items = document.querySelectorAll(".banner_you_zhong1");
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        inner.style.transition = "all 1s";
        n++;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginTop = "0";
            n = 0;
        }
        for (var i = 0; i < 4; i++) {
            inner.style.marginTop = n * -96 + "px";
        }
    }

    inner.onmouseenter = function () {
        clearInterval(t)
    };
    inner.onmouseleave = function () {
        t = setInterval(move, 3000)
    }
}
//topbar的效果
{
    let sidebar = document.querySelector(".sidebar");
    // let daohang=document.querySelector(".daohang_zuo");
    // let  daohangtext=document.querySelector(".duding2");
    // let cd=document.querySelector(".gudingchuxian");
    let topbar = document.querySelector(".topbar");

    window.onscroll = function () {
        let huibeijing = document.documentElement.scrollTop;
        if (huibeijing > 731) {
            topbar.style.display = "block";
            // daohangtext.onmouseenter=function () {
            //     cd.style.display="block" ;
            // };
            // daohang.onmouseleave=function () {
            //     // cd.style.display="none";
            //     alert(1)
            // };
        } else {
            topbar.style.display = "none";
        }
        if (huibeijing > 1559) {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    }
}
//sidebar效果
{
    let tips = document.querySelectorAll(".sidebar_li");
    let containers = document.querySelectorAll(".container");
    let top = document.querySelector(".fanhui");

    let flag = true;
    //比如现在是1，我要点击3，所以我要先获取3的ot，让3到浏览器上显示的时候，3的offsetTop就等于3的scrollTop
    // ，然后获取1的scrollTop。用3的要到浏览器上显示的scrollTop-1在浏览器时的scrollTop，就等于3要到浏览器上展示时要走的距离。
    tips.forEach(function (ele, index) {
        ele.onclick = function () {
            flag = false;
            let ot = containers[index].offsetTop - 50;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) / 8;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 200) {
                    clearInterval(t);
                    flag = true;
                }
                document.documentElement.scrollTop = now;
            }, 25)
        }
    });
    window.addEventListener("scroll", function () {
            if (flag) {
                // flag=false;
                let st = document.documentElement.scrollTop;
                for (let i = 0; i < containers.length; i++) {
                    if (st > containers[i].offsetTop - 100) {
                        for (let i = 0; i < tips.length; i++) {
                            tips[i].classList.remove("sidebar_li_active");
                        }
                        tips[i].classList.add("sidebar_li_active");
                    }
                }
            }
        }
    )
}
//sidebar返回顶端
{
    let top = document.querySelector(".fanhui");
    top.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25)
    }
}
//好货第三个效果
{
    let prev = document.querySelector(".prev1");
    let next = document.querySelector(".next1");
    let inner = document.querySelector(".haohuo_bottom_inner");
    let pager = document.querySelectorAll(".haohuo_lunbo p");
    let flag = true;
    let n = 1;
    next.onclick = function () {
        if (flag) {
            flag = false;
            inner.style.transition = "all 1s";
            n++;
            // if (n === pager.length) {
            //     n = pager.length - 1;
            //     return;
            // }
            inner.style.marginLeft = n * -390 + "px";
            pager[n].classList.add("dangqian");
            pager[n - 1].classList.remove("dangqian");
            obj = pager[n];
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            inner.style.transition = "all 1s";
            n--;
            // if (n < 0) {
            //     n = 0;
            //     return;
            // }
            inner.style.marginLeft = n * -390 + "px";
            // pager[n].classList.add("dangqian");
            // pager[n + 1].classList.remove("dangqian");
            // obj = pager[n];
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-390px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-1170px";
            n = 3;
        }
    });
    let obj = pager[0];
    pager.forEach(function (ele, index) {
        ele.onclick = function () {
            obj.classList.remove("dangqian");
            ele.classList.add("dangqian");
            obj = ele;
            inner.style.marginLeft = (index + 1) * -390 + "px";
            n = index + 1;
        }
    })
}
//视频轮播效果
{
    let prev = document.querySelector(".shengxian_right_zhong_zuo");
    let next = document.querySelector(".shengxian_right_zhong_you");
    let inner = document.querySelector(".shengxian_right_zhong_you_inner");
    let pager = document.querySelectorAll(".shengxian_right_zhong1");
    let flag = true;
    let n = 0;
    next.onclick = function () {
        inner.style.transition = "all 1s";
        n++;
        if (n === 2) {
            n = 1;
        }
        inner.style.marginLeft = n * -390 + "px";
    };
    prev.onclick = function () {
        inner.style.transition = "all 1s";
        n--;
        if (n < 0) {
            n = 0;
        }
        inner.style.marginLeft = n * -390 + "px";
    };
}
{
    let btns = document.querySelectorAll(".shengxian_right_zhong1");
    let imgs = document.querySelectorAll(".shengxian_right_shipin_content");
    let obj = imgs[0];
    btns.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.zIndex = "";
            imgs[index].style.zIndex = "9";
            obj = imgs[index];
        };
    })
}
//大汇聚效果
{
    let prev = document.querySelector(".dajuhui_prev");
    let next = document.querySelector(".dajuhui_next");
    let inner = document.querySelector(".dajuhui_inner");
    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            n--;
            inner.style.transition = "all 1s";
            flag = false;
            inner.style.marginLeft = -1000 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-1000px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-3000px";
            n = 3;
        }
    });
}
//右边固定效果
//js
// {
//     let tips = document.querySelectorAll(".xiaoxi_li h1");
//     let tan = document.querySelectorAll(".xiaoxi_li p");
//     let obj = tan[0];
//     tips.forEach(function (ele, index) {
//         ele.onmouseenter = function () {
//             obj.style.opacity = "0";
//             tan[index].style.opacity = "1";
//             obj = tan[index];
//         };
//         ele.onmouseleave = function () {
//             tan[index].style.opacity = "0";
//         }
//     });
// }
// {
//     let tips = document.querySelectorAll(".sigezi_li h1");
//     let tan = document.querySelectorAll(".sigezi_li p");
//     let obj = tan[0];
//     tips.forEach(function (ele, index) {
//         ele.onmouseenter = function () {
//             obj.style.opacity = "0";
//             tan[index].style.opacity = "1";
//             obj = tan[index];
//         };
//         ele.onmouseleave = function () {
//             tan[index].style.opacity = "0";
//         }
//     });
// }
// {
//     let tips = document.querySelector(".saoma h1");
//     let tan = document.querySelector(".saoma_tan");
//     tips.onmouseenter = function () {
//         tan.style.opacity = "1";
//     };
//     tips.onmouseleave = function () {
//         tan.style.opacity = "0";
//     }
// }
// {
//     let top = document.querySelector(".zhiding");
//     top.onclick = function () {
//         let st = document.documentElement.scrollTop;
//         let t = setInterval(function () {
//             st -= 200;
//             if (st < 0) {
//                 st = 0;
//                 clearInterval(t);
//             }
//             document.documentElement.scrollTop = st;
//         }, 25)
//     }
// }
//jQuery
{
    $(".xiaoxi_li").each(function (index) {
        $(this).mouseenter(function () {
            $(".xiaoxi_li p").eq(index).show().animate({left:"-47",opacity:"1"},500);
        });
        $(this).mouseleave(function () {
            $(".xiaoxi_li p").eq(index).hide().animate({opacity:"0"});
        })
    });
    $(".sigezi_li").each(function (index) {
        $(this).mouseenter(function () {
            $(".sigezi_li p").eq(index).show().animate({left:"-60",opacity:"1"},500);
        });
        $(this).mouseleave(function () {
            $(".sigezi_li p").eq(index).hide().animate({opacity:"0"});
        })
    });
    $(".saoma").each(function (index) {
        $(this).mouseenter(function () {
            $(".saoma_tan").eq(index).show().animate({left:"-134",opacity:"1"},500);
        });
        $(this).mouseleave(function () {
            $(".saoma_tan").eq(index).hide().animate({opacity:"0"});
        })
    });
}
//头部效果
{
    let box = document.querySelectorAll(".head_item_left1");
    let tan = document.querySelectorAll(".head_item_tan");
    box.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            tan[index].style.display = "block";
            ele.style.background = "#fff";
        };
        ele.onmouseleave = function () {
            tan[index].style.display = "none";
            ele.style.background = "";
        }
    })
}
//上边固定效果
{
    let box = document.querySelector(".topbar_car");
    let tan = document.querySelector(".topbar_car_tan");

    box.onmouseenter = function () {
        tan.style.display = "block";
        tan.style.background = "#fff";
    };
    box.onmouseleave = function () {
        tan.style.display = "none";
    }
}//购物车
{
    let goods = document.querySelector(".guding1");
    let content = document.querySelector(".banner_zuo9");
    let box = document.querySelector(".hezi");
    goods.onmouseenter = function () {
        content.style.display = "block";
    };
    box.onmouseleave = function () {
        content.style.display = "none";
    };
}//全部商品

//乐购效果
{
    let prev = document.querySelector(".lepingou_btn_zuo");
    let next = document.querySelector(".lepingou_btn_you");
    let inner = document.querySelector(".lepin_inner");
    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -590 * n + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            n--;
            inner.style.transition = "all 1s";
            flag = false;
            inner.style.marginLeft = -590 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-590px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-1770px";
            n = 3;
        }
    });
}