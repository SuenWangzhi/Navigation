const $siteList = $('.siteList')
const $lastLi = $("ul li:last-child")
const websites = JSON.parse(localStorage.getItem('websites'))
const pageStyle = JSON.parse(localStorage.getItem('pageStyle'))
const hashMap = websites || [
    {
        img: '//static.hdslb.com/mobile/img/512.png',
        url: '//bilibili.com',
        name: '哔哩哔哩',
        bgColor: '1'
    },
    {
        img: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-120.bbce8f18.png',
        url: '//zhihu.com',
        name: '知乎',
        bgColor: '1'
    },
    {
        img: 'https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png',
        url: '//juejin.cn',
        name: '掘金',
        bgColor: '1'
    },
    {
        img: 'https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*CUIoT4xopNYAAAAAAAAAAABkARQnAQ',
        url: '//yuque.com',
        name: '语雀',
        bgColor: '1'
    },
    {
        url: '//github.com',
        name: 'GitHub',
        bgColor: '12'
    }
]
const render = () => {
    $siteList.find('li:not(#lastLi)').remove()
    hashMap.forEach((node, index) => {
        if (!node.img) {
            const $li = $(`<li class="box">
                <a href="//${node.url}" target="_blank" class="img">
                    <div class="website-icon color${node.bgColor}">
                        ${node.name[0]}
                    </div>
                </a>
                <svg class="delete-icon">
                <use xlink:href="#icon-delete"></use>
            </svg>
                <p class="website-name">${node.name}</p>
           
        </li>`).insertBefore($lastLi)
            $li.on('click', '.delete-icon', (e) => {
                hashMap.splice(index, 1)
                localStorage.setItem('websites', JSON.stringify(hashMap))
                render()
            });
        } else {
            const $li = $(`<li class="box">
            <a href="${node.url}" target="_blank" class="img">
                <img class="website-icon"
                src="${node.img}" />
            </a>
            <svg class="delete-icon">
                <use xlink:href="#icon-delete"></use>
            </svg>
            <p class="website-name">${node.name}</p>
           
        </li>`).insertBefore($lastLi)
            $li.on('click', '.delete-icon', (e) => {
                hashMap.splice(index, 1)
                localStorage.setItem('websites', JSON.stringify(hashMap))
                render()
            });
        }
    })
}
render()
$('#lastLi').on('click', () => {
    let url = window.prompt('网站地址')
    let name = window.prompt('网站名称')
    const bgColor = parseInt(Math.random() * 16 + 1);
    hashMap.push({
        url: url,
        name: name,
        bgColor: bgColor
    })
    render()
    localStorage.setItem('websites', JSON.stringify(hashMap))
})
$("input").focus(function () {
    $("input").css('background', '#ffffff')
    $(".kw-wrap").css('background', '#ffffff')
})
$("input").blur(function () {
    $("input").css('background', 'rgba(255,255,255,0)')
    $(".kw-wrap").css('background', 'rgba(255,255,255,0)')
})
let a = pageStyle || 1;
const dog = () => {
    if (a === 1) {
        $(".moon").css('display', 'inline')
        $(".sun").css('display', 'none')
        $('link[name="pageStyle"]').attr('href', './css/default.css');
        $('.setting').html("拟态风格")
    } else if (a === 2) {
        $(".moon").css('display', 'none')
        $(".sun").css('display', 'inline')
        $('link[name="pageStyle"]').attr('href', './css/dark-default.css');
        $('.setting').html("拟态风格")
    } else if (a === 3) {
        $(".moon").css('display', 'inline')
        $(".sun").css('display', 'none')
        $('link[name="pageStyle"]').attr('href', './css/nitai.css');
        $('.setting').html("原生风格")
    } else if (a === 4) {
        $(".moon").css('display', 'none')
        $(".sun").css('display', 'inline')
        $('link[name="pageStyle"]').attr('href', './css/dark-nitai.css');
        $('.setting').html("原生风格")
    }
}
dog()
$('.moon').click(function () {
    if (a === 1) {
        a = 2
    } else (
        a = 4
    )
    localStorage.setItem('pageStyle', JSON.stringify(a))
    dog()
});
$('.sun').click(function () {
    if (a === 2) {
        a = 1
    } else (
        a = 3
    )
    localStorage.setItem('pageStyle', JSON.stringify(a))
    dog()
});
$('.setting').click(function () {
    if (a === 1) {
        a = 3
    } else if (a === 2) {
        a = 4
    } else if (a === 3) {
        a = 1
    } else {
        a = 2
    }
    localStorage.setItem('pageStyle', JSON.stringify(a))
    dog()
});
let b = 1;
$('.btn-change').click(function () {
    console.log("dianji")
    if (b === 1) {
        $(".search-icon").html('<use xlink: href="#icon-Bing"></use>')
        $("form").attr('action', "https://cn.bing.com/search?");
        b = 2
    } else if (b === 2) {
        $(".search-icon").html('<use xlink: href="#icon-baidu"></use>')
        $("form").attr('action', "https://www.baidu.com/s");
        $("input").attr('name', "wd");
        b = 3
    } else if (b === 3) {
        $(".search-icon").html('<use xlink: href="#icon-sougou"></use>')
        $("form").attr('action', "https://www.sogou.com/sogou");
        $("input").attr('name', "query");
        b = 4
    } else if (b === 4) {
        $(".search-icon").html('<use xlink: href="#icon-Google"></use>')
        $("form").attr('action', "https://www.google.com/search");
        $("input").attr('name', "q");
        b = 1
    }
});
document.oncontextmenu = function () {
    // return false;
}
$(".img").mousedown(function (e) {
    //右键为3
    if (3 == e.which) {
        console.log("e.which");
    } else if (1 == e.which) {
    }
})

