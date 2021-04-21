this.imgLimit=function(src,mw,mh, sf, ef){
    var img = new Image();
    img.src=src;
    img.onload =function(){
        var w = img.width
        ,h = img.height
        ,canvas = document.createElement('canvas')
        ,ctx = canvas.getContext('2d')
        ,aw = document.createAttribute("width")
        ,ah = document.createAttribute("height");
        if(w>mw||h>mh){
            // 铺底色 PNG转JPEG时透明区域会变黑色
            ctx.fillStyle = "#ffffff";
            w=h>w?w*mh/h:mw;
            h=h>img.width?mh:h*mw/img.width;
            aw.nodeValue = w;
            ah.nodeValue = h;
            canvas.setAttributeNode(aw);
            canvas.setAttributeNode(ah);
            ctx.fillRect(0, 0, w, h);
            ctx.drawImage(img, 0, 0, w, h);
            sf(canvas.toDataURL('image/jpeg',0.8))// 0-1默认图片质量为0.92 值越小，所绘制出的图像越模糊
        }else sf(src)
    }
    ;img.onerror =ef
}