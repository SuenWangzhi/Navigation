const hashMap = {}
$("input").focus(function () {
    $("input").css('background', '#ffffff')
    $(".kw-wrap").css('background', '#ffffff')
})

$("input").blur(function () {
    $("input").css('background', 'rgba(255,255,255,0)')
    $(".kw-wrap").css('background', 'rgba(255,255,255,0)')
})
$('.moon').click(function () {
    $('link[href="./css/nitai.css"]').attr('href', './css/dark-nitai.css');
    $('link[href="./css/default.css"]').attr('href', './css/dark-default.css');
    $(".moon").css('display', 'none')
    $(".sun").css('display', 'inline')
});
$('.sun').click(function () {
    $('link[href="./css/dark-nitai.css"]').attr('href', './css/nitai.css');
    $('link[href="./css/dark-default.css"]').attr('href', './css/default.css');
    $(".sun").css('display', 'none')
    $(".moon").css('display', 'inline')
});
let a = 1;
$('.setting').click(function () {
    if (a === 1) {
        $('link[href="./css/default.css"]').attr('href', './css/nitai.css')
        $('link[href="./css/dark-default.css"]').attr('href', './css/dark-nitai.css')
        a = 0
    } else {
        $('link[href="./css/nitai.css"]').attr('href', './css/default.css')
        $('link[href="./css/dark-nitai.css"]').attr('href', './css/dark-default.css')
        a = 1
    }
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
$('#addButton').on('click', () => {
    let url = window.prompt('网站地址')
    let name = window.prompt('网站名称')
    let icon = window.prompt('显示名称')
    const $siteList = $('.siteList')
    const $lastLi = $("ul li:last-child")
    const bgColor = parseInt(Math.random() * 16 + 1);
    const $lia = $(`<li class="box">
    <a class="href" href="${url}">
        <div class="img">
            <div class="website-icon color${bgColor}">
                ${icon}
            </div>
        </div>
        <p class="website-name">${name}</p>
    </a>
</li>s`).insertBefore($lastLi)
    console.log("aaa:", $lastLi)
})


