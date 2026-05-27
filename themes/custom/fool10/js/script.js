Drupal.behaviors.basic = {
  attach: function (context, settings) {
    (function ($) {
		$(".field--name-field-paragraph-image .field--item").each(function(){
			var imageHeight = $("img", this).height();
			var imageWidth = $("img",this).width();
			if(imageHeight > imageWidth){
				$(this).addClass("verticalImage");
			}			
		})
		$("a[href]").each(function () {
			if (!this.href.match(new RegExp("^(#|\/|(https?:\/\/" + location.hostname + "))"))) {
				// ドメインが違うリンクの場合にaにtarget="_blank"を付与.
				$(this).attr("target", "_blank");

				// external_linkのクラスを付与。こちらでCSS等でアイコンを表示させる
				$(this).addClass("external_link");
			}
		});
		var h2count = $(".node--type-blog .field--name-body h2,.node--type-blog2 h2").length;
		if(h2count != 0){
			$(".page-node-type-blog .node--type-blog,.page-node-type-blog2 .node--type-blog2").once("basic").before("<div class='index'><span class='toggle btn btn-info'>Index</span><div class='indexes well'></div></div>");
			$("#block-fool10-floater #toTop").once("basic").after("<div class='chapters'></div>");
			$(".page-node-type-blog .field--name-body h2,.node--type-blog2 h2").once("basic").each(function(j){
				var h2text = $(this).text();
				j = j+1;
				$(".indexes").append("<a href='#id"+j+"'>"+j+":"+h2text+"</a>");
				$(".chapters").append("<a href='#id"+j+"'>"+j+"</a>");
			})
			$(".indexes").hide();
			$(".toggle").once("basic").click(function(){
				$(".indexes").toggle();
			});
		}
		/*$(".page-node-type-blog,.page-node-type-blog2").once("basic").each(function(){
			var url = location.href;
			$(".node",this).append('<div class="fb-share-button" data-href="'+url+'" data-layout="button_count"></div>');
		})*/
		
		$(".view-frontpage,.view-picture-book,.view-image-by-image-title,.view-archive.view-display-id-page_1,.view-taxonomy-term").addClass("viewPage");

		$(".page-node-type-blog .field--name-body").addClass("lightbox-container");
		$(".page-node-type-blog .field--name-body a.colorbox").each(function(){
			$(this).attr("data-lightbox","page-group");
		})
		
		$("#block-fool10-views-block-archive-block-1 .view-content li").each(function(){
			var link = $("a",this).attr("href");
			$(this).replaceWith("<option value="+link+">"+$(this).text()+"</option>");
		})
		$("#block-fool10-views-block-archive-block-1 .view-content").replaceWith(function(){
			$(this).replaceWith("<select name='select' onChange='location.href=value;'><option selected='selected'>月別アーカイブ</option>"+$(this).html()+"</select>");
		})
		

		
		$(".navbar-default").removeClass("container").once("basic").wrapInner("<div class='inner container'></div>");
		$(".footer").removeClass("container");
		$("p:has(img)").addClass("hasImg clearfix");
		$("p:has(.pull-left)").addClass("toLeft");
		$(".page-node-type-blog .field--name-body").addClass("lightbox-container");
		$("p.hasImg").each(function(){
			var hasImgCount = $("img",this).length;
			if(hasImgCount > 3){
				$(this).addClass("overThree");
			}
		})
		
		$(".field--name-field-paragraph-image .field--item").each(function(){
			var imgTitle = $("img",this).attr("title");
			$("a",this).attr("title",imgTitle);
		})
		/*$(".view-image-by-image-title .views-field-field-paragraph-image a,.view-image-by-image-title .views-field-field-images a,.view-picture-book .views-field-field-images a,.page-node-type-blog2 .field--name-field-paragraph-image a").addClass("lbimage");*/
		$(".page-node-type-blog2 .field--name-field-paragraph-image a").addClass("lbimage")
		$(".view-image-by-image-title a.lbimage,.view-picture-book a.lbimage,.page-node-type-blog2 .field--name-field-paragraph-image a.lbimage").each(function(){
			$(this).attr("data-lightbox","page-group");
		})
		$(".lb-close").html("<span class='glyphicon glyphicon-remove-circle'></span>");
		
		$(".viewPage .view-content").addClass("clearfix");
		// #floater settings	
		$('a.anchorlink').click(function () {
			var speed = 500;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({
				scrollTop: position
			}, speed, "swing");
			return false;
		});
		
		if ($(window).width() < 768) {	
			$(".toolbar-tray").removeClass("is-active");
			$("#navbar .navbar-text").once("basic").insertAfter("#navbar");
			/*$("a.fc-more").css("display","none!important");*/
			$(".region-sidebar-second").appendTo("#navbar-collapse").removeClass("well");
			$(".region-navigation-collapsible").appendTo("#navbar-collapse");
		}
		if ($(window).width() >= 768) {
			$(".viewPage .views-row").matchHeight();
			$(".region-navigation-collapsible").appendTo(".region-sidebar-second");
		}
		$(".field--name-body iframe,.field--name-field-paragraph-text iframe,.field--name-field-youtube").once("basic").wrap("<div class='video-container'></div>");
		$(".path-bird").once("basic").each(function(){
			var value = $("#edit-field-images-title--2",this).attr("value");
			$("h1.page-header",this).text(value);
		})

		$(".view-picture-book.view-display-id-page_1 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/bird?contains="+title+"&field_paragraph_image_title="+title);				
		})
		$(".view-picture-book.view-display-id-page_2 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			if(title === 'JR西日本'){
				$(".views-field-title a,.views-field-field-images a",this).attr("href","/train?contains=JR西&field_paragraph_image_title=JR西");
			}else{
				$(".views-field-title a,.views-field-field-images a",this).attr("href","/train?contains="+title+"&field_paragraph_image_title="+title);
			}
		})
		
		$(".view-picture-book.view-display-id-page_3 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/butterfly?contains="+title+"&field_paragraph_image_title="+title);			
					
		})
		$(".view-picture-book.view-display-id-page_5 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/dragonfly?contains="+title+"&field_paragraph_image_title="+title);					
		})
		$(".view-picture-book.view-display-id-page_4 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/crab?contains="+title+"&field_paragraph_image_title="+title);	
		
		})
		$(".view-picture-book.view-display-id-page_7 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/insect?contains="+title+"&field_paragraph_image_title="+title);	
		
		})

		$(".view-picture-book.view-display-id-page_6 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/flower?contains="+title+"&field_paragraph_image_title="+title);	
		
		})
		
		$(".view-picture-book.view-display-id-page_8 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/fish?contains="+title+"&field_paragraph_image_title="+title);	
		
		})
		
		$(".view-picture-book.view-display-id-page_9 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/animal?contains="+title+"&field_paragraph_image_title="+title);	
		
		})
		$(".view-picture-book.view-display-id-page_11 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/mountain?contains="+title+"&field_paragraph_image_title="+title);	
		
		})
		
		$(".view-picture-book.view-display-id-page_12 .views-row").once("basic").each(function(){
			var title = $(".views-field-title a",this).text();
			$(".views-field-title a,.views-field-field-images a",this).attr("href","/street?contains="+title+"&field_paragraph_image_title="+title);	
		
		})
		
		$(".view-image-by-image-title .view-filters").hide();
		const searchParams = new URLSearchParams(window.location.search);
		$(".path-bird,.path-train,.path-butterfly,.path-dragonfly,.path-crab,.path-flower,.path-insect,.path-fish,.path-animal,.path-mountain,.path-street").each(function(){	
			var pageTitle = searchParams.get('contains');
			$("h1.page-header",this).text(pageTitle);
		})
		/*$(".view-picture-book .views-row").each(function(){
			var pageTitle = searchParams.get('contains');
			var imageTitle = $(".views-field-field-images-1 .field-content",this).text();
			console.log("imageTitle="+imageTitle);
			if(imageTitle === pageTitle){
				$(".views-field-field-images-1 .field-content",this).hide();
			}
		})*/
		
		$(".view .feed-icons a").html("<img src='/images/rss.png' alt='上町のおっさんの鳥鉄ブログ'/>");
		$(".view .feed-icons").appendTo(".region-sidebar-second");
		
		// star
		$(".path-star,.path-m-star").addClass("fullPage");
		$(".fullPage .col-sm-9").removeClass("col-sm-9").addClass("col-sm-12");
		$(".fullPage .col-sm-3").hide();
		$(".view-star .views-row").each(function(){
			if($(".views-field-field-paragraph-image",this).length){
				var bgUrl_p = $(".views-field-field-paragraph-image img", this).attr("src");
				$(this).css("background-image", "url(" + bgUrl_p +")");
			}else{
				var bgUrl = $(".views-field-field-images img", this).attr("src");
				$(this).css("background-image", "url(" + bgUrl +")");
			}
			
			$(".views-field-field-images img", this).hide();			
			$(".views-field-field-paragraph-image", this).hide();
		});
		$(".fullPage .view-star .view-content").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			fade: true
		});
		$(".fullPage .slick-prev").html("<span class='glyphicon glyphicon-menu-left'></span>");
		$(".fullPage .slick-next").html("<span class='glyphicon glyphicon-menu-right'></span>");
		
		$(".menu--secondary-menu li").each(function(i){
			$(this).addClass("item-"+i);
		})
		
		$(".path-archive").each(function(){
			var year = $("h1.page-header",this).text().slice(-4);
			var month = $("h1.page-header",this).text().slice(0, -4)
			$("h1.page-header",this).once("basic").html(year+"年"+month);
		})
		/*$(".view-archive.view-display-id-block_1 select option").not(':first').each(function(){
			var yearmonth = $(this).text();
			var subyearmonth = yearmonth.substring(0, yearmonth.indexOf("&nbsp;("));
			var trimsubyearmonth = subyearmonth.replace(/\s+/g, "");
			var year = subyearmonth.slice(-3);
			var month = subyearmonth.slice(0, -5);
			var postcount = yearmonth.substring(yearmonth.indexOf("("));			
			$(this).once("basic").html(trimsubyearmonth);
		})*/
		
		/*$("a.colorbox").each(function(){
			var linkImgURL = $(this).attr("href").split("/")[6];
			console.log(linkImgURL);
			$(this).attr("href",changeLinkImgURL);
		})*/
		
		// 挿入画像の相対アドレス化
		$("p.hasImg img").each(function(){
			var src = $(this).attr("src").replace("https://foolontheweb.net/","/");
			$(this).attr("src",src);
		})
		$("p.hasImg a").each(function(){
			var href = $(this).attr("href").replace("https://foolontheweb.net/","/");
			$(this).attr("href",href);
		})
		
		// block-fool10-floater
		$("#block-fool10-floater #toTop").html("<span class='glyphicon glyphicon-upload'></span>");
		$("#block-fool10-floater #toHome").html("<span class='glyphicon glyphicon-home'></span>");
		
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
                $('#block-fool10-floater').slideDown("fast");
                // ↑ (100より小さい時は)ページトップボタンをスライドダウン
            } else {
                $('#block-fool10-floater').slideUp("fast");
                // ↑ それ以外の場合の場合はスライドアップする
            }
        });
		
		// h2 to floater
		$(".node--type-blog .field--name-body h2,.node--type-blog2 h2").each(function(i){
			i = i+1;
			$(this).attr("id","id"+i);
			/*var text1 = [$(this).text()];	console.log(text1[0]);*/
		});


		$(".page-node-type-blog2 .field--name-field-paragraph-image").each(function(){
			var imageCount = $(".field--item",this).length;
			if(imageCount === 1){
				$(this).addClass("singleImg");
				var filePath = $(".field--item a",this).attr("href");
				$(".field--item a img",this).attr("src",filePath);
			}if(imageCount === 3){
				$(this).addClass("threeImgs");
			}if(imageCount >= 4){
				$(this).addClass("fourImgs");
				$(".field--item:lt(2)",this).addClass("firstRow");
			
			}
		})

		$("input#edit-search-api-fulltext").attr("placeholder","3文字以上で検索");
		
		$(".view-image-by-image-title2 .views-row").each(function(){
			if($(".views-field-field-paragraph-image",this).length){
				$(".views-field-field-images",this).hide();
			}
		})
		
		$("#block-fool10-main-menu a[href='https://www.youtube.com/@uemachi_ossan']").attr("target","_blank");
		$("#block-fool10-main-menu a[href='https://ueroku.net']").attr("target","_blank");
		$("iframe#edgeanime").parent("div").removeClass("video-container");
		
		$(".page-node-1898 a[href='/system/files/2023-12/IMG_9301.JPG']").attr("id","hekiga");
		$(".page-node-2281 a[href='/system/files/2024-02/IMG_0748h_0.jpg']").attr("href","/sites/default/files/2024-02/IMG_0748.JPG");
		$(".page-node-2281 a[href='/system/files/2024-02/IMG_0716.JPG']").attr("href","/sites/default/files/2024-02/IMG_0716o.JPG").attr("id","nowmap");
		
		$(".paragraph--type-paragraph1").each(function(){
			var pid = $("p.prevImg",this).attr("id");
			$(this).attr("id",pid);
			$("p.prevImg",this).removeAttr("id");
			var pcl = $("p.prevClass",this).attr("id");
			$(this).attr("class",pcl);
		})

		/*$(".field--name-field-kofun-img .field--item").each(function(){
			var imgurl = $(this).text()
			$(this).html("<img src='"+imgurl+"'>");
		})*/
		
		/*$(".paragraph--type-paragraph1").hasClass("oldPhoto").addClass("oldPhotoParagraph");*/
		$(".page-node-type-blog2").each(function(){
			if($(".field--name-field-vlog",this).length){
				var vlog = $(".field--name-field-vlog",this).text();
				$(".index",this).once("basic").prepend("<a class='btn btn-vlog' href='"+vlog+"'>VLOG版</a>");
				$(".field--name-field-vlog",this).hide();
			}
		})
		$(".page-node-2491").addClass("blackPage");
		$(".paragraph#twoImg .field--name-field-paragraph-image").addClass("threeImgs");
		
		
		
		$(".page-node-2542 .paragraph").each(function(){
			$("h3",this).prependTo(this);
		})
		
		$(".page-node-2552,.page-node-2559,.page-node-2561,.page-node-2563").addClass("photoNumber");
		$(".photoNumber .field--name-field-paragraph-image .field--item").addClass("withNumber");
		$(".photoNumber .field--name-field-paragraph-image .field--item").once("basic").each(function(i) {
			$(this).append("<span class='circle-num'>" + (i + 1) + "</span>");
		});
		$(".page-node-2542 img[title='白覆輪天目茶碗']").attr("id","shirofukurin");
	})(jQuery);
}
};