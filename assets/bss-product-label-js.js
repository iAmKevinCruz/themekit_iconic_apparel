!(function (e) {
  var t = {};
  function s(i) {
    if (t[i]) return t[i].exports;
    var a = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = t),
    (s.d = function (e, t, i) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          s.d(
            i,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return i;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = ""),
    s((s.s = 0));
})([
  function (e, t, s) {
    "use strict";
    function i(e, t, s, i) {
      let a = "";
      if (
        e(s).hasClass("product-card__price-wrapper") ||
        e(s).find(".product-card__price-wrapper").length
      )
        a = e(s).find(".product-card__price-wrapper").length
          ? e(s).find(".product-card__price-wrapper")
          : e(s);
      else if (
        e(s).hasClass("product__gallery") ||
        e(s).closest("section.product").find(".product__content .price").length
      )
        a = e(s).closest("section.product").find(".product__content .price");
      else if (
        e(s).hasClass("product__title") &&
        e(s).parent().find(".product__prices").length
      )
        a = e(s).parent().find(".product__prices");
      else if (
        e(s)
          .closest(".grid.product-single")
          .find(".product-single__info-wrapper .product-single__meta-list")
          .length
      )
        a = e(s)
          .closest(".grid.product-single")
          .find(".product-single__info-wrapper .product-single__meta-list");
      else if (
        e(s).hasClass("grid__item") &&
        e(s).find(".product-card .product-card__availability").length
      )
        appended = !0;
      else if (
        "offers" == e(s).attr("itemprop") &&
        e(s).find(".inline-list.product-meta").length
      )
        a = e(s).find(".inline-list.product-meta");
      else if (
        e(s).hasClass("product-item__link-wrapper") &&
        e(s).find(".product-item__meta .product-item__price-wrapper").length
      )
        a = e(s).find(".product-item__meta .product-item__price-wrapper");
      else if (
        e(s).hasClass("featured-product__photo") &&
        e(s)
          .closest(".product.featured-product")
          .find(".featured-product__details .product__price").length
      )
        a = e(s)
          .closest(".product.featured-product")
          .find(".featured-product__details .product__price");
      else if (
        e(s).hasClass("product__img-wrapper") &&
        e(s).closest(".grid__item").find("a .grid-link__meta").length
      )
        a = e(s).closest(".grid__item").find("a .grid-link__meta");
      else if (
        e(s).hasClass("product-media--featured-product") &&
        e(s)
          .closest(".featured-product__wrapper")
          .find(".featured-product__content-column .product__price").length
      )
        a = e(s)
          .closest(".featured-product__wrapper")
          .find(".featured-product__content-column .product__price");
      else if (e(s).find('dl[class*="price"]').first().length)
        a = e(s).find('dl[class*="price"]').first();
      else if (e(s).find('div[class*="price"]').first().length)
        a = e(s).find('div[class*="price"]').first();
      else if (
        e(s).closest("article.collection-product").find(".pricing").length
      )
        a = e(s).closest("article.collection-product").find(".pricing").first();
      else if (
        e(s).hasClass("product") &&
        e(s).find(".product__details .product__details__hover .product__price")
          .length
      )
        a = e(s).find(
          ".product__details .product__details__hover .product__price"
        );
      else if (
        e(s).hasClass("grid-product__wrapper") &&
        e(s).find(".grid-product__price-wrap .grid-product__price").length
      )
        a = e(s).find(".grid-product__price-wrap .grid-product__price");
      else if (
        e(s).hasClass("product-galley--image-background") &&
        e(s).closest(".product--outer").find(".product-pricing").length
      )
        a = e(s).closest(".product--outer").find(".product-pricing");
      else if (
        e(s).hasClass("AspectRatio AspectRatio--withFallback") &&
        e(s)
          .closest(".Product__Wrapper")
          .find(".ProductMeta__PriceList.Heading").length
      )
        a = e(s)
          .closest(".Product__Wrapper")
          .find(".ProductMeta__PriceList.Heading");
      else if (e(s).hasClass("product-media--image")) {
        let t = e(s).closest(".light-space-above");
        t.length && (a = t.find(".current-price"));
      } else if (e(s).hasClass("spf-product-card__inner")) {
        let t = e(s).closest(".spf-product-card");
        t.length && (a = t.find(".spf-product__info"));
      } else if (
        10299 == t.storeId &&
        "products" == i &&
        e(s).hasClass("photo-zoom-link")
      ) {
        let t = e(s).closest(".grid");
        t.length && (a = t.find(".product__price"));
      } else if (568 == t.storeId) {
        if ("products" == i && e(s).hasClass("product-media-container")) {
          let t = e(s).closest(".product__section-container");
          t.length && (a = t.find(".price__pricing-group"));
        }
        "" == i &&
          e(s).parent().hasClass("product__section-content") &&
          (a = e(s).parent().find("#product-price"));
      } else if (6673 == t.storeId) {
        if ("products" == i && e(s).hasClass("zoomWrapper")) {
          let t = e(s).closest(".row");
          t.length && (a = t.find(".prices"));
        }
        if (
          "/search" == window.location.pathname &&
          e(s).hasClass("product-image")
        ) {
          let t = e(s).closest(".product-item.grid-item");
          t.length && (a = t.find(".price-box"));
        }
        if ("collections" == i && e(s).hasClass("product-image")) {
          let t = e(s).closest(".product-item");
          t.length && (a = t.find(".price-box"));
        }
      } else if (
        11103 == t.storeId &&
        e(s).hasClass("boost-pfs-filter-product-item-image")
      ) {
        if ("collections" == i) {
          let t = e(s)
            .closest(".boost-pfs-filter-product-item")
            .find(".boost-pfs-filter-product-item-price");
          t.length && (a = t);
        }
        if ("/search" == window.location.pathname) {
          let t = e(s)
            .closest(".boost-pfs-filter-product-item")
            .find(".boost-pfs-filter-product-bottom");
          t.length && (a = t);
        }
      } else if (12042 == t.storeId && e(s).hasClass("image-cell")) {
        if ("collections" == i) {
          let t = e(s).parent().parent().find(".price");
          t.length && (a = t);
        }
      } else if (
        12582 == t.storeId &&
        "products" == i &&
        e(s).hasClass("aspect-ratio")
      ) {
        let t = e(s).closest(".product-block-list__wrapper");
        t.length && (a = t.find(".price-list"));
      } else if (12221 == t.storeId)
        e(s).parent().hasClass("desktop-row") && (appended = !0);
      else if (12972 == t.storeId) {
        if ("products" == i && e(s).hasClass("evm-ws-card")) {
          let t = e(s).find(".ws-card__price ");
          t.length && (a = t);
        }
      } else if (7505 == t.storeId)
        if ("products" == i && e(s).hasClass("product__media")) {
          let t = e(s).closest(".product").find(".price__regular");
          t.length && (a = t);
        } else
          ("collections" != i && "/search" != window.location.pathname) ||
            !e(s).hasClass("card-information__text") ||
            (a = e(s).closest(".card-information__wrapper").find(".price"));
      else if (9273 == t.storeId) {
        if ("products" == i && e(s).hasClass("main-img-link")) {
          let t = e(s).closest(".row").find(".sku");
          t.length && (a = t);
        }
      } else if (
        8667 == t.storeId &&
        "products" == i &&
        e(s).hasClass("ProductItem")
      ) {
        e(s).parent().find(".bss_pb_img").length > 0 && (appended = !0);
      } else
        5196 == t.storeId && "Column" == e(s).attr("data-pf-type")
          ? (a = e(s).find('[data-product-type="price"][data-product-price]'))
          : 14136 == t.storeId &&
            e(s)
              .closest(".boost-pfs-filter-product-item-inner")
              .find(".boost-pfs-filter-product-item-title").length
          ? (a = e(s)
              .closest(".boost-pfs-filter-product-item-inner")
              .find(".boost-pfs-filter-product-item-price"))
          : 13882 == t.storeId && "products" == i
          ? (a = e(s).find(".productitem__price"))
          : 15564 == t.storeId
          ? ("/" == window.location.pathname &&
              e(s).hasClass("product-image") &&
              (a = e(s).closest(".product-inner").find(".price")),
            "products" == i &&
              (a = e(s).closest(".pr_sticky_content").find(".price-review")))
          : 17629 == t.storeId
          ? "collections" == i &&
            e(s).hasClass("card-information__text") &&
            (a = e(s).closest(".card-information__wrapper").find(".price"))
          : 19549 == t.storeId
          ? "products" == i &&
            e(s).hasClass("primgWrp") &&
            (a = e(s).closest(".product-single").find(".price__unit"))
          : 16645 == t.storeId
          ? "collections" == i &&
            e(s).hasClass("product-content") &&
            (a = e(s).closest(".product-inner").find(".price"))
          : 5950 == t.storeId
          ? ("collections" != i &&
              "/search" != window.location.pathname &&
              "" != i) ||
            !e(s).hasClass("image__container") ||
            (a = e(s)
              .closest(".product-wrap")
              .find(".product-thumbnail__price"))
          : 10234 == t.storeId
          ? "collections" == i &&
            e(s).hasClass("spf-product-card__title") &&
            (a = e(s)
              .closest(".spf-product-card")
              .find(".spf-product-card__price-wrapper"))
          : 10504 == t.storeId
          ? ("/search" == window.location.pathname &&
              e(s).hasClass("grid__item") &&
              e(s).closest(".grid").find(".product__inline__price").length &&
              (a = e(s).closest(".grid").find(".product__inline__price")),
            "" == i &&
              e(s).closest(".product-grid-item").find(".price").length &&
              (a = e(s).closest(".product-grid-item").find(".price")),
            "products" == i &&
              e(s).hasClass("lazy-image") &&
              e(s).closest(".product-single").find(".product__price__main")
                .length &&
              (a = e(s)
                .closest(".product-single")
                .find(".product__price__main")))
          : 16183 == t.storeId
          ? "products" == i && e(s).hasClass("flickity-slider")
            ? (a = e(s).closest(".pr_sticky_content").find(".price_range"))
            : ("collections" != i && "" != i) ||
              !e(s).hasClass("pr") ||
              (a = e(s).closest(".product-inner").find(".price"))
          : 16502 == t.storeId
          ? (e(s).hasClass("global-border-radius") &&
              (a = e(s).closest(".product-block").find(".product-price")),
            e(s).hasClass("ga-product") &&
              (a = e(s).find(".ga-product_price-container")),
            "products" == i &&
              e(s).hasClass("breadcrumbs-list__item") &&
              (a = e(s)
                .closest(".template-product")
                .find(".product-detail__price")),
            e(s).hasClass("image-with-text__image-size") &&
              (a = e(s).closest(".page-width").find(".image-with-text__link")))
          : 17650 == t.storeId &&
            "/search" == window.location.pathname &&
            e(s).hasClass("grid__item") &&
            e(s).closest(".grid").find("s").length &&
            (a =
              e(s).hasClass("grid__item") && e(s).closest(".grid").find("s"));
      if (
        Shopify &&
        Shopify.theme &&
        Shopify.theme.name &&
        -1 !== Shopify.theme.name.indexOf("Dawn")
      )
        if (e(s).hasClass("card-information__text")) {
          let t = e(s).closest(".card-wrapper").find(".price");
          t.length && !t.parent().find(".bss_pb_img").length && (a = t);
        } else if (e(s).hasClass("card__text")) {
          let t = e(s).closest(".card-wrapper").find(".price");
          t.length && !t.parent().find(".bss_pb_img").length && (a = t);
        }
      return a;
    }
    function a(e, t, s) {
      var i = !0;
      if (s.enable_visibility_date) {
        var a = new Date();
        s.from_date && !s.to_date
          ? a < new Date(s.from_date) && (i = !1)
          : s.to_date && !s.from_date
          ? a > new Date(s.to_date) && (i = !1)
          : s.from_date && s.to_date
          ? (a < new Date(s.from_date) || a > new Date(s.to_date)) && (i = !1)
          : s.from_date || s.to_date || (i = !0);
      }
      return i;
    }
    function r(e, t, s, i) {
      let a = `\n                             top : ${s.label_unlimited_top}% !important;\n                             left : ${s.label_unlimited_left}% !important; \n                             margin-top : 0 !important;\n                             margin-left : 0 !important;`;
      if (
        (-1 != [536, 5662].indexOf(t.storeId) &&
          (a = `\n                             top : ${s.label_unlimited_top}% !important;\n                             left : ${s.label_unlimited_left}% !important; \n                             margin-top : 0;\n                             margin-left : 0`),
        (7807 == t.storeId && e(i).hasClass("rondell-item-crop")) ||
          (10662 == t.storeId && e(i).hasClass("product-image-gallery")))
      ) {
        let t = e(i)
            .find(
              'img[src*="//cdn.shopify.com/s/files/"], img[srcset*="/cdn.shopify.com/s/files/"]'
            )
            .first()
            .width(),
          r = e(i)
            .find(
              'img[src*="//cdn.shopify.com/s/files/"], img[srcset*="/cdn.shopify.com/s/files/"]'
            )
            .first()
            .height();
        if (0 == s.fixed_percent) {
          let e = (s.label_unlimited_left * t) / 100;
          if (e + s.label_unlimited_width > t) {
            (e -= s.label_unlimited_width - t + e),
              (s.label_unlimited_left = (100 * e) / t);
          }
          let i = (s.label_unlimited_top * r) / 100;
          if (i + s.label_unlimited_height > r) {
            (i -= s.label_unlimited_height - r + i),
              (s.label_unlimited_top = (100 * i) / r);
          }
        }
        a = `\n            top : ${s.label_unlimited_top}% !important;\n            left : ${s.label_unlimited_left}% !important; \n            margin-top : 0;\n            margin-left : 0`;
      }
      return a;
    }
    function o(e, t, s, i, a) {
      var r = e(i)
        .find(
          'img[src*="//cdn.shopify.com/s/files/"], img[srcset*="/cdn.shopify.com/s/files/"], .collection-grid-item__overlay'
        )
        .not(".bss-pl-frontend")
        .first();
      if (!r.length) {
        r = e(i).find(".grid-view-item__image-wrapper");
        if (
          (-1 !==
            [
              10170, 11088, 7901, 10795, 9266, 18652, 11819, 11103, 4527, 11906,
              7637, 8947, 13260, 16183, 18978,
            ].indexOf(t.storeId) &&
            "products" != a &&
            (r = e(i)),
          9873 == t.storeId &&
            "products" != a &&
            (r = e(i).find(".ProductItem__ImageWrapper")),
          16099 == t.storeId &&
            ("products" == a && (r = e(i).find(".lazyautosizes")),
            ("collections" != a && "/" != window.location.pathname) ||
              (r = e(i).find(".product-grid-image"))),
          7832 == t.storeId &&
            (("collections" != a && "/search" != window.location.pathname) ||
              (r = e(i))),
          13254 == t.storeId &&
            ("products" == a && (r = e(i).find(".image-wrap")),
            ("collections" != a && "/search" != window.location.pathname) ||
              (r = e(i).find(".grid-product__image-mask"))),
          16382 == t.storeId &&
            ("/" == window.location.pathname &&
              (r = e(i).find(".grid-product__image-mask")),
            ("collections" != a && "/" != window.location.pathname) ||
              (r = e(i).find(".grid-product__image-mask"))),
          17606 == t.storeId &&
            (("collections" != a && "/" != window.location.pathname) ||
              (r = e(i).find(".image--root")),
            "products" == a && e(i).hasClass("image--container") && (r = e(i)),
            "products" == a &&
              e(i).hasClass("product--root") &&
              (r = e(i).find(".image--container"))),
          15956 == t.storeId &&
            (("collections" != a && "/" != window.location.pathname) ||
              (r = e(i).find(".ProductItem__ImageWrapper")),
            "products" == a &&
              (e(i).hasClass("AspectRatio--withFallback") ||
                e(i).hasClass("vtl-product-card__header")) &&
              (r = e(i))),
          4458 == t.storeId &&
            "products" != a &&
            (r = e(i).find(".grid-product__image-mask")),
          8747 == t.storeId &&
            "products" != a &&
            (r = e(i).find(".image--hover-second")),
          10809 == t.storeId &&
            ("products" != a && (r = e(i).find(".ProductItem__ImageWrapper")),
            "products" == a && (r = e(i))),
          12240 == t.storeId &&
            ("collections" == a && (r = e(i).find(".product--wrapper")),
            "products" == a &&
              (r = e(i).find(".product--wrapper, .product-single__media "))),
          5062 == t.storeId &&
            (e(i).hasClass("clerk-sometime-search-product-image") ||
              e(i).hasClass("cart__image")) &&
            (r = e(i)),
          1381 == t.storeId &&
            "collections" == a &&
            e(i).find(".product-block__primary-image").length &&
            (r = e(i).find(".product-block__primary-image")),
          13364 == t.storeId &&
            ("collections" == a &&
              e(i).hasClass("grid-product__content") &&
              (r = e(i)),
            ("/search" != window.location.pathname && "" != a) ||
              !e(i).hasClass("grid-product__content") ||
              (r = e(i).find(".grid-product__image-mask")),
            "products" == a &&
              (e(i).closest(".grid-product__image-mask").length &&
                (r = e(i).closest(".grid-product__image-mask")),
              e(i).hasClass("image-wrap") && (r = e(i)))),
          13538 == t.storeId &&
            "/search" == window.location.pathname &&
            e(i).hasClass("ProductItem__Wrapper") &&
            e(i).find(".AspectRatio").length &&
            (r = e(i).find(".AspectRatio")),
          10326 == t.storeId &&
            ("/search" == window.location.pathname || "collections" == a) &&
            e(i).hasClass("boost-pfs-filter-product-item-inner"))
        ) {
          e(i).find(".boost-pfs-filter-product-item-image").length &&
            (r = e(i));
        }
        if (
          (13652 == t.storeId &&
            "collections" == a &&
            e(i).hasClass("image__container") &&
            (r = e(i)),
          13785 == t.storeId &&
            ("/search" == window.location.pathname || "collections" == a) &&
            e(i).hasClass("grid-product__content"))
        ) {
          e(i).find(".grid-product__image-mask").length && (r = e(i));
        }
        12432 == t.storeId &&
          "products" == a &&
          e(i).hasClass("ProductItem__Wrapper") &&
          e(i).find(".AspectRatio") &&
          (r = e(i).find(".AspectRatio")),
          12318 == t.storeId &&
            "collections" == a &&
            e(i).hasClass("product__img-wrapper") &&
            (r = e(i)),
          13752 == t.storeId &&
            "collections" == a &&
            e(i).hasClass("grid-view_image") &&
            (r = e(i)),
          14585 == t.storeId &&
            (("collections" != a && "" != a) ||
              !e(i).hasClass("product-card__image") ||
              (r = e(i))),
          15303 == t.storeId &&
            (("collections" != a && "" != a && "products" != a) ||
              !e(i).hasClass("prod-image") ||
              (r = e(i))),
          7964 == t.storeId &&
            (("collections" != a && "/search" != window.location.pathname) ||
              !e(i).hasClass("ProductItem__Wrapper") ||
              (e(i).find(".ProductItem__ImageWrapper ").length &&
                (r = e(i).find(".ProductItem__ImageWrapper ")))),
          14854 == t.storeId &&
            (("collections" != a && "" != a) ||
              !e(i).hasClass("collectionBlock-image") ||
              (r = e(i).find("a"))),
          16183 == t.storeId &&
            "products" == a &&
            e(i).hasClass("flickity-slider") &&
            (r = e(i)),
          2998 == t.storeId &&
            "collections" == a &&
            (r = e(i).find(".ProductItem__ImageWrapper ")),
          3408 == t.storeId &&
            e(i).hasClass("grid-product__content") &&
            (r = e(i).find(".grid-product__image-mask")),
          (13134 != t.storeId && 14857 != t.storeId) ||
            ("products" == a &&
              e(i).hasClass("product__image-wrapper") &&
              e(i).closest(".lazyload__image-wrapper").length &&
              (r = e(i).closest(".lazyload__image-wrapper"))),
          17783 == t.storeId &&
            ("products" == a && e(i).hasClass("AspectRatio") && (r = e(i)),
            ("collections" != a &&
              "products" != a &&
              "" != a &&
              "/search" != window.location.pathname) ||
              !e(i).hasClass("ProductItem__Wrapper") ||
              (r = e(i)));
      }
      if (
        (5062 == t.storeId &&
          (e(i).hasClass("clerk-sometime-search-product-image") ||
            e(i).hasClass("cart__image") ||
            e(i).hasClass("clerk-instant-search-key-selectable")) &&
          (r = e(i)),
        (13134 != t.storeId && 14857 != t.storeId) ||
          ("products" == a &&
            e(i).hasClass("product__image-wrapper") &&
            e(i).closest(".lazyload__image-wrapper").length &&
            (r = e(i).closest(".lazyload__image-wrapper"))),
        15336 == t.storeId &&
          "products" == a &&
          e(i).hasClass("product-item") &&
          e(i).find(".product-item__image-wrapper").length &&
          (r = e(i).find(".product-item__image-wrapper")),
        18781 == t.storeId &&
          (("collections" != a &&
            "products" != a &&
            "/" != window.location.pathname) ||
            !e(i).hasClass("ProductItem__Wrapper") ||
            (r = e(i).find(".AspectRatio")),
          "products" == a &&
            e(i).hasClass("AspectRatio--withFallback") &&
            (r = e(i))),
        12184 != t.storeId ||
          !e(i).hasClass("product-image") ||
          ("collections" != a && "products" != a) ||
          (r = e(i)),
        13652 == t.storeId &&
          "products" == a &&
          e(i).hasClass("product-gallery__thumbnail") &&
          e(i).closest(".product-gallery").length)
      ) {
        let t = e(i)
          .closest(".product-gallery")
          .find(".product-gallery__image");
        t.length && (r = t);
      }
      return (
        (12432 != t.storeId && 14611 != t.storeId) ||
          ("collections" == a &&
            e(i).hasClass("spf-product-card__inner") &&
            (r = e(i)),
          "products" == a &&
            (e(i).hasClass("AspectRatio")
              ? (r = e(i))
              : e(i).hasClass("ProductItem__Wrapper") &&
                e(i).find(".AspectRatio").length &&
                (r = e(i).find(".AspectRatio")))),
        7637 == t.storeId &&
          ("products" == a && e(i).hasClass("grid-product__content")
            ? (r = e(i).find(".grid-product__image-mask"))
            : "collections" == a && e(i).hasClass("spf-product-card__inner")
            ? (r = e(i))
            : "" == a &&
              e(i).hasClass("grid-product__content") &&
              (r = e(i).find(".grid-product__image-mask"))),
        7832 == t.storeId &&
          "collections" == a &&
          (r = e(".grid-view-item-image")),
        7440 == t.storeId &&
          (e(i).hasClass("product-collection__image")
            ? (r = e(i))
            : "products" == a && (r = e(".product-page-gallery__main"))),
        15833 == t.storeId &&
          "collections" == a &&
          (r = e(i).closest(".card-wrapper")),
        14853 == t.storeId &&
          (r =
            "products" == a
              ? e(i).closest(".productImgSlider")
              : e(i).find(".collectionBlock-image__link")),
        10592 == t.storeId &&
          "products" == a &&
          e(i).hasClass("card-information__text") &&
          (r = e(i).closest(".card-wrapper").find(".media")),
        16033 == t.storeId &&
          (r =
            "products" == a
              ? e(i)
                  .closest(".Product__Gallery")
                  .find(".AspectRatio.AspectRatio--withFallback")
              : e(i).find(".AspectRatio")),
        15958 != t.storeId ||
          ("collections" != a && "/search" != window.location.pathname) ||
          (r = e(i).find(".grid-product__secondary-image").first()),
        15851 == t.storeId &&
          "collections" == a &&
          e(i).hasClass("image-cont") &&
          (r = e(i).find(".product-link").first()),
        15025 == t.storeId &&
          (("collections" != a &&
            "/search" != window.location.pathname &&
            "products" != a) ||
            !e(i).hasClass("grid-product__image-wrapper") ||
            (r = e(i).find(".product--image").first())),
        8702 == t.storeId &&
          (("collections" != a &&
            "/search" != window.location.pathname &&
            "products" != a) ||
            !e(i).hasClass("grid-product__content") ||
            (r = e(i).find(".grid-product__image-mask").first())),
        17450 == t.storeId &&
          (("collections" != a &&
            "/search" != window.location.pathname &&
            "products" != a) ||
            !e(i).hasClass("product-block__inner") ||
            (r = e(i).find(".image-inner").first())),
        17005 == t.storeId &&
          (e(i).hasClass("hover-overlay") ||
            e(i).hasClass("shopify-product-gallery__image")) &&
          (r = e(i)),
        12379 == t.storeId &&
          e(i).hasClass("grid-item__content") &&
          (r = e(i).find(".grid-product__image-wrap")),
        4066 == t.storeId &&
          e(i).hasClass("grid-product__content") &&
          (r = e(i).find(".grid-product__image-mask")),
        13652 == t.storeId &&
          e(i).hasClass("image__container") &&
          "products" == a &&
          (r = e(i)),
        12379 == t.storeId &&
          (!e(i)
            .parent()
            .parent()
            .parent()
            .hasClass("page-width--flush-small") ||
            ("collections" != a && "/search" != window.location.pathname) ||
            (r = e(i).closest(".grid-item"))),
        16288 == t.storeId &&
          e(i).hasClass("ProductItem__Wrapper") &&
          e(i).find(".AspectRatio--withFallback").length &&
          (r = e(i).find(".AspectRatio--withFallback")),
        18078 == t.storeId &&
          e(i).hasClass("image-cont") &&
          e(i).find(".product-link").length &&
          (r = e(i).find(".product-link")),
        5798 == t.storeId &&
          ("/" == window.location.pathname &&
            (r = e(i).find(".grid-product__image-mask")),
          "collections" == a &&
            e(i).hasClass("spf-product-card__inner") &&
            (r = e(i))),
        15860 == t.storeId &&
          "collections" == a &&
          e(i).hasClass("ProductItem__Wrapper") &&
          (r = e(i)),
        12969 == t.storeId &&
          ("products" == a &&
            e(i).hasClass("product-single__photo") &&
            (r = e(i).find(".product-single__photo-image")),
          "/" == window.location.pathname &&
            e(i).parent().hasClass("product-card__gallery") &&
            (r = e(i))),
        9306 == t.storeId &&
          "collections" == a &&
          e(i).hasClass("product-grid-item--center") &&
          (r = e(i).find(".product_card")),
        19375 == t.storeId &&
          e(i).hasClass("ProductItem__Wrapper") &&
          (r = e(i).find(".AspectRatio")),
        5822 == t.storeId &&
          "collections" == a &&
          e(i).hasClass("one-third") &&
          (r = e(i).find(".transition-in")),
        19173 == t.storeId && e(i).hasClass("product-item-photo") && (r = e(i)),
        11052 == t.storeId &&
          (("collections" != a && "/search" != window.location.pathname) ||
            !e(i).hasClass("product-item") ||
            (r = e(i).find(".product-item__image-wrapper")),
          "products" == a &&
            e(i).hasClass("aspect-ratio") &&
            (r = e(i).parent())),
        19095 == t.storeId &&
          (("collections" != a &&
            "/" != window.location.pathname &&
            "/search" != window.location.pathname) ||
            (r = e(i).find(".product-slider"))),
        2521 == t.storeId &&
          "collections" == a &&
          (r = e(i).find(".product-card__image-container")),
        r
      );
    }
    function l(e, t, s, i, a, r) {
      var l = o(e, t, 0, i, a);
      ((e(l).css("max-height") && -1 != e(l).css("max-height").indexOf("%")) ||
        "none" == e(l).css("max-height")) &&
        (0 == l.height() ||
          (e(l).css("height") && -1 != e(l).css("height").indexOf("%"))) &&
        (l = e(l).closest(".photos__item, .supports-js"));
      var n = 0,
        d = l.height() > 0 ? l.height() : parseFloat(e(l).css("max-height"));
      15833 == t.storeId && (d -= parseFloat(d / 5));
      let p = 1 == r ? s.height : s.mobile_height_label;
      return (
        (n =
          0 == s.fixed_percent || 0 == r
            ? p + d * (s.margin_top / 100) >= d
              ? d - p
              : d * (s.margin_top / 100)
            : s.margin_top + p > 100
            ? s.margin_top < p
              ? d * ((100 - p) / 100)
              : d * (s.margin_top / 100) - (p / 100) * d
            : d * (s.margin_top / 100)),
        Math.max(n, 0)
      );
    }
    function n(e, t, s, i, a, r) {
      var l = o(e, t, 0, i, a);
      ((e(l).css("max-width") && -1 != e(l).css("max-width").indexOf("%")) ||
        "none" == e(l).css("max-width")) &&
        (0 == l.width() ||
          (e(l).css("width") && -1 != e(l).css("width").indexOf("%"))) &&
        (l = e(l).closest(".photos__item, .supports-js"));
      var n = 0,
        d = l.width() > 0 ? l.width() : parseFloat(e(l).css("max-width"));
      let p = 1 == r ? s.width : s.mobile_width_label;
      return (
        (n =
          0 == s.fixed_percent || 0 == r
            ? p + d * (s.margin_left / 100) > d
              ? d - p
              : d * (s.margin_left / 100)
            : s.margin_left + p > 100
            ? s.margin_left < p
              ? d * ((100 - p) / 100)
              : d * (s.margin_left / 100) - (p / 100) * d
            : d * (s.margin_left / 100)),
        Math.max(n, 0)
      );
    }
    function d(e, t, s) {
      if ("allcustomers" == s.customer_type) return !0;
      if ("customer_tags" == s.customer_type) {
        for (
          var i = !1, a = t.customerTags.split(","), r = 0;
          r < a.length;
          r++
        )
          if (
            null !== s.customer_tags &&
            void 0 !== s.customer_tags &&
            "" !== a[r] &&
            s.customer_tags.includes(a[r])
          ) {
            i = !0;
            break;
          }
        return i;
      }
      if ("login_customer" == s.customer_type) return "null" != t.customerTags;
      if ("exclude_customer_tags" == s.customer_type) {
        for (i = !0, a = t.customerTags.split(","), r = 0; r < a.length; r++)
          if (
            null !== s.exclude_customer_tags &&
            void 0 !== s.exclude_customer_tags &&
            "" !== a[r] &&
            s.exclude_customer_tags.includes(a[r])
          ) {
            i = !1;
            break;
          }
        return i;
      }
      return !0;
    }
    function p(e, t, s, i, o, p, c) {
      var h = JSON.parse(JSON.stringify(i));
      let _ = "";
      var f = h.format_money;
      if (null != f && null != f)
        if ("{" != f[0]) for (var g = 0; "{" != f[g]; ) (_ += f[g]), g++;
        else {
          for (g = f.length - 1; "}" != f[g]; ) (_ += f[g]), g--;
          _ = _.split("").reverse().join("");
        }
      18121 == t.storeId && (_ = _.toUpperCase());
      var u = window.location.pathname.split("/"),
        m = u[u.length - 2],
        b = "";
      "pages" == m && (b = u[u.length - 1]);
      var C = "products" == m,
        w = "" == u[0] && "" == u[1],
        I = "collections" == m || (-1 !== u.indexOf("collections") && !C && !w),
        y =
          "search" == m ||
          "search-results" == b ||
          "search-results-page" == b ||
          (-1 !== u.indexOf("search") && !C && !I && !w),
        v = !(I || C || y || w),
        x = [],
        k = [],
        P = [],
        S = [],
        z = [],
        O = [],
        T = [],
        A = h.available;
      -1 !== [5673, 12882, 15561].indexOf(t.storeId) &&
        (A = A && h.inventory > 0);
      var j = h.compare_at_price_max,
        R = h.price,
        M = 0;
      j > 0
        ? ((M = parseFloat((((j - R) / j) * 100).toFixed(0))),
          isNaN(M) && (M = 0))
        : (M = -1);
      let F = R - j;
      return (
        e.each(s, function (s, i) {
          var g = null,
            u = [
              "grid-view-item",
              "supports-js",
              "grid-product__image-wrapper",
              "grid-product__wrapper",
              "grid__item small--one-half",
              "product-item__link-wrapper",
            ];
          (4062 != t.storeId && 5061 != t.storeId) ||
            (u = [
              "grid-view-item",
              "supports-js",
              "grid__item small--one-half",
              "product-item__link-wrapper",
            ]);
          var b =
            null !== i.related_product_tag &&
            "" !== i.related_product_tag &&
            null != i.related_product_tag
              ? i.related_product_tag.split(",")
              : [];
          b.length && (u = b);
          for (var j = 0; j < u.length; j++) {
            var R = u[j].trim();
            if (e(p).hasClass(R)) {
              !0;
              break;
            }
          }
          var B = d(0, t, i),
            L = a(0, 0, i),
            W = (function (e, t, s, i, a) {
              var r = s.enable_discount_range,
                o = !0,
                l = s.discount_from,
                n = s.discount_to;
              if (r)
                if (4 == s.product_type)
                  a.variants.length
                    ? (a.variants.forEach(function (e, t) {
                        var s = e.compare_at_price,
                          i = e.price,
                          r = 0;
                        s > 0
                          ? ((r = parseFloat((((s - i) / s) * 100).toFixed(0))),
                            isNaN(r) && (r = 0))
                          : (r = -1),
                          0 == r || r < 0
                            ? (a.variants = a.variants.filter(function (t) {
                                return t.id != e.id;
                              }))
                            : l && !n
                            ? r < l &&
                              (a.variants = a.variants.filter(function (t) {
                                return t.id != e.id;
                              }))
                            : !l && n
                            ? r > n &&
                              (a.variants = a.variants.filter(function (t) {
                                return t.id != e.id;
                              }))
                            : l && n
                            ? (r < l || r > n) &&
                              (a.variants = a.variants.filter(function (t) {
                                return t.id != e.id;
                              }))
                            : l || n || (o = !0);
                      }),
                      a.variants.length || (o = !1))
                    : (o = !1);
                else {
                  if (0 == i || i < 0) return !1;
                  l && !n
                    ? i < l && (o = !1)
                    : !l && n
                    ? i > n && (o = !1)
                    : l && n
                    ? (i < l || i > n) && (o = !1)
                    : l || n || (o = !0);
                }
              return o;
            })(0, 0, i, M, h);
          let q = 0;
          for (j = 0; j < h.inventory_quantity.length; j++)
            q += h.inventory_quantity[j];
          var D = (function (e, t, s, i, a, r) {
              var o = null,
                l = s.inventory;
              if ("free" === t.currentPlan) o = !0;
              else {
                var n = [
                  9273, 7240, 1381, 13744, 13931, 12376, 14560, 15312, 19267,
                  18243,
                ];
                4 == s.product_type
                  ? r.variants.length
                    ? (r.variants.forEach(function (e, i) {
                        var a = e.available,
                          o = e.quantity;
                        ((1 == l && !a) || (2 == l && a)) &&
                          (r.variants = r.variants.filter(function (t) {
                            return t.id != e.id;
                          })),
                          3 == l &&
                            (-1 !== n.indexOf(t.storeId)
                              ? s.instock > o &&
                                (r.variants = r.variants.filter(function (t) {
                                  return t.id != e.id;
                                }))
                              : a
                              ? null != e.inventory_management &&
                                "continue" != e.inventory_policy &&
                                s.instock > o &&
                                (r.variants = r.variants.filter(function (t) {
                                  return t.id != e.id;
                                }))
                              : (r.variants = r.variants.filter(function (t) {
                                  return t.id != e.id;
                                }))),
                          4 == l &&
                            (-1 !== n.indexOf(t.storeId)
                              ? s.instock < o &&
                                (r.variants = r.variants.filter(function (t) {
                                  return t.id != e.id;
                                }))
                              : a
                              ? null != e.inventory_management &&
                                "continue" != e.inventory_policy &&
                                s.instock < o &&
                                (r.variants = r.variants.filter(function (t) {
                                  return t.id != e.id;
                                }))
                              : (r.variants = r.variants.filter(function (t) {
                                  return t.id != e.id;
                                })));
                      }),
                      (o = !!r.variants.length))
                    : (o = !1)
                  : ((o =
                      0 == l ||
                      (1 == l && i) ||
                      (2 == l && !i) ||
                      (3 == l && s.instock <= a) ||
                      (4 == l && s.instock >= a)),
                    -1 !== n.indexOf(t.storeId) ||
                      ((3 != l && 4 != l) ||
                        (null != r.inventory_management &&
                          "continue" != r.inventory_policy) ||
                        (o = !0),
                      (3 != l && 4 != l) || i || (o = !1)));
              }
              return o;
            })(0, t, i, A, q, h),
            $ = t.isAllowCountry(i);
          let N = t.checkVisibilityPeriod(i, h);
          if ($ && D && L && W && B && N && i.pages) {
            var U = i.pages.split(","),
              J =
                (U.indexOf("1") >= 0 && C) ||
                (U.indexOf("2") >= 0 && I) ||
                (U.indexOf("7") >= 0 && w) ||
                (U.indexOf("3") >= 0 && v) ||
                (U.indexOf("4") >= 0 && y);
            U.indexOf("6") > -1 &&
              null != i.related_product_tag &&
              "" !== i.related_product_tag &&
              null != i.related_product_tag &&
              p &&
              null != p &&
              i.related_product_tag.indexOf(p.className) > -1 &&
              (J = !1),
              13399 == t.storeId &&
                "/pages/catalog-search-results" == window.location.pathname &&
                (J = !1),
              !C ||
                "1" != i.label_on_image ||
                ("ten_usd" != t.currentPlan && "twenty_usd" != t.currentPlan) ||
                (J = (function (e, t, s, i, a, r, o) {
                  if (e(s).hasClass("product-single__media"))
                    e(s).parent().hasClass("product-single__media-wrapper") &&
                      (void 0 !== o.get(a) &&
                      null != o.get(a) &&
                      o.get(a).includes("product-single__media")
                        ? (i = !1)
                        : o.set(a, ["product-single__media"]));
                  else if (e(s).hasClass("product-single__photos"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product-single__photos")
                      ? (i = !1)
                      : o.set(a, ["product-single__photos"]);
                  else if (e(s).hasClass("product__media-container"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product__media-container")
                      ? (i = !1)
                      : o.set(a, ["product__media-container"]);
                  else if (e(s).hasClass("gallery__image-wrapper"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("gallery__image-wrapper")
                      ? (i = !1)
                      : o.set(a, ["gallery__image-wrapper"]);
                  else if (
                    e(s).parent().hasClass("product-single__image-wrapper")
                  )
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product-single__image-wrapper")
                      ? (i = !1)
                      : o.set(a, ["product-single__image-wrapper"]);
                  else if (e(s).hasClass("product__photo--single"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product__photo--single")
                      ? (i = !1)
                      : o.set(a, ["product__photo--single"]);
                  else if (e(s).hasClass("product-single__photo"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product-single__photo")
                      ? (i = !1)
                      : o.set(a, ["product-single__photo"]);
                  else if (
                    e(s).hasClass("product__photo-wrapper") &&
                    e(s).hasClass("product__photo-wrapper-product-template")
                  )
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product__photo-wrapper")
                      ? (i = !1)
                      : o.set(a, ["product__photo-wrapper"]);
                  else if (
                    e(s).hasClass("product__submedia-wrapper") ||
                    e(s).hasClass("product__media-wrapper")
                  )
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product__submedia-wrapper")
                      ? (i = !1)
                      : o.set(a, ["product__submedia-wrapper"]);
                  else if (
                    e(s).hasClass("product__submedia-wrapper") ||
                    e(s).hasClass("product__media-wrapper")
                  )
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product__submedia-wrapper")
                      ? (i = !1)
                      : o.set(a, ["product__submedia-wrapper"]);
                  else if (e(s).hasClass("product__image-wrapper"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product__image-wrapper")
                      ? (i = !1)
                      : o.set(a, ["product__image-wrapper"]);
                  else if (e(s).hasClass("product-gallery--media-wrapper"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product-gallery--media-wrapper")
                      ? (i = !1)
                      : o.set(a, ["product-gallery--media-wrapper"]);
                  else if (e(s).hasClass("product-gallery--image-background"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product-gallery--image-background")
                      ? (i = !1)
                      : o.set(a, ["product-gallery--image-background"]);
                  else if (e(s).hasClass("gf_product-image-thumb"))
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("gf_product-image-thumb")
                      ? (i = !1)
                      : o.set(a, ["gf_product-image-thumb"]);
                  else if (
                    14136 == t.storeId &&
                    e(s).hasClass("product-media-container")
                  )
                    void 0 !== o.get(a) &&
                    null != o.get(a) &&
                    o.get(a).includes("product-media-container")
                      ? (i = !1)
                      : o.set(a, ["product-media-container"]);
                  else if (11305 == t.storeId && e(s).hasClass("image-wrap")) {
                    let t = e(s)
                        .closest(".product__main-photos")
                        .find(".product-main-slide"),
                      i = new Set();
                    t.length &&
                      e.each(t, function (t, s) {
                        i.add(e(s).attr("data-group"));
                      }),
                      setTimeout(() => {
                        for (const t of i) {
                          let i = e(s)
                            .closest(".product__main-photos")
                            .find(`.product-main-slide[data-group="${t}"]`)
                            .not(":first")
                            .find(".bss_pl_img");
                          i.length && i.remove();
                        }
                      }, 220);
                  } else if (
                    10017 == t.storeId &&
                    "products" == r &&
                    e(s).hasClass("module")
                  ) {
                    var l = e(".owl-item").slice(1).find(".item");
                    l.length &&
                      e(l).on("click", function () {
                        var t = e(this)
                          .closest(".gf_column")
                          .find(".bss_pl_img");
                        t.length && t.remove();
                      });
                  } else
                    10751 == t.storeId && e(s).hasClass("image__container")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("image__container")
                        ? (i = !1)
                        : o.set(a, ["image__container"])
                      : 5950 == t.storeId &&
                        e(s).parent().hasClass("product-gallery__link")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("image__container")
                        ? (i = !1)
                        : o.set(a, ["image__container"])
                      : e(s).hasClass("fancybox") && 12184 == t.storeId
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("fancybox")
                        ? (i = !1)
                        : o.set(a, ["fancybox"])
                      : e(s).hasClass("image-wrap")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("image-wrap")
                        ? (i = !1)
                        : o.set(a, ["image-wrap"])
                      : e(s).hasClass("rimage") && 11867 == t.storeId
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("rimage")
                        ? (i = !1)
                        : o.set(a, ["rimage"])
                      : 3345 == t.storeId &&
                        e(s).parent().hasClass("product-gallery__link")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("image__container")
                        ? (i = !1)
                        : o.set(a, ["image__container"])
                      : 17182 == t.storeId &&
                        e(s).hasClass("product-single__photo")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("product-single__photo")
                        ? (i = !1)
                        : o.set(a, ["product-single__photo"])
                      : 14921 == t.storeId &&
                        e(s).hasClass("zoom-image") &&
                        !e(s).parent().parent().hasClass("slick-cloned")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("zoom-image")
                        ? (i = !1)
                        : o.set(a, ["zoom-image"])
                      : 12519 == t.storeId && e(s).hasClass("fancybox")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("fancybox")
                        ? (i = !1)
                        : o.set(a, ["fancybox"])
                      : 16785 == t.storeId && e(s).hasClass("rondell-item-crop")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("rondell-item-crop")
                        ? (i = !1)
                        : o.set(a, ["rondell-item-crop"])
                      : 18083 == t.storeId && e(s).hasClass("AspectRatio")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("AspectRatio")
                        ? (i = !1)
                        : o.set(a, ["AspectRatio"])
                      : 16882 == t.storeId && e(s).hasClass("image-slide-link")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("image-slide-link")
                        ? (i = !1)
                        : o.set(a, ["image-slide-link"])
                      : 19111 == t.storeId && e(s).hasClass("image__container")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("image__container")
                        ? (i = !1)
                        : o.set(a, ["image__container"])
                      : 13399 == t.storeId && e(s).hasClass("zoom-container")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("zoom-container")
                        ? (i = !1)
                        : o.set(a, ["zoom-container"])
                      : 17634 == t.storeId && e(s).hasClass("primgWrp")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("primgWrp")
                        ? (i = !1)
                        : o.set(a, ["primgWrp"])
                      : 13273 == t.storeId && e(s).hasClass("product__photo")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("product__photo")
                        ? (i = !1)
                        : o.set(a, ["product__photo"])
                      : 18505 == t.storeId && e(s).hasClass("rondell-item-crop")
                      ? void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("rondell-item-crop")
                        ? (i = !1)
                        : o.set(a, ["rondell-item-crop"])
                      : Shopify &&
                        Shopify.theme &&
                        Shopify.theme.name &&
                        -1 !== Shopify.theme.name.indexOf("Dawn") &&
                        e(s).hasClass("product__media") &&
                        (void 0 !== o.get(a) &&
                        null != o.get(a) &&
                        o.get(a).includes("product__media")
                          ? (i = !1)
                          : o.set(a, ["product__media"]));
                  return i;
                })(e, t, p, J, s, m, c));
            var H = null == i.custom_page ? [] : i.custom_page.split(",");
            if ("true" === i.check_custom_page)
              if (
                13399 == t.storeId &&
                "/pages/catalog-search-results" == window.location.pathname
              )
                J = !1;
              else
                for (j = 0; j < H.length; j++) {
                  H[j].replace(/ /g, "") === window.location.href && (J = !1);
                }
            if (
              ((("ten_usd" == t.currentPlan && 1 == i.enable_price_range) ||
                ("twenty_usd" == t.currentPlan && 1 == i.enable_price_range)) &&
                (4 == i.product_type
                  ? h.variants.length
                    ? (h.variants.forEach(function (e, t) {
                        null == i.price_range_from &&
                        parseFloat(e.price / 100) > parseFloat(i.price_range_to)
                          ? (h.variants = h.variants.filter(function (t) {
                              return t.id != e.id;
                            }))
                          : null == i.price_range_to &&
                            parseFloat(e.price / 100) <
                              parseFloat(i.price_range_form)
                          ? (h.variants = h.variants.filter(function (t) {
                              return t.id != e.id;
                            }))
                          : (parseFloat(e.price / 100) <
                              parseFloat(i.price_range_from) ||
                              parseFloat(e.price / 100) >
                                parseFloat(i.price_range_to)) &&
                            (h.variants = h.variants.filter(function (t) {
                              return t.id != e.id;
                            }));
                      }),
                      h.variants.length || (J = !1))
                    : (J = !1)
                  : null == i.price_range_from &&
                    parseFloat(h.price / 100) > parseFloat(i.price_range_to)
                  ? (J = !1)
                  : null == i.price_range_to &&
                    parseFloat(h.price / 100) < parseFloat(i.price_range_form)
                  ? (J = !1)
                  : (parseFloat(h.price / 100) <
                      parseFloat(i.price_range_from) ||
                      parseFloat(h.price / 100) >
                        parseFloat(i.price_range_to)) &&
                    (J = !1)),
              ("ten_usd" == t.currentPlan || "twenty_usd" == t.currentPlan) &&
                1 == i.enable_product_publish)
            ) {
              var V = h.publish_at
                  .replace(/ /g, "T")
                  .slice(0, h.publish_at.length - 6),
                E = new Date(V).getTime();
              E < new Date(i.product_publish_from).getTime() &&
              (null == i.product_publish_to || "" == i.product_publish_to)
                ? (J = !1)
                : (E > new Date(i.product_publish_to).getTime() &&
                    null == i.product_publish_from) ||
                  "" == i.product_publish_from
                ? (J = !1)
                : (E < new Date(i.product_publish_from).getTime() ||
                    E > new Date(i.product_publish_to).getTime()) &&
                  (J = !1);
            }
            if (
              (("ten_usd" == t.currentPlan || "twenty_usd" == t.currentPlan) &&
                i.label_text_enable &&
                1 == i.enable_countdown_timer &&
                1 == i.option_end_countdown &&
                new Date().getTime() > new Date(i.countdown_time).getTime() &&
                (J = !1),
              J &&
                (i.img_url ||
                  (i.label_text_enable && i.label_text) ||
                  i.public_url_s3.length))
            ) {
              if (
                (t.storeId <= t.storeIdCustomOld ||
                  (t.storeId > t.storeIdCustomOld &&
                    ("ten_usd" == t.currentPlan ||
                      "twenty_usd" == t.currentPlan))) &&
                1 == i.product_type
              ) {
                if (!(i.collection && o.collects && o.collects.length)) return;
                var Q = i.collection.split(",");
                if (
                  !o.collects.filter(function (t) {
                    return -1 !== e.inArray(t.toString(), Q);
                  }).length
                )
                  return;
              } else if (
                (t.storeId <= t.storeIdCustomOld ||
                  (t.storeId > t.storeIdCustomOld &&
                    ("ten_usd" == t.currentPlan ||
                      "twenty_usd" == t.currentPlan))) &&
                2 == i.product_type
              ) {
                if (!i.tags) return;
                var G = i.tags.split(","),
                  K = h.tags;
                if (!G.length) return;
                if (!K.length) return;
                if (
                  !G.filter(function (e) {
                    return -1 !== K.indexOf(e);
                  }).length
                )
                  return;
              } else if ("twenty_usd" == t.currentPlan && 4 == i.product_type) {
                if (!i.variant) return;
                var Z = i.variant.split(","),
                  X = h.variants.map((e) => e.id);
                if (!Z.length) return;
                if (e("img[bss-product-label-variant]").length) {
                  let t = e(p).find("img");
                  if (
                    !e(t).attr("bss-product-label-variant") ||
                    !Z ||
                    null == Z ||
                    -1 ===
                      Z.indexOf(
                        e(t).attr("bss-product-label-variant").toString()
                      )
                  )
                    return;
                  (g = h.variants.find(
                    (s) => s.id == e(t).attr("bss-product-label-variant")
                  )).id && e(t).parent().attr("appendVariant", "true");
                } else {
                  if (!X.length) return;
                  var Y = Z.filter(function (e) {
                    return -1 !== X.indexOf(+e);
                  });
                  if (!Y.length) return;
                  if (-1 != [16685, 11305].indexOf(t.storeId)) {
                    h.variants
                      .filter((e) => -1 !== Y.indexOf(e.id + ""))
                      .map((e) => e.image);
                    let t = e(p).find("img:first").attr("srcset");
                    if (!t) return;
                    if (
                      (t && (t = t.replace(/\_\d+x\d+|\_\d+x/, "")),
                      !(g = h.variants.find((e) => t.includes(e.image))))
                    )
                      return;
                  } else {
                    let t = h.variants
                        .filter((e) => -1 !== Y.indexOf(e.id + ""))
                        .map((e) => e.image),
                      s = e(p).find("img:first").attr("src");
                    if (
                      (s && (s = s.replace(/\_\d+x\d+|\_\d+x/, "")),
                      -1 === t.indexOf(s))
                    )
                      return;
                    g = h.variants.find((e) => e.image == s);
                  }
                }
              } else if (3 == i.product_type);
              else if (
                ("ten_usd" != t.currentPlan && "twenty_usd" != t.currentPlan) ||
                5 != i.product_type
              ) {
                if (!i.product) return;
                var ee = i.product.split(",");
                if (-1 == e.inArray(h.id.toString(), ee)) return;
              } else if (i.excludeTags) {
                (G = i.excludeTags.split(",")), (K = h.tags);
                if (!G.length || !K.length) return;
                if (
                  G.filter(function (e) {
                    return -1 !== K.indexOf(e);
                  }).length
                )
                  return;
              }
              if ("twenty_usd" == t.currentPlan && 9 == i.position);
              else if (
                (i.priority || 0 == i.priority) &&
                !i.label_text_enable &&
                void 0 !== O[i.position] &&
                O[i.position] < i.priority
              )
                return;
              if (1 == i.label_type || null == i.label_type)
                if ("twenty_usd" == t.currentPlan && 9 == i.position)
                  var te = "",
                    se = "";
                else {
                  (te = "bss-pl-top-left"), (se = "");
                  var ie = "";
                  switch (i.position) {
                    case 1:
                      te = "bss-pl-top-center";
                      break;
                    case 2:
                      te = "bss-pl-top-right";
                      break;
                    case 3:
                      te = "bss-pl-middle-left";
                      break;
                    case 4:
                      te = "bss-pl-middle-center";
                      break;
                    case 5:
                      te = "bss-pl-middle-right";
                      break;
                    case 6:
                      te = "bss-pl-bottom-left";
                      break;
                    case 7:
                      te = "bss-pl-bottom-center";
                      break;
                    case 8:
                      te = "bss-pl-bottom-right";
                  }
                }
              else if ("twenty_usd" == t.currentPlan && 9 == i.position)
                (te = ""), (se = "");
              else {
                (te = "bss-pb-bottom-left"), (se = ""), (ie = "");
                switch (i.position) {
                  case 1:
                    te = "bss-pb-bottom-center";
                    break;
                  case 2:
                    te = "bss-pb-bottom-right";
                }
              }
              e(p).hasClass("hide") &&
                e(p).addClass("hide-clone").removeClass("hide");
              var ae = e(p).outerWidth();
              e(p).find("img").outerWidth();
              e(p).hasClass("hide-clone") &&
                e(p).addClass("hide").removeClass("hide-clone"),
                ("twenty_usd" == t.currentPlan && 9 == i.position) ||
                  (-1 !== e.inArray(i.position, [1, 2, 4, 5, 7, 8]) &&
                    ((se += "right: "),
                    e(p).hasClass("product-card--list") ||
                      (e(p).hasClass("cart__image-wrapper")
                        ? (se += parseFloat(ae) - parseFloat(e(p).width()))
                        : (e(p).hasClass("featured-product__photo"),
                          (se += 0))),
                    (se += "px;")),
                  -1 !== e.inArray(i.position, [2, 5, 8]) &&
                    (se += "left: auto !important;"));
              var re = o.baseImgUrl + i.img_url;
              if (
                (i.public_url_s3.length && (re = i.public_url_s3),
                i.public_img_url && (re = i.public_img_url),
                i.label_text_enable && i.label_text && "" != i.label_text)
              )
                if (((ie = se + t.resizeLabelText(i)), 9 == i.position))
                  t.handlePositionInPlatinum(i, p, m), (ie += r(e, t, i, p));
              (se += t.resizeImage(i, p)),
                9 == i.position &&
                  (t.handlePositionInPlatinum(i, p, m),
                  (se += `top : ${i.label_unlimited_top}% !important;\n                                                        left : ${i.label_unlimited_left}% !important; `));
              let s = "bss-pl-frontend";
              2 == i.label_type && (s = "bss-pb-frontend");
              var oe = "z-index:4;";
              Shopify &&
                Shopify.theme &&
                Shopify.theme.name &&
                "Dawn" == Shopify.theme.name &&
                (oe = "z-index: 2;");
              var le =
                '<img src="' +
                re +
                '" alt="' +
                i.name +
                '" class="' +
                s +
                " " +
                te +
                '" style="' +
                oe +
                se +
                "; position: absolute !important; background-color: transparent; display: block; min-height: auto !important; transform: rotate(" +
                i.angle +
                'deg) ; transform-origin: top left; "  />';
              if (
                (17952 != t.storeId ||
                  "/pages/search-results-page" != window.location.pathname ||
                  i.label_text_enable ||
                  (le =
                    '<img src="' +
                    re +
                    '" alt="' +
                    i.name +
                    '" class="' +
                    s +
                    " " +
                    te +
                    '" style="' +
                    se +
                    '; position: absolute !important; background-color: transparent; display: block; min-height: auto !important; margin: 0px !important;" />'),
                i.label_text_enable)
              ) {
                var ne = "";
                if (i.label_text && "" != i.label_text) {
                  var de = !0;
                  if (
                    (-1 !== i.label_text.indexOf("{sale}") &&
                      M <= 0 &&
                      (de = !1),
                    18121 == t.storeId && (q -= q % 10),
                    de)
                  )
                    if (2 == i.label_type) {
                      var pe =
                          1 === parseInt(i.transparent_background)
                            ? "transparent"
                            : i.label_text_background_color,
                        ce =
                          i.label_shadow +
                          "px " +
                          i.label_shadow +
                          "px " +
                          i.label_shadow +
                          "px " +
                          i.label_shadow_color,
                        he = i.label_border_radius + "px",
                        _e = unescape(i.label_text),
                        fe = i.emoji ? i.emoji.split(",") : [],
                        ge = i.emoji_position
                          ? i.emoji_position.split(",")
                          : [];
                      i.enable_countdown_timer &&
                        _e.indexOf("{start}") > -1 &&
                        (_e = _e.replace(
                          "{start}",
                          `<span class="bss-text-content-start-${i.label_text_id}">{start}</span>`
                        )),
                        i.enable_countdown_timer &&
                          _e.indexOf("{end}") > -1 &&
                          (_e = _e.replace(
                            "{end}",
                            `<span class="bss-text-content-end-${i.label_text_id}">{end}</span>`
                          ));
                      for (j = 0; j < fe.length; j++)
                        if (
                          6 == fe[j].length &&
                          _e.indexOf(String.fromCodePoint(fe[j])) > -1
                        ) {
                          let e =
                            '<span class="bss-pl-text-emoji" style="width: ' +
                            i.label_text_font_size +
                            "px; height: " +
                            i.label_text_font_size +
                            "px; display: inline-block; background-image: url(&quot;https://unpkg.com/emoji-datasource-facebook@5.0.1/img/facebook/sheets-256/64.png&quot;); background-size: 5700% 5700%; background-position: " +
                            ge[j] +
                            ';"></span>';
                          var ue = _e.slice(
                              0,
                              _e.indexOf(String.fromCodePoint(fe[j]))
                            ),
                            me = _e.slice(
                              _e.indexOf(String.fromCodePoint(fe[j])) + 2
                            );
                          _e = ue + e + me;
                        }
                      for (j = 127462; j < 127488; j++)
                        if (
                          _e.indexOf(String.fromCodePoint(j.toString())) > -1
                        ) {
                          (ue = _e.slice(
                            0,
                            _e.indexOf(String.fromCodePoint(j.toString()))
                          )),
                            (me = _e.slice(
                              _e.indexOf(String.fromCodePoint(j.toString())) + 2
                            ));
                          _e = ue + me;
                        }
                      (_e =
                        q > 0 &&
                        "shopify" == h.inventory_management &&
                        "deny" == h.inventory_policy
                          ? _e.replace("{inventory_quantity}", q)
                          : _e.replace(
                              "{inventory_quantity}",
                              i.label_text_out_stock
                            )),
                        F < 0
                          ? _e.indexOf("{sale_amount}") > -1 &&
                            (_e =
                              "{" != f[0]
                                ? _e.replace(
                                    "{sale_amount}",
                                    _ + -parseFloat(F / 100).toFixed(2)
                                  )
                                : _e.replace(
                                    "{sale_amount}",
                                    -parseFloat(F / 100).toFixed(2) + _
                                  ))
                          : (_e = _e.replace("{sale_amount}", ""));
                      var be = parseInt(M) + "%";
                      M <= 0 && (be = ""),
                        (_e = (_e = _e.replace("{sale}", be)).replace(
                          "{inventory}",
                          A ? i.label_text_in_stock : i.label_text_out_stock
                        ));
                      let e = i.margin_top ? i.margin_top : 0,
                        a = " position: absolute !important; ";
                      (16443 == t.storeId || (13273 == t.storeId && C)) &&
                        (a = " position: absolute; ");
                      let r = "z-index: 4;";
                      Shopify &&
                        Shopify.theme &&
                        Shopify.theme.name &&
                        "Dawn" == Shopify.theme.name &&
                        (r = "z-index: 2;"),
                        (ne =
                          '<div alt="' +
                          i.name +
                          '" data-bss-pl-text-id="bss-pl-text-' +
                          i.label_text_id +
                          '" class="bss-countdown-display ' +
                          s +
                          " bss_pl_label_text " +
                          te +
                          '" style="' +
                          ie +
                          `; display: ${
                            1 == i.enable_countdown_timer ? "none" : "flex"
                          }; justify-content: center; align-items: center; text-align: center;` +
                          " font-style: " +
                          (0 == i.label_text_style ? "normal" : "italic") +
                          "; color: " +
                          i.label_text_color +
                          "; margin-top: " +
                          e +
                          "px; border-radius: " +
                          he +
                          "; box-shadow: " +
                          ce +
                          "; opacity: " +
                          i.label_opacity / 100 +
                          "; font-size: " +
                          i.label_text_font_size +
                          "px;" +
                          a +
                          r +
                          " background-color: " +
                          pe +
                          ';" ><span>' +
                          _e +
                          "</span></div>"),
                        !i.mobile_config_label_enable ||
                          ("ten_usd" != t.currentPlan &&
                            "twenty_usd" != t.currentPlan) ||
                          (ne +=
                            '<style type="text/css">div.bss_pb_img { height: ' +
                            i.height +
                            "px !important;margin-top: " +
                            e +
                            'px;}div.bss-pb-frontend.bss_pl_label_text[data-bss-pl-text-id="bss-pl-text-' +
                            i.label_text_id +
                            '"] { margin-top: 0px !important;}@media only screen and (max-width: 768px) {div.bss-pb-frontend.bss_pl_label_text[data-bss-pl-text-id="bss-pl-text-' +
                            i.label_text_id +
                            '"] { height: ' +
                            i.mobile_height_label +
                            "px !important;width: " +
                            i.mobile_width_label +
                            "px !important;font-size: " +
                            i.mobile_font_size_label +
                            'px !important;}div.bss-pb-frontend.bss_pl_label_text[data-bss-pl-text-id="bss-pl-text-' +
                            i.label_text_id +
                            '"] .bss-pl-text-emoji { height: ' +
                            i.mobile_font_size_label +
                            "px !important;width: " +
                            i.mobile_font_size_label +
                            "px !important;}div.bss_pb_img { height: " +
                            i.mobile_height_label +
                            "px !important;margin-top: " +
                            e +
                            "px;}}</style>");
                    } else {
                      T.push(i);
                      (pe =
                        1 === parseInt(i.transparent_background)
                          ? "transparent"
                          : i.label_text_background_color),
                        (ce =
                          i.label_shadow +
                          "px " +
                          i.label_shadow +
                          "px " +
                          i.label_shadow +
                          "px " +
                          i.label_shadow_color),
                        (he = i.label_border_radius + "px"),
                        (_e = unescape(i.label_text));
                      var Ce = l(e, t, i, p, m, 1),
                        we = n(e, t, i, p, m, 1);
                      (fe = i.emoji ? i.emoji.split(",") : []),
                        (ge = i.emoji_position
                          ? i.emoji_position.split(",")
                          : []);
                      i.enable_countdown_timer &&
                        _e.indexOf("{start}") > -1 &&
                        (_e = _e.replace(
                          "{start}",
                          `<span class="bss-text-content-start-${i.label_text_id}">{start}</span>`
                        )),
                        i.enable_countdown_timer &&
                          _e.indexOf("{end}") > -1 &&
                          (_e = _e.replace(
                            "{end}",
                            `<span class="bss-text-content-end-${i.label_text_id}">{end}</span>`
                          ));
                      for (j = 0; j < fe.length; j++)
                        if (
                          6 == fe[j].length &&
                          _e.indexOf(String.fromCodePoint(fe[j])) > -1
                        ) {
                          let e =
                            '<span class="bss-pl-text-emoji" style="width: ' +
                            i.label_text_font_size +
                            "px; height: " +
                            i.label_text_font_size +
                            "px; display: inline-block; background-image: url(&quot;https://unpkg.com/emoji-datasource-facebook@5.0.1/img/facebook/sheets-256/64.png&quot;); background-size: 5700% 5700%; background-position: " +
                            ge[j] +
                            ';"></span>';
                          (ue = _e.slice(
                            0,
                            _e.indexOf(String.fromCodePoint(fe[j]))
                          )),
                            (me = _e.slice(
                              _e.indexOf(String.fromCodePoint(fe[j])) + 2
                            ));
                          _e = ue + e + me;
                        }
                      for (j = 127462; j < 127488; j++)
                        if (
                          _e.indexOf(String.fromCodePoint(j.toString())) > -1
                        ) {
                          (ue = _e.slice(
                            0,
                            _e.indexOf(String.fromCodePoint(j.toString()))
                          )),
                            (me = _e.slice(
                              _e.indexOf(String.fromCodePoint(j.toString())) + 2
                            ));
                          _e = ue + me;
                        }
                      if (
                        ((_e =
                          4 == i.product_type
                            ? g.quantity > 0 &&
                              "shopify" == g.inventory_management &&
                              "deny" == g.inventory_policy
                              ? _e.replace("{inventory_quantity}", g.quantity)
                              : _e.replace(
                                  "{inventory_quantity}",
                                  i.label_text_out_stock
                                )
                            : q > 0 &&
                              "shopify" == h.inventory_management &&
                              "deny" == h.inventory_policy
                            ? _e.replace("{inventory_quantity}", q)
                            : _e.replace(
                                "{inventory_quantity}",
                                i.label_text_out_stock
                              )),
                        4 == i.product_type)
                      ) {
                        var Ie = g.price - g.compare_at_price;
                        Ie < 0
                          ? _e.indexOf("{sale_amount}") > -1 &&
                            (_e =
                              "{" != f[0]
                                ? _e.replace(
                                    "{sale_amount}",
                                    _ + -parseFloat(Ie / 100).toFixed(2)
                                  )
                                : _e.replace(
                                    "{sale_amount}",
                                    -parseFloat(Ie / 100).toFixed(2) + _
                                  ))
                          : (_e = _e.replace("{sale_amount}", ""));
                      } else
                        F < 0
                          ? _e.indexOf("{sale_amount}") > -1 &&
                            (_e =
                              "{" != f[0]
                                ? _e.replace(
                                    "{sale_amount}",
                                    _ + -parseFloat(F / 100).toFixed(2)
                                  )
                                : _e.replace(
                                    "{sale_amount}",
                                    -parseFloat(F / 100).toFixed(2) + _
                                  ))
                          : (_e = _e.replace("{sale_amount}", ""));
                      if (4 == i.product_type) {
                        var ye = 0;
                        g.compare_at_price > 0
                          ? ((ye = parseFloat(
                              (
                                ((g.compare_at_price - g.price) /
                                  g.compare_at_price) *
                                100
                              ).toFixed(0)
                            )),
                            isNaN(ye) && (ye = 0))
                          : (ye = -1);
                        let e = parseInt(ye) + "%";
                        ye <= 0 && (e = ""), (_e = _e.replace("{sale}", e));
                      } else {
                        let e = parseInt(M) + "%";
                        M <= 0 && (e = ""), (_e = _e.replace("{sale}", e));
                      }
                      _e =
                        4 == i.product_type
                          ? _e.replace(
                              "{inventory}",
                              g.available
                                ? i.label_text_in_stock
                                : i.label_text_out_stock
                            )
                          : _e.replace(
                              "{inventory}",
                              A ? i.label_text_in_stock : i.label_text_out_stock
                            );
                      fe = i.emoji ? i.emoji.split(",") : [];
                      let a = " position: absolute !important; ";
                      13273 == t.storeId &&
                        C &&
                        (a = " position: relative !important; ");
                      let r = "z-index: 4;";
                      Shopify &&
                        Shopify.theme &&
                        Shopify.theme.name &&
                        "Dawn" == Shopify.theme.name &&
                        (r = "z-index: 2;");
                      ge = i.emoji_position ? i.emoji_position.split(",") : [];
                      if (
                        ((ne =
                          '<div alt="' +
                          i.name +
                          '" data-bss-pl-text-id="bss-pl-text-' +
                          i.label_text_id +
                          '" class="bss-countdown-display ' +
                          s +
                          ' bss_pl_label_text " style="' +
                          ie +
                          `; display: ${
                            1 == i.enable_countdown_timer ? "none" : "flex"
                          }; justify-content: center; align-items: center; text-align: center;` +
                          " font-style: " +
                          (0 == i.label_text_style ? "normal" : "italic") +
                          "; color: " +
                          i.label_text_color +
                          "; border-radius: " +
                          he +
                          "; margin-top: " +
                          Ce +
                          "px; margin-left: " +
                          we +
                          "px; box-shadow: " +
                          ce +
                          "; opacity: " +
                          i.label_opacity / 100 +
                          "; font-size: " +
                          i.label_text_font_size +
                          "px;" +
                          a +
                          r +
                          " background-color: " +
                          pe +
                          ';" ><span>' +
                          _e +
                          "</span></div>"),
                        (i.mobile_config_label_enable &&
                          "ten_usd" == t.currentPlan) ||
                          (i.mobile_config_label_enable &&
                            "twenty_usd" == t.currentPlan))
                      ) {
                        let s = e(p).attr("class")
                          ? "." + e(p).attr("class").split(" ").join(".")
                          : `[data-handle="${e(p).attr("data-handle")}"]`;
                        11656 == t.storeId && (s = ""),
                          (Ce = l(e, t, i, p, m, 0)),
                          (we = n(e, t, i, p, m, 0)),
                          (ne +=
                            '<style type="text/css">@media only screen and (max-width: 768px) {' +
                            `${s} ` +
                            'div.bss-pl-frontend.bss_pl_label_text[data-bss-pl-text-id="bss-pl-text-' +
                            i.label_text_id +
                            '"] { height: ' +
                            i.mobile_height_label +
                            "px !important;width: " +
                            i.mobile_width_label +
                            "px !important; margin-top: " +
                            Ce +
                            "px !important; margin-left: " +
                            we +
                            "px !important;font-size: " +
                            i.mobile_font_size_label +
                            'px !important;}div.bss-pl-frontend.bss_pl_label_text[data-bss-pl-text-id="bss-pl-text-' +
                            i.label_text_id +
                            '"] .bss-pl-text-emoji { height: ' +
                            i.mobile_font_size_label +
                            "px !important;width: " +
                            i.mobile_font_size_label +
                            "px !important;}}</style>");
                      }
                    }
                }
                le = ne;
              }
              t.storeId <= t.storeIdOldWIthPriority
                ? 2 == i.label_type
                  ? 0 == z.length
                    ? ("twenty_usd" == t.currentPlan && 9 == i.position
                        ? x.push(le)
                        : i.label_text_enable
                        ? S.push(le)
                        : (x[i.position] = le),
                      z.push(i))
                    : z.map((e) => {
                        e.position !== i.position &&
                          (z.push(i),
                          "twenty_usd" == t.currentPlan && 9 == i.position
                            ? x.push(le)
                            : i.label_text_enable
                            ? S.push(le)
                            : (x[i.position] = le));
                      })
                  : "twenty_usd" == t.currentPlan
                  ? 0 == z.length
                    ? ("twenty_usd" == t.currentPlan && 9 == i.position
                        ? x.push(le)
                        : i.label_text_enable
                        ? S.push(le)
                        : (x[i.position] = le),
                      z.push(i))
                    : z.map((e) => {
                        (e.label_unlimited_left === i.label_unlimited_left &&
                          e.label_unlimited_top === i.label_unlimited_top) ||
                          ("twenty_usd" == t.currentPlan && 9 == i.position
                            ? x.push(le)
                            : i.label_text_enable
                            ? S.push(le)
                            : (x[i.position] = le),
                          z.push(i));
                      })
                  : 0 == z.length
                  ? (i.label_text_enable ? S.push(le) : (x[i.position] = le),
                    z.push(i))
                  : z.map((e) => {
                      i.label_text_enable
                        ? S.push(le)
                        : e.position !== i.position && (x[i.position] = le),
                        z.push(i);
                    })
                : "twenty_usd" == t.currentPlan && 9 == i.position
                ? x.push(le)
                : 2 == i.label_type
                ? !0 !== P[i.position] && ((P[i.position] = !0), x.push(le))
                : i.label_text_enable
                ? x.push(le)
                : !0 !== k[i.position] && ((k[i.position] = !0), x.push(le));
            }
          }
        }),
        t.onClickThumbnailResizeMarginLabelText(T),
        t.storeId <= t.storeIdOldWIthPriority && (x = x.concat(S)),
        x
      );
    }
    function c(e) {
      (e.initForBadgeCustomSelector = function (e, t, s, i, a, r, o, l, n, d) {
        e.each(i, function (i, n) {
          let c = s.filter((e) => e.custom_selector.length),
            h = 100;
          c.length &&
            e.each(c, function (i, c) {
              let _ = t.getMaxValueMarginTop(s),
                f = t.getMaxValueMarginBottom(s),
                g = "",
                u = "",
                m = p(e, t, [c], a, r, n);
              if (m.length && !o) {
                (u +=
                  '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                  f +
                  'px;">'),
                  (u += m.join("")),
                  (u += "</div>"),
                  (g = m.join(""));
                let s = JSON.parse(c.custom_selector),
                  i = s.productPageSelector,
                  a = s.collectionPageSelector,
                  r = s.otherPageSelector;
                if (e(d).is(n) && "products" == l) {
                  let s = e(i);
                  if (s.next(".bss_pb_img").length) {
                    let t = c.priority,
                      i = s
                        .next(".bss_pb_img")
                        .find(".bss-pb-frontend")
                        .attr("class"),
                      a = e(g).attr("class");
                    i.trim() !== a.trim()
                      ? (s.next(".bss_pb_img").prepend(g),
                        s.next(".bss_pb_img").find("img").hide(),
                        s.next(".bss_pb_img").find("img").fadeIn(50))
                      : parseInt(t) < parseInt(h) &&
                        (s
                          .next(".bss_pb_img")
                          .find(".bss-pb-frontend")
                          .remove(),
                        s.next(".bss_pb_img").prepend(g),
                        s.next(".bss_pb_img").find("img").hide(),
                        s.next(".bss_pb_img").find("img").fadeIn(50));
                  } else
                    7915 == t.storeId || 8091 == t.storeId
                      ? e(s).next().hasClass("bss_pb_img") || s.before(u)
                      : s.after(u),
                      (h = c.priority),
                      s.next(".bss_pb_img").find("img").hide(),
                      setTimeout(function () {
                        let t = 0;
                        if (e(s).next().hasClass("bss_pb_img")) {
                          (t = e(s)
                            .next()
                            .find("img.bss-pb-frontend")
                            .height()),
                            (t = parseInt(t) + parseInt(_));
                          let i = e(s).next();
                          e(i).height(t + "px"),
                            s.next(".bss_pb_img").find("img").fadeIn(50);
                        }
                      }, 300);
                }
                if ("collections" == l)
                  if (e(n).closest(a).length)
                    if (e(n).closest(a).next(".bss_pb_img").length) {
                      let t = c.priority,
                        s = e(n)
                          .closest(a)
                          .next(".bss_pb_img")
                          .find(".bss-pb-frontend")
                          .attr("class"),
                        i = e(g).attr("class");
                      s.trim() !== i.trim()
                        ? e(n).closest(a).next(".bss_pb_img").prepend(g)
                        : parseInt(t) < parseInt(h) &&
                          (e(n)
                            .closest(a)
                            .next(".bss_pb_img")
                            .find(".bss-pb-frontend")
                            .remove(),
                          e(n).closest(a).next(".bss_pb_img").prepend(g));
                    } else {
                      e(n).closest(a).after(u), (h = c.priority);
                      let t = e(n).closest(a).next(".bss_pb_img");
                      setTimeout(function () {
                        let s = 0;
                        e(t).length &&
                          ((s = e(t).find("img.bss-pb-frontend").height()),
                          (s = parseInt(s) + parseInt(_)),
                          e(t).height(s + "px"));
                      }, 300);
                    }
                  else if (e(n).find(a).length)
                    if (e(n).find(a).next(".bss_pb_img").length) {
                      let t = c.priority,
                        s = e(n)
                          .find(a)
                          .next(".bss_pb_img")
                          .find(".bss-pb-frontend")
                          .attr("class"),
                        i = e(g).attr("class");
                      s.trim() !== i.trim()
                        ? e(n).find(a).next(".bss_pb_img").prepend(g)
                        : parseInt(t) < parseInt(h) &&
                          (e(n)
                            .find(a)
                            .next(".bss_pb_img")
                            .find(".bss-pb-frontend")
                            .remove(),
                          e(n).find(a).next(".bss_pb_img").prepend(g));
                    } else {
                      e(n).find(a).after(u), (h = c.priority);
                      let t = e(n).find(a).next(".bss_pb_img");
                      setTimeout(function () {
                        let s = 0;
                        e(t).length &&
                          ((s = e(t).find("img.bss-pb-frontend").height()),
                          (s = parseInt(s) + parseInt(_)),
                          e(t).height(s + "px"));
                      }, 300);
                    }
                if ("collections" !== l && "products" !== l)
                  if (e(n).closest(r).length)
                    if (e(n).closest(r).next(".bss_pb_img").length) {
                      let t = c.priority,
                        s = e(n)
                          .closest(r)
                          .next(".bss_pb_img")
                          .find(".bss-pb-frontend")
                          .attr("class"),
                        i = e(g).attr("class");
                      s.trim() !== i.trim()
                        ? e(n).closest(r).next(".bss_pb_img").prepend(g)
                        : parseInt(t) < parseInt(h) &&
                          (e(n)
                            .closest(r)
                            .next(".bss_pb_img")
                            .find(".bss-pb-frontend")
                            .remove(),
                          e(n).closest(r).next(".bss_pb_img").prepend(g));
                    } else {
                      e(n).closest(r).after(u), (h = c.priority);
                      let t = e(n).closest(r).next(".bss_pb_img");
                      setTimeout(function () {
                        let s = 0;
                        e(t).length &&
                          ((s = e(t).find("img.bss-pb-frontend").height()),
                          (s = parseInt(s) + parseInt(_)),
                          e(t).height(s + "px"));
                      }, 300);
                    }
                  else if (e(n).find(r).length)
                    if (e(n).find(r).next(".bss_pb_img").length) {
                      let t = c.priority,
                        s = e(n)
                          .find(r)
                          .next(".bss_pb_img")
                          .find(".bss-pb-frontend")
                          .attr("class"),
                        i = e(g).attr("class");
                      s.trim() !== i.trim()
                        ? e(n).find(r).next(".bss_pb_img").prepend(g)
                        : parseInt(t) < parseInt(h) &&
                          (e(n)
                            .find(r)
                            .next(".bss_pb_img")
                            .find(".bss-pb-frontend")
                            .remove(),
                          e(n).find(r).next(".bss_pb_img").prepend(g));
                    } else {
                      e(n).find(r).after(u), (h = c.priority);
                      let t = e(n).find(r).next(".bss_pb_img");
                      setTimeout(function () {
                        let s = 0;
                        e(t).length &&
                          ((s = e(t).find("img.bss-pb-frontend").height()),
                          (s = parseInt(s) + parseInt(_)),
                          e(t).height(s + "px"));
                      }, 300);
                    }
              }
            });
        });
      }),
        (e.initForBadgeProductName = function (e, t, s, i, a, r, o, l, n) {
          let d = !1;
          if (
            (e.each(i, function (i, n) {
              let c = t.getMaxValueMarginTop(s),
                h = t.getMaxValueMarginBottom(s),
                _ = "",
                f = "",
                g = "",
                u = p(e, t, s, a, r, n);
              if (u.length && !o) {
                if (
                  ((_ +=
                    '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                    h +
                    'px;">'),
                  (_ += u.join("")),
                  (_ += "</div>"),
                  (f = (function (e, t, s, i) {
                    let a = "";
                    if (
                      e(s).hasClass("product-card__price-wrapper") ||
                      e(s).find(".product-card__price-wrapper").length
                    )
                      a = e(s).find(".product-card__price-wrapper").length
                        ? e(s).find(".product-card__price-wrapper")
                        : e(s);
                    else if (
                      e(s).hasClass("product__gallery") ||
                      e(s)
                        .closest("section.product")
                        .find(".product__content .price").length
                    )
                      a = e(s)
                        .closest("section.product")
                        .find(".product__content .price");
                    else if (
                      e(s).hasClass("product__title") &&
                      e(s).parent().find(".product__prices").length
                    )
                      a = e(s).parent().find(".product__prices");
                    else if (e(s).find(".list-view-item__title").length)
                      a = e(s).find(".list-view-item__title");
                    else if (
                      e(s).hasClass("product-item__link-wrapper") &&
                      e(s).find(
                        ".product-item__meta .product-item__price-wrapper"
                      ).length
                    )
                      a = e(s).find(
                        ".product-item__meta .product-item__price-wrapper"
                      );
                    else if (
                      e(s).hasClass("featured-product__photo") &&
                      e(s)
                        .closest(".product.featured-product")
                        .find(
                          ".featured-product__details .product__form--add-to-cart"
                        ).length
                    )
                      a = e(s)
                        .closest(".product.featured-product")
                        .find(
                          ".featured-product__details .product__form--add-to-cart"
                        );
                    else if (
                      e(s).hasClass("grid__item") &&
                      e(s).find(".product-card .product-card__availability")
                        .length
                    )
                      a = e(s).find(
                        ".product-card .product-card__availability"
                      );
                    else if ("offers" == e(s).attr("itemprop")) a = e(s);
                    else if (
                      e(s).hasClass("product__img-wrapper") &&
                      e(s).closest(".grid__item").find("a .grid-link__meta")
                    )
                      a = e(s)
                        .closest(".grid__item")
                        .find("a .grid-link__meta");
                    else if (
                      e(s).hasClass("product-single__media") &&
                      e(s)
                        .closest(".page-width")
                        .find(".featured-product__price").length
                    )
                      a = e(s)
                        .closest(".page-width")
                        .find(".featured-product__price");
                    else if (
                      e(s).hasClass("product-media--featured-product") &&
                      e(s)
                        .closest(".featured-product__wrapper")
                        .find(
                          ".featured-product__content-column .product__price"
                        ).length
                    )
                      a = e(s)
                        .closest(".featured-product__wrapper")
                        .find(
                          ".featured-product__content-column .product__price"
                        );
                    else if (e(s).find('dl[class*="price"]').first().length)
                      a =
                        5221 == t.storeId &&
                        "/search" == window.location.pathname
                          ? ""
                          : e(s).find('dl[class*="price"]').first();
                    else if (
                      5295 == t.storeId &&
                      e(s).find('form[action="/cart/add"]').length &&
                      e(s).find('div[class*="price"]').length
                    )
                      a = e(s).find('form[action="/cart/add"]');
                    else if (10299 == t.storeId) {
                      if ("products" == i && e(s).hasClass("photo-zoom-link")) {
                        let t = e(s).closest(".grid");
                        t.length && (a = t.find(".product-single__title"));
                      }
                      "collections" == i &&
                        (a = e(s).find(".grid-product__title"));
                    } else if (e(s).find('div[class*="price"]').first().length)
                      a = e(s).find('div[class*="price"]').first();
                    else if (
                      e(s)
                        .closest("article.collection-product")
                        .find(".pricing").length
                    )
                      a = e(s)
                        .closest("article.collection-product")
                        .find(".pricing")
                        .first();
                    else if (
                      e(s).hasClass("product-thumb") &&
                      e(s)
                        .closest(".collection-products-wrapper")
                        .find(".product-thumb-caption-price").length
                    )
                      a = e(s)
                        .closest(".collection-products-wrapper")
                        .find(".product-thumb-caption-price");
                    else if (
                      e(s).hasClass("product") &&
                      e(s).find(
                        ".product__details .product__details__hover .product__price"
                      ).length
                    )
                      a = e(s).find(
                        ".product__details .product__details__hover .product__price"
                      );
                    else if (
                      e(s).hasClass("grid-product__wrapper") &&
                      e(s).find(
                        ".grid-product__price-wrap .grid-product__price"
                      ).length
                    )
                      a = e(s).find(
                        ".grid-product__price-wrap .grid-product__price"
                      );
                    else if (
                      e(s).hasClass("tt-title") &&
                      e(s).closest(".respimgsize").find(".tt-price").length
                    )
                      a = e(s).closest(".respimgsize").find(".tt-price");
                    else if (
                      e(s).hasClass("grid-product__content") &&
                      e(s).find(".grid-product__price").length
                    )
                      a = e(s).find(".grid-product__price");
                    else if (9421 == t.storeId)
                      "products" == i
                        ? e(s).hasClass("product-gallery--image-background") &&
                          (a = e(s)
                            .closest(".product--outer")
                            .find(".product-ratings"))
                        : e(s).hasClass("productitem--title") &&
                          e(s)
                            .closest(".productitem--info")
                            .find(".productitem--ratings").length &&
                          (a = e(s)
                            .closest(".productitem--info")
                            .find(".productitem--ratings"));
                    else if (e(s).hasClass("spf-product-card__inner")) {
                      let t = e(s).closest(".spf-product-card");
                      t.length &&
                        (a = t.find(".spf-product-card__title").children("a"));
                    } else if (
                      9987 == t.storeId &&
                      "products" == i &&
                      e(s).hasClass("gf_module-center")
                    ) {
                      let t = e(s).closest('.gf_row[data-label="Row"]');
                      t.length &&
                        (a = t.find('.module-wrap[data-label="(P) Price"]'));
                    } else if (9006 == t.storeId)
                      "/search" == window.location.pathname &&
                        e(s).hasClass("df-card") &&
                        (a = e(s).find(".df-card__title"));
                    else if (
                      11519 == t.storeId &&
                      e(s).hasClass("main-link") &&
                      e(s).closest(".product-single").find(".product-sku")
                        .length
                    )
                      a = e(s).closest(".product-single").find(".product-sku");
                    else if (13974 == t.storeId) {
                      if (
                        "/search" == window.location.pathname &&
                        e(s).hasClass("prod-image")
                      ) {
                        let t = e(s).closest(".product-index-inner");
                        if (
                          t.length &&
                          t.parent().find(".product-info-inner").length
                        ) {
                          a = t
                            .parent()
                            .find(".product-info-inner")
                            .find(".gsvalidated");
                        }
                      }
                    } else if (
                      14136 == t.storeId &&
                      e(s)
                        .closest(".boost-pfs-filter-product-item-inner")
                        .find(".boost-pfs-filter-product-item-title").length
                    )
                      a = e(s)
                        .closest(".boost-pfs-filter-product-item-inner")
                        .find(".boost-pfs-filter-product-item-price");
                    else if (10747 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("ga-product") &&
                        (a = e(s).find(".ga-product_price")),
                        "" == i &&
                          e(s).hasClass("product-single__title") &&
                          (a = e(s)
                            .closest(".item-content")
                            .find(".gf_product-prices")),
                        "/search" == window.location.pathname &&
                          e(s).hasClass("ga-product") &&
                          (a = e(s)
                            .closest(".content-for-layout")
                            .find(".card-information__text"));
                    else if (6673 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("product-image") &&
                        (a = e(s).closest(".inner-top").find(".price-box")),
                        "/search" == window.location.pathname &&
                          e(s).hasClass("product-image") &&
                          (a = e(s)
                            .closest(".inner-top")
                            .find(".product-title")),
                        "collections" == i &&
                          e(s).hasClass("product-image") &&
                          (a = e(s).closest(".inner-top").find(".price-box"));
                    else if (15564 == t.storeId)
                      "" == window.location.pathname &&
                        e(s).hasClass("product-image") &&
                        (a = e(s).parent().find(".product-title")),
                        "products" == i &&
                          (a = e(s)
                            .closest(".pr_sticky_content")
                            .find(".price-review"));
                    else if (16645 == t.storeId)
                      "collections" == i &&
                        e(s).hasClass("product-content") &&
                        (a = e(s)
                          .closest(".product-inner")
                          .find(".rating-wrap"));
                    else if (12519 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("fancybox") &&
                        (a = e(s).closest(".product_section").find(".yotpo"));
                    else if (10061 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("image-wrap") &&
                        (a = e(s)
                          .closest(".grid")
                          .find(".product-block--price"));
                    else if (16502 == t.storeId)
                      ("/" != window.location.pathname && "collections" != i) ||
                        !e(s).hasClass("product-block__title") ||
                        (a = e(s)
                          .closest(".product-block")
                          .find(".product-price")),
                        "/search" == window.location.pathname &&
                          e(s).hasClass("product-block__title") &&
                          (a = e(s));
                    else if (16537 == t.storeId)
                      ("products" != i &&
                        "collections" != i &&
                        "/" != window.location.pathname) ||
                        (e(s).hasClass("on-sale") &&
                          (a = e(s)
                            .find(".grid-link")
                            .find(".grid-link__meta"))),
                        "/search" == window.location.pathname &&
                          e(s).hasClass("h3") &&
                          (a = e(s)
                            .closest(".four-fifths")
                            .find(".visually-hidden:first"));
                    else if (5950 == t.storeId)
                      ("collections" != i && "" != i) ||
                        !e(s).hasClass("image__container") ||
                        (a = e(s)
                          .closest(".product-wrap")
                          .find(".product-thumbnail__price")),
                        "" == i &&
                          e(s).hasClass("image__container") &&
                          (e(s).closest(".product-wrap").find(".loox-rating")
                            .length
                            ? (a = e(s)
                                .closest(".product-wrap")
                                .find(".loox-rating"))
                            : e(s)
                                .closest(".product-wrap")
                                .find(".product-thumbnail__price").length &&
                              (a = e(s)
                                .closest(".product-wrap")
                                .find(".product-thumbnail__price"))),
                        "/search" == window.location.pathname &&
                          e(s).hasClass("image__container") &&
                          (a = e(s)
                            .closest(".product-wrap")
                            .find(".product-thumbnail__title"));
                    else if (15259 == t.storeId)
                      "products" == i
                        ? (a = e(s)
                            .closest(".product-area")
                            .find(".product-detail__form"))
                        : "/search" == window.location.pathname &&
                          (a = e(s)
                            .closest(".product-block__inner")
                            .find(".title"));
                    else if (3336 == t.storeId)
                      ("collections" != i &&
                        "/search" != window.location.pathname) ||
                        (a = e(s)
                          .closest(".boost-pfs-filter-product-item-inner")
                          .find(".boost-pfs-filter-product-item-vendor"));
                    else if (
                      10234 == t.storeId &&
                      "products" == i &&
                      e(s).hasClass("recomatic-responsive-image")
                    ) {
                      let t = e(s)
                        .closest(".recomatic-product")
                        .find(".recomatic-title-wrap");
                      t.length &&
                        !t.parent().find(".bss_pb_img").length &&
                        (a = t);
                    }
                    if (
                      Shopify &&
                      Shopify.theme &&
                      Shopify.theme.name &&
                      -1 !== Shopify.theme.name.indexOf("Dawn") &&
                      e(s).hasClass("card-information__text")
                    ) {
                      let t = e(s)
                        .closest(".card-information__wrapper")
                        .not(".collage-content__info")
                        .find(".price");
                      t.length &&
                        !t.parent().find(".bss_pb_img").length &&
                        (a = t);
                    }
                    return a;
                  })(e, t, n, l)),
                  (g = (function (e, t, s, i) {
                    let a = "";
                    if (
                      5295 == t.storeId &&
                      e(s).is(".swiper-slide.zoom-img-wrap.swiper-slide-active")
                    )
                      e(s)
                        .closest(
                          ".product-template__container.page-width.template-product"
                        )
                        .find(
                          ".product-item-caption-header .product-item-caption-price"
                        ).length &&
                        (a = e(s)
                          .closest(
                            ".product-template__container.page-width.template-product"
                          )
                          .find(
                            ".product-item-caption-header .product-item-caption-price"
                          ));
                    else if (
                      e(s).closest(".product-single").find('dl[class*="price"]')
                        .length
                    )
                      a = e(s)
                        .closest(".product-single")
                        .find('dl[class*="price"]')
                        .first();
                    else if (
                      e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__prices").length
                    )
                      a = e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__prices");
                    else if (
                      e(s)
                        .closest(".product.grid")
                        .find(
                          ".product__details .product__form--add-to-cart .product__price"
                        ).length
                    )
                      a = e(s)
                        .closest(".product.grid")
                        .find(".product__details .product__form--add-to-cart");
                    else if (
                      e(s)
                        .closest(".grid.product-single")
                        .find(
                          ".product-single__info-wrapper .product-single__meta-list"
                        ).length
                    )
                      a = e(s)
                        .closest(".grid.product-single")
                        .find(
                          ".product-single__info-wrapper .product-single__meta-list"
                        );
                    else if (
                      e(s).hasClass("product__image-wrapper") &&
                      e(s)
                        .closest("#ProductSection")
                        .find(
                          ".grid-item .inline-list.product-meta[data-price]"
                        ).length
                    )
                      a = e(s)
                        .closest("#ProductSection")
                        .find(
                          ".grid-item .inline-list.product-meta[data-price]"
                        );
                    else if (
                      e(s).hasClass("product__media-container") &&
                      e(s)
                        .closest(".product-template")
                        .find(".product__content .product__price").length
                    )
                      a = e(s)
                        .closest(".product-template")
                        .find(".product__content .product__price");
                    else if (
                      e(s).hasClass("product-single__media") &&
                      e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__meta .price-container").length
                    )
                      a = e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__meta .price-container");
                    else if (
                      e(s).parent(".product-single__image-wrapper").length &&
                      e(s)
                        .closest(".product-single__hero")
                        .find(".product-single__prices").length
                    )
                      a = e(s)
                        .closest(".product-single__hero")
                        .find(".product-single__prices");
                    else if (
                      e(s).hasClass("gallery__image-wrapper") &&
                      e(s)
                        .closest(".product--template")
                        .find(".product__content .price").length
                    )
                      a = e(s)
                        .closest(".product--template")
                        .find(".product__content .price");
                    else if (
                      e(s).hasClass("image-container-position") &&
                      e(s).closest("article.product-detail").find(".pricing")
                        .length
                    )
                      a = e(s)
                        .closest("article.product-detail")
                        .find(".pricing");
                    else if (
                      e(s).hasClass("swiper-slide") &&
                      e(s)
                        .closest(".product-page-row")
                        .find(".product-item-caption-price").length
                    )
                      a = e(s)
                        .closest(".product-page-row")
                        .find(".product-item-caption-price");
                    else if (
                      e(s).is(
                        ".product-single__photo__item.product-single__photo__item--image"
                      ) &&
                      e(s)
                        .closest(".product-single__bottom")
                        .find(".product-single__box").length
                    )
                      a = e(s)
                        .closest(".product-single__bottom")
                        .find(".product-single__box");
                    else if (
                      e(s).is(".mz-figure.mz-hover-zoom.mz-ready") &&
                      e(s)
                        .closest(".grid.product-single")
                        .find(".price-container").length
                    )
                      a = e(s)
                        .closest(".grid.product-single")
                        .find(".price-container");
                    else if (
                      e(s).closest(".product_section").find(".current_price")
                        .length
                    )
                      a = e(s)
                        .closest(".product_section")
                        .find(".current_price");
                    else if (
                      e(s)
                        .closest("#shopify-section-product-template")
                        .find(".new-price").length
                    )
                      a = e(s)
                        .closest("#shopify-section-product-template")
                        .find(".new-price");
                    else if (
                      e(s).hasClass("rondell-container") &&
                      e(s)
                        .closest(".product--container")
                        .find(".product-pricing").length
                    )
                      a = e(s)
                        .closest(".product--container")
                        .find(".product-pricing");
                    else if (
                      e(s).hasClass("aspect-ratio") &&
                      e(s)
                        .closest(".product-block-list")
                        .find(".product-meta__reference").length
                    )
                      a = e(s)
                        .closest(".product-block-list")
                        .find(".product-meta__reference");
                    else if (
                      (e(s).hasClass("product__main-photos") ||
                        e(s).hasClass("image-wrap")) &&
                      e(s)
                        .closest(".grid--product-images--partial")
                        .find(".product-single__sku").length
                    )
                      a = e(s)
                        .closest(".grid--product-images--partial")
                        .find(".product-single__sku");
                    else if (13974 == t.storeId) {
                      if (
                        "products" == i &&
                        (e(s).hasClass("product-main-image") ||
                          e(s).hasClass("product-fancybox"))
                      ) {
                        let t = e("#product-description").find("h1").next();
                        t.length &&
                          !e("#product-description").find(".bss_pb_img")
                            .length &&
                          (a = t);
                      }
                    } else if (
                      14136 == t.storeId &&
                      e(s).hasClass("product-fancybox") &&
                      e(s)
                        .closest(".product-page.product-template")
                        .find("#product-description > h1").length
                    )
                      a = e(s)
                        .closest(".product-page.product-template")
                        .find('div[itemprop="offers"]');
                    else if (
                      10747 == t.storeId &&
                      e(s).hasClass("product-single__title")
                    )
                      a = e(s).closest(".gf_row").find(".gf_product-prices");
                    else if (16502 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("rimage-wrapper") &&
                        (a = e(s)
                          .closest(".product-layout-grid")
                          .find(".product-detail__price"));
                    else if (16645 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("product-image-gallery") &&
                        (a = e(s)
                          .closest(".row")
                          .find(".review-product-details"));
                    else if (16537 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("image-zoom") &&
                        (a = e(s)
                          .closest(".product-single__hero")
                          .find(".post-large--one-half")
                          .next()
                          .find(".product-single__prices"));
                    else if (6673 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("fancybox") &&
                        ((a = e(s).closest(".product_top").find(".group_item")),
                        setTimeout(() => {
                          let t = e(s).parent().children(".bss_pb_img");
                          t.length && t.remove();
                        }, 220));
                    else if (14136 == t.storeId) {
                      if (
                        "products" == i &&
                        e(s).hasClass("product-media-container")
                      ) {
                        let t = e(s)
                          .closest(".product__section")
                          .find(".product__price-container");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      }
                    } else if (8239 == t.storeId) {
                      if (
                        "products" == i &&
                        e(s).hasClass("product__main-photos")
                      ) {
                        let t = e(s)
                          .closest(".grid")
                          .find(".product-single__title")
                          .next();
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      }
                    } else if (10234 == t.storeId && "products" == i) {
                      if (
                        e(s).hasClass("image-wrap") &&
                        e(s).closest(".grid")
                      ) {
                        let t = e(s)
                          .closest(".grid")
                          .find(".product-block--header")
                          .next();
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      }
                    } else if (15088 == t.storeId && "products" == i) {
                      if (e(s).hasClass("product-media-container")) {
                        let t = e(s).closest(".gridlock-fluid").find(".rte");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      }
                    } else if (
                      2907 == t.storeId &&
                      "products" == i &&
                      e(s).hasClass("image-wrap")
                    ) {
                      let t = e(s)
                        .closest(".grid--product-images-right")
                        .find(".product__review-price_wrapper");
                      t.length &&
                        !t.parent().find(".bss_pb_img").length &&
                        (a = t);
                    }
                    if (
                      Shopify &&
                      Shopify.theme &&
                      Shopify.theme.name &&
                      -1 !== Shopify.theme.name.indexOf("Dawn")
                    )
                      if (e(s).hasClass("product__media")) {
                        let t = e(s).closest(".product").find(".price");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      } else if (e(s).hasClass("card-information__text")) {
                        let t = e(s).parent().find("span.price");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      } else if (e(s).hasClass("product__info-container")) {
                        let t = e(s).find(".price");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      }
                    return a;
                  })(e, t, n, l)),
                  f.length && !f.prev(".bss_pb_img").length)
                ) {
                  if ("/search" == window.location.pathname)
                    e(f).after(_),
                      e(f).next().next().hasClass("bss_pb_img") &&
                        e(f).next().next().remove();
                  else if (10234 == t.storeId) e(f).after(_);
                  else if (9987 == t.storeId && "products" == l) {
                    let t = '<div class="bss-custom-badge-name">';
                    (t += _), (t += "</div>"), e(f).before(t);
                  } else
                    10299 != t.storeId ||
                    ("products" != l && "collections" != l)
                      ? e(f).before(_)
                      : f.parent().find(".bss_pb_img").length || f.after(_);
                  (d = !0),
                    setTimeout(function () {
                      let t = 0;
                      if (e(f).prev().hasClass("bss_pb_img"))
                        if (e(f).prev().find("img.bss-pb-frontend").length) {
                          (t = e(f)
                            .prev()
                            .find("img.bss-pb-frontend")
                            .height()),
                            (t = parseInt(t) + parseInt(c));
                          let s = e(f).prev();
                          e(s).height(t + "px");
                        } else {
                          (t = e(f)
                            .prev()
                            .find(".bss-pb-frontend.bss_pl_label_text")
                            .height()),
                            (t = parseInt(t) + parseInt(c));
                          let s = e(f).prev();
                          e(s).height(t + "px");
                        }
                    }, 300);
                }
                ((g.length && "products" == l) ||
                  (Shopify &&
                    Shopify.theme &&
                    Shopify.theme.name &&
                    -1 !== Shopify.theme.name.indexOf("Dawn") &&
                    "" == l &&
                    e(g).closest(".collage-card").length)) &&
                  (g.prev(".bss_pb_img").length ||
                    (2907 == t.storeId
                      ? (e(g).append(_),
                        (d = !0),
                        setTimeout(function () {
                          let t = e(g)
                            .parent()
                            .find(".bss_pb_img img")
                            .first()
                            .height();
                          t = parseInt(t) + parseInt(c);
                          let s = e(g).parent().find(".bss_pb_img");
                          e(s).height("0 px !important");
                        }, 500))
                      : (e(g).before(_),
                        (d = !0),
                        setTimeout(function () {
                          let t = e(g)
                            .parent()
                            .find(".bss_pb_img img")
                            .first()
                            .height();
                          t = parseInt(t) + parseInt(c);
                          let s = e(g).parent().find(".bss_pb_img");
                          e(s).height(t + "px");
                        }, 300))));
                let s = e(n)
                  .closest(".list-view-item")
                  .find('div[class*="item__title"]')
                  .first();
                s.length &&
                  (s.closest("div").find(".bss_pb_img").length ||
                    (e(s).find('div[class*="title"]').after(_),
                    (d = !0),
                    setTimeout(function () {
                      let t = e(s)
                        .closest("div")
                        .find(".bss_pb_img img")
                        .first()
                        .height();
                      t = parseInt(t) + parseInt(c);
                      let i = e(s).parent().find(".bss_pb_img");
                      e(i).height(t + "px");
                    }, 300)));
              }
            }),
            !d) &&
            !e(n).hasClass("swatchProductColor") &&
            !e(n).hasClass("hero-content") &&
            !e(n).hasClass("critical-clear") &&
            (e.each(i, function (i, o) {
              var l = "",
                n = p(e, t, s, a, r, o);
              let c = e(o).attr("class");
              (l +=
                '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                t.getMaxValueMarginBottom(s) +
                'px;">'),
                (l += n.join("")),
                (l += "</div>"),
                c && c.includes("price")
                  ? (e(o).after(l), (d = !0))
                  : c && c.includes("name") && (e(o).after(l), (d = !0));
            }),
            !d)
          ) {
            let i = "",
              o = p(e, t, s, a, r, n),
              d = t.getMaxValueMarginBottom(s);
            o.length &&
              ((i +=
                '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                d +
                'px">'),
              (i += o.join("")),
              (i += "</div>"),
              (9006 == t.storeId &&
                ("products" == l) & ("Column" == attr("data-pf-type"))) ||
                e(n).after(i));
          }
        }),
        (e.initForBadgePrice = function (e, t, s, a, r, o, l, n, d) {
          let c = !1;
          if (
            (e.each(a, function (a, d) {
              let h = t.getMaxValueMarginTop(s),
                _ = "",
                f = "",
                g = "",
                u = p(e, t, s, r, o, d),
                m = t.getMaxValueMarginBottom(s);
              if (u.length && !l) {
                (_ +=
                  '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                  m +
                  'px">'),
                  (_ += u.join("")),
                  (_ += "</div>"),
                  (f = i(e, t, d, n)),
                  e(d).hasClass("grid__item") &&
                    e(d).find(".product-card .product-card__availability")
                      .length &&
                    (c = !0),
                  (g = (function (e, t, s, i) {
                    let a = "";
                    if (
                      Shopify &&
                      Shopify.theme &&
                      Shopify.theme.name &&
                      -1 !== Shopify.theme.name.indexOf("Dawn")
                    )
                      if (e(s).hasClass("product__media")) {
                        let t = e(s).closest(".product").find(".price");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      } else if (e(s).hasClass("card-information__text")) {
                        let t = e(s)
                          .closest(".collage-content")
                          .find("span.price");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      } else if (e(s).hasClass("product__info-container")) {
                        let t = e(s).find(".price");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (a = t);
                      }
                    if (
                      5295 == t.storeId &&
                      e(s).is(".swiper-slide.zoom-img-wrap.swiper-slide-active")
                    )
                      e(s)
                        .closest(
                          ".product-template__container.page-width.template-product"
                        )
                        .find(
                          ".product-item-caption-header .product-item-caption-price"
                        ).length &&
                        (a = e(s)
                          .closest(
                            ".product-template__container.page-width.template-product"
                          )
                          .find(
                            ".product-item-caption-header .product-item-caption-price"
                          ));
                    else if (
                      e(s).closest(".product-single").find('dl[class*="price"]')
                        .length
                    )
                      a = e(s)
                        .closest(".product-single")
                        .find('dl[class*="price"]')
                        .first();
                    else if (
                      e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__prices").length
                    )
                      a = e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__prices");
                    else if (
                      e(s)
                        .closest(".product.grid")
                        .find(
                          ".product__details .product__form--add-to-cart .product__price"
                        ).length
                    )
                      a = e(s)
                        .closest(".product.grid")
                        .find(
                          ".product__details .product__form--add-to-cart .product__price"
                        );
                    else if (
                      e(s).hasClass("product__image-wrapper") &&
                      e(s)
                        .closest("#ProductSection")
                        .find(
                          ".grid-item .inline-list.product-meta[data-price]"
                        ).length
                    )
                      a = e(s)
                        .closest("#ProductSection")
                        .find(
                          ".grid-item .inline-list.product-meta[data-price]"
                        );
                    else if (
                      e(s).hasClass("product__media-container") &&
                      e(s)
                        .closest(".product-template")
                        .find(".product__content .product__price").length
                    )
                      a = e(s)
                        .closest(".product-template")
                        .find(".product__content .product__price");
                    else if (
                      e(s).hasClass("product-single__media") &&
                      e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__meta .price-container").length
                    )
                      a = e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__meta .price-container");
                    else if (
                      e(s).parent(".product-single__image-wrapper").length &&
                      e(s)
                        .closest(".product-single__hero")
                        .find(".product-single__prices").length
                    )
                      a = e(s)
                        .closest(".product-single__hero")
                        .find(".product-single__prices");
                    else if (
                      e(s).hasClass("gallery__image-wrapper") &&
                      e(s)
                        .closest(".product--template")
                        .find(".product__content .price").length
                    )
                      a = e(s)
                        .closest(".product--template")
                        .find(".product__content .price");
                    else if (
                      e(s).hasClass("image-container-position") &&
                      e(s).closest("article.product-detail").find(".pricing")
                        .length
                    )
                      a = e(s)
                        .closest("article.product-detail")
                        .find(".pricing");
                    else if (
                      e(s).is(
                        ".product-single__photo__item.product-single__photo__item--image"
                      ) &&
                      e(s)
                        .closest(".product-single__bottom")
                        .find(".product-single__price").length
                    )
                      a = e(s)
                        .closest(".product-single__bottom")
                        .find(".product-single__price");
                    else if (
                      e(s).is(".mz-figure.mz-hover-zoom.mz-ready") &&
                      e(s)
                        .closest(".grid.product-single")
                        .find(".price-container").length
                    )
                      a = e(s)
                        .closest(".grid.product-single")
                        .find(".price-container");
                    else if (
                      e(s).closest(".product_section").find(".current_price")
                        .length
                    )
                      a = e(s)
                        .closest(".product_section")
                        .find(".current_price");
                    else if (
                      e(s).hasClass("aspect-ratio") &&
                      e(s).closest(".product-block-list").find(".price").length
                    )
                      a = e(s).closest(".product-block-list").find(".price");
                    else if (6653 == t.storeId && "" == i)
                      e(s).hasClass("product-card__quick-add") &&
                        (a = e(s)
                          .closest(".product-card__content")
                          .find(".product-card__price-wrapper"));
                    else if (8911 == t.storeId && e(s).hasClass("image-wrap"))
                      e(s).closest(".grid").find(".product__price").length &&
                        (a = e(s).closest(".grid").find(".product__price"));
                    else if (16443 == t.storeId) {
                      if ("products" == i && e(s).hasClass("image-wrap")) {
                        let t = e(s)
                          .closest(".grid--product-images--partial")
                          .find(".product__policies");
                        t.length && !e(t).find(".bss_pl_img").length && (a = t);
                      }
                    } else if (16502 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("rimage-wrapper") &&
                        (a = e(s)
                          .closest(".product-layout-grid")
                          .find(".product-detail__price"));
                    else if (16354 == t.storeId)
                      "/" == window.location.pathname &&
                        e(s).hasClass("ProductItem__Wrapper") &&
                        (a = e(s));
                    else if (16645 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("product-image-gallery") &&
                        (a = e(s).closest(".row").find(".detail-price"));
                    else if (5584 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("breadcrumbs-list__item") &&
                        (a = e(s)
                          .closest(".section-main-product")
                          .find(".price-area"));
                    else if (
                      10234 == t.storeId &&
                      "products" == i &&
                      e(s).hasClass("product__main-photos")
                    ) {
                      let t = e(s).closest(".grid");
                      setTimeout(() => {
                        let t = e(s).parent().children(".bss_pb_img");
                        t.length && t.remove();
                      }, 220),
                        t.length &&
                          !t.find(".bss_pb_img").length &&
                          (a = t.find(".money").last());
                    } else if (10234 == t.storeId)
                      "collections" == i &&
                        e(s).hasClass("spf-product-card__title") &&
                        !e(s).closest(".spf-product-card").find(".bss_pb_img")
                          .length &&
                        (a = e(s)
                          .parent()
                          .find(".spf-product-card__price-wrapper"));
                    else if (
                      e(s).hasClass("product__main-photos") &&
                      12119 !== t.storeId
                    ) {
                      let t = e(s).closest(".grid");
                      t.length && (a = t.find(".money").last());
                    } else if (12119 == t.storeId) {
                      if (
                        "products" == i &&
                        e(s).hasClass("product__main-photos")
                      ) {
                        let t = e(s).closest(".grid");
                        t.length &&
                          ((a = t.find(".product__price")),
                          t.find(".product__price").length > 1 &&
                            (a = t.find(".product__price.on-sale")));
                      }
                    } else
                      14136 == t.storeId
                        ? (a = e(s)
                            .closest(".product-page.product-template")
                            .find("#product-price"))
                        : 13882 == t.storeId && "products" == i
                        ? (a = e(s)
                            .closest(".product--outer")
                            .find(".product-pricing"))
                        : 6673 == t.storeId
                        ? (("/search" != window.location.pathname &&
                            "products" != i) ||
                            !e(s).hasClass("product-image") ||
                            (a = e(s)
                              .closest(".inner-top")
                              .find(".product-title")),
                          "products" == i &&
                            e(s).hasClass("fancybox") &&
                            (a = e(s)
                              .closest(".product_top")
                              .find(".product-title")))
                        : 15462 == t.storeId &&
                          "products" == i &&
                          e(s).hasClass("card__image-container")
                        ? (a = e(s)
                            .closest("#product-wrapper")
                            .find("#ProductPrice-product-template"))
                        : 15803 == t.storeId
                        ? "products" == i &&
                          e(s).hasClass("responsive-image__wrapper")
                          ? (a = e(s).closest(".product").find(".unit-price"))
                          : "/search" == window.location.pathname &&
                            e(s).hasClass("search-template__image")
                          ? (a = e(s).parent().find("span"))
                          : "collections" == i &&
                            e(s).hasClass("product-tile__images") &&
                            (a = e(s)
                              .closest(".product-tile")
                              .find(".unit-price"))
                        : 16183 == t.storeId
                        ? "products" == i && e(s).hasClass("flickity-slider")
                          ? (a = e(s)
                              .closest(".pr_sticky_content")
                              .find(".price_range"))
                          : ("collections" != i && "" != i) ||
                            !e(s).hasClass("pr") ||
                            (a = e(s).closest(".product-inner").find(".price"))
                        : 11656 == t.storeId
                        ? "products" == i &&
                          e(s).parent().hasClass("card__section") &&
                          (a = e(s)
                            .closest(".product-block-list")
                            .find(".product-form__info-item")
                            .first())
                        : 14553 == t.storeId
                        ? "products" == i && e(s).hasClass("sf-image")
                          ? (a = e(s)
                              .closest(".sf-prod__block")
                              .find(".main-product__block-price")
                              .first())
                          : ("collections" != i &&
                              "/search" != window.location.pathname) ||
                            !e(s).hasClass("flex") ||
                            (a = e(s)
                              .closest(".product-form")
                              .find(".sf__pcard-price"))
                        : 19357 == t.storeId &&
                          "products" == i &&
                          e(s).parent().hasClass("splide__slide") &&
                          (a = e(s)
                            .closest('[data-pf-type="Section"]')
                            .find('[data-pf-type="Paragraph"]'));
                    return a;
                  })(e, t, d, n)),
                  f.length &&
                    !c &&
                    (f.next(".bss_pb_img").length ||
                      (9708 != t.storeId ||
                      ("collections" != n &&
                        "/search" != window.location.pathname &&
                        "" != n)
                        ? (e(f).after(_), (c = !0))
                        : (e(f).append(_), (c = !0)),
                      setTimeout(function () {
                        let t = 0;
                        if (e(f).prev().hasClass("bss_pb_img")) {
                          (t = e(f)
                            .prev()
                            .find("img.bss-pb-frontend")
                            .height()),
                            (t = parseInt(t) + parseInt(h));
                          let s = e(f).prev();
                          e(s).height(t + "px");
                        }
                      }, 300))),
                  (g.length ||
                    (Shopify &&
                      Shopify.theme &&
                      Shopify.theme.name &&
                      -1 !== Shopify.theme.name.indexOf("Dawn") &&
                      "" == n &&
                      e(g).closest(".product__info-wrapper").length)) &&
                    (g.next(".bss_pb_img").length ||
                      (12582 == t.storeId
                        ? "products" == n &&
                          (g.hasClass(".price--highlight") ||
                            g.hasClass(".price--compare")) &&
                          (c = !0)
                        : (e(g).after(_),
                          (c = !0),
                          setTimeout(function () {
                            let t = e(g)
                              .parent()
                              .find(".bss_pb_img img")
                              .first()
                              .height();
                            t = parseInt(t) + parseInt(h);
                            let s = e(g).parent().find(".bss_pb_img");
                            e(s).height(t + "px");
                          }, 300))));
                let s = e(d)
                  .closest(".list-view-item")
                  .find('div[class*="item__title"]')
                  .first();
                s.length &&
                  ((14855 == t.storeId &&
                    "/search" == window.location.pathname) ||
                    s.closest("div").find(".bss_pb_img").length ||
                    (e(s).find('div[class*="title"]').after(_),
                    (c = !0),
                    setTimeout(function () {
                      let t = e(s)
                        .closest("div")
                        .find(".bss_pb_img img")
                        .first()
                        .height();
                      t = parseInt(t) + parseInt(h);
                      let i = e(s).parent().find(".bss_pb_img");
                      e(i).height(t + "px");
                    }, 300)));
              }
            }),
            !c) &&
            !e(d).hasClass("swatchProductColor") &&
            !e(d).hasClass("hero-content") &&
            !e(d).hasClass("critical-clear")
          )
            if (5196 == t.storeId);
            else if (
              (e.each(a, function (i, a) {
                var l = "",
                  n = p(e, t, s, r, o, a);
                let d = t.getMaxValueMarginBottom(s),
                  h = e(a).attr("class");
                (l +=
                  '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                  d +
                  'px;">'),
                  (l += n.join("")),
                  (l += "</div>"),
                  h && h.includes("price")
                    ? (e(a).after(l), (c = !0))
                    : h && h.includes("name") && (e(a).after(l), (c = !0));
              }),
              !c)
            ) {
              let i = "",
                a = p(e, t, s, r, o, d),
                l = t.getMaxValueMarginBottom(s);
              a.length &&
                ((i +=
                  '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                  l +
                  'px;">'),
                (i += a.join("")),
                (i += "</div>"),
                e(d).after(i));
            }
        }),
        (e.initForBadgeProductImage = function (e, t, s, i, a, r, o, l, n) {
          let d = !1;
          if (
            (e.each(i, function (i, n) {
              let c = t.getMaxValueMarginTop(s),
                h = "",
                _ = p(e, t, s, a, r, n),
                f = t.getMaxValueMarginBottom(s);
              _.length &&
                !o &&
                ((h +=
                  '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                  f +
                  'px;">'),
                (h += _.join("")),
                (h += "</div>"),
                (d = (function (e, t, s, i, a) {
                  let r = !1;
                  if (e(s).hasClass("product-item__link-wrapper"))
                    e(s).find(".product-item__image-container").length
                      ? (e(s).find(".product-item__image-container").after(a),
                        (r = !0))
                      : (e(s)
                          .find("img")
                          .wrap(
                            '<div class="product-item__image-container"></div>'
                          ),
                        e(s).find(".product-item__image-container").after(a),
                        (r = !0));
                  else if (
                    e(s).is(".product__photo.featured-product__photo") &&
                    "" == i &&
                    e(s).find(
                      ".featured-product__photo-wrapper .product__photo--single"
                    ).length
                  )
                    e(s)
                      .find(
                        ".featured-product__photo-wrapper .product__photo--single"
                      )
                      .first()
                      .after(a),
                      (r = !0);
                  else if (
                    e(s).is(".grid__item.product-single__meta--wrapper") &&
                    "" == i &&
                    e(s)
                      .closest(".grid.product-single")
                      .find(
                        ".product-single__media-wrapper .product-single__media"
                      ).length
                  )
                    e(s)
                      .closest(".grid.product-single")
                      .find(
                        ".product-single__media-wrapper .product-single__media"
                      )
                      .after(a),
                      (r = !0);
                  else if (
                    e(s).hasClass("grid__item") &&
                    e(s).find(
                      ".product-card__image-container .product-card__image"
                    ).length
                  )
                    e(s)
                      .find(
                        ".product-card__image-container .product-card__image"
                      )
                      .after(a),
                      e(s)
                        .find(".product-card__image-container")
                        .css("margin-bottom", "0px"),
                      e(s)
                        .find(".product-card__info")
                        .css("position", "relative"),
                      (r = !0);
                  else if (
                    e(s).hasClass("grid-item") &&
                    e(s).find(".product-grid-image .lazyload__image-wrapper")
                      .length
                  )
                    e(s)
                      .find(".product-grid-image .lazyload__image-wrapper")
                      .after(a),
                      (r = !0);
                  else if (
                    e(s).is(".product-card") &&
                    e(s).find(
                      ".product-card__link .product-card__image-wrapper"
                    ).length
                  ) {
                    let t = e(s)
                        .find(
                          ".product-card__link .product-card__image-wrapper"
                        )
                        .html(),
                      i =
                        "<div class=" +
                        e(s)
                          .find(
                            ".product-card__link .product-card__image-wrapper"
                          )
                          .attr("class") +
                        ">" +
                        t +
                        "</div>";
                    e(s)
                      .find(".product-card__link .product-card__image-wrapper")
                      .html(i)
                      .removeAttr("class"),
                      e(s)
                        .find(
                          ".product-card__link .product-card__image-wrapper"
                        )
                        .after(a),
                      (r = !0);
                  } else if (
                    e(s).hasClass("rimage-wrapper") &&
                    "products" == i
                  ) {
                    let t = e(s)
                      .closest(".product-detail__images")
                      .find(".rimage-wrapper")
                      .first();
                    0 == t.find(".bss_pb_img").length && (t.after(a), (r = !0));
                  } else if (
                    e(s).find(".product-card__image-with-placeholder-wrapper")
                      .length
                  )
                    e(s)
                      .find(".product-card__image-with-placeholder-wrapper")
                      .after(a),
                      (r = !0);
                  else if (e(s).hasClass("product-single__media")) {
                    let t = e(s)
                      .closest(".product-single__media-group")
                      .find("div[data-thumbnail-slider]");
                    e(s).closest(".product-single__media-group").length &&
                    t.length
                      ? t.prev(".bss_pb_img").length || (t.before(a), (r = !0))
                      : e(s)
                          .parent()
                          .hasClass("product-single__media-wrapper") &&
                        (e(s).after(a), (r = !0));
                  } else if (
                    e(s).hasClass("product-single__photo") &&
                    !e(s).parent().hasClass("photos__item photos__item--main")
                  ) {
                    e(s).parent().hasClass("product-single__photo-wrapper") &&
                      (e(s).after(a), (r = !0));
                    let t = e(s).parent().parent();
                    t.hasClass("slick-list") &&
                      !t.children().hasClass("bss_pb_img") &&
                      (t.after(a), (r = !0));
                  } else if (e(s).hasClass("product-single__photos"))
                    e(s)
                      .parent()
                      .hasClass("product-single__featured-image-wrapper") &&
                      (e(s).after(a), (r = !0));
                  else if (e(s).hasClass("featured-product__photo"))
                    e(s).after(a), (r = !0);
                  else if (
                    e(s).hasClass("product__photo-wrapper") &&
                    e(s).hasClass("product__photo-wrapper-product-template")
                  )
                    e(s).after(a), (r = !0);
                  else if (e(s).hasClass("grid-product__image-wrapper"))
                    e(s).find(".product--wrapper").length &&
                      (e(s).find(".product--wrapper").after(a), (r = !0));
                  else if (e(s).hasClass("product__gallery"))
                    e(s).next(".bss_pb_img").length || e(s).after(a), (r = !0);
                  else if (e(s).hasClass("product-card--list"))
                    e(s).find(".product-card__image-wrapper").length &&
                      (e(s).find(".product-card__image-wrapper").after(a),
                      (r = !0));
                  else if (e(s).hasClass("product-media--featured-product"))
                    e(s).after(a), (r = !0);
                  else if (
                    e(s).hasClass("card") &&
                    e(s).hasClass("critical-clear")
                  )
                    e(s).find(".card__image-wrapper").after(a), (r = !0);
                  else if (
                    e(s).hasClass("grid-item") &&
                    e(s).find(".product-grid-image--centered").length
                  ) {
                    let t = e(s).find(".product-grid-image--centered");
                    t.css("position", "relative"), t.after(a), (r = !0);
                  } else if ("offers" == e(s).attr("itemprop"))
                    e(".grid-item .no-js.product__image-wrapper").length
                      ? e(s)
                          .closest(".grid")
                          .find(
                            ".grid-item .product-photo-container .no-js.product__image-wrapper"
                          )
                          .first()
                          .after(a)
                      : e(
                          ".product-single__hero .grid__item .product-single__photos"
                        ).length &&
                        e(
                          ".product-single__hero .grid__item .product-single__photos"
                        )
                          .css("position", "relative")
                          .after(a),
                      (r = !0);
                  else if (e(s).hasClass("product__img-wrapper"))
                    e(s).after(a), (r = !0);
                  else if (
                    3498 == t.storeId &&
                    e(s).hasClass("AspectRatio--withFallback")
                  )
                    e(s).prepend(a), (r = !0);
                  else if (3599 == t.storeId) {
                    if (e(s).hasClass("hero__content")) {
                      var o = e(s)
                        .parents()
                        .parents()
                        .find(".split-hero__half--right");
                      o.length > 0 &&
                        (e(s).find("bss_pl_img").remove(),
                        o.first().prepend(a),
                        (r = !0));
                    }
                    if (e(s).hasClass("product-information-custom")) {
                      var l = e(s).prev().find(".product-item__image-custom");
                      l.length > 0 && (l.prepend(a), (r = !0));
                    }
                    "products" == i &&
                      e(s).hasClass("lazy-image") &&
                      (e(s).prepend(a), (r = !0));
                  } else if (1576 == t.storeId && e(s).hasClass("fotorama"))
                    e(s).prepend(a), (r = !0);
                  else if (3232 == t.storeId && e(s).hasClass("image-wrap"))
                    e(s).parent().prepend(a), (r = !0);
                  else if (4063 == t.storeId)
                    (e(s).parent().hasClass("tt-product-single-img") ||
                      e(s).hasClass("slick-slide")) &&
                      (e(s).prepend(a), (r = !0));
                  else if (
                    4682 == t.storeId &&
                    e(s).hasClass("product-media-container") &&
                    e(s).closest(".flickity-viewport").length
                  )
                    e(s).closest(".flickity-viewport").after(a), (r = !0);
                  else if (
                    e(s).hasClass("product-single__photo-wrapper") &&
                    e(s).parent().hasClass("product-single__photo--container")
                  )
                    e(s).css("position", "relative").after(a), (r = !0);
                  else if (
                    e(s).hasClass("product-single__photo-wrapper") &&
                    e(s).parent().hasClass("grid__item")
                  )
                    e(s).css("position", "relative").after(a), (r = !0);
                  else if (
                    e(s).hasClass("feature-row__text") &&
                    e(s).hasClass("feature-row__item")
                  ) {
                    let t = e(s).parent();
                    t.find(".feature-row__image-wrapper").length &&
                      !t.find(".supports-js").length &&
                      t.find(".feature-row__image-wrapper").after(a),
                      (r = !0);
                  } else if (e(s).hasClass("slideshow__slide")) r = !0;
                  else if (e(s).hasClass("product__image-container"))
                    e(s).after(a), (r = !0);
                  else if (
                    e(s).hasClass("product-gallery--image-background") &&
                    e(s).parent().hasClass("product-gallery--media")
                  )
                    e(s).parent().after(a), (r = !0);
                  else if (
                    e(s).hasClass("zoomGalleryActive") &&
                    e(s).parent().hasClass("slick-slide")
                  )
                    e(".pt-product-single-img").after(a), (r = !0);
                  else if (
                    e(s).hasClass("cbb-also-bought-product") &&
                    e(s).find("a").length
                  ) {
                    if (2241 == t.storeId)
                      (p = e(s)
                        .find(".cbb-also-bought-product-image")
                        .closest("a")).length && (p.prepend(a), (r = !0));
                    else
                      e(".pt-product-single-img").find("a").prepend(a),
                        (r = !0);
                  } else if (
                    e(s).hasClass("product-block") &&
                    e(s).has("grid__item")
                  )
                    e(s).find(".product-block__image").length &&
                      (e(s).find(".product-block__image").after(a), (r = !0));
                  else if (e(s).hasClass("image__container"))
                    e(s).css("position", "relative"), e(s).after(a), (r = !0);
                  else if (
                    e(s).hasClass("product-item") &&
                    e(s).find(".product-item__image-wrapper").length
                  ) {
                    (n = e(s).find(".product-item__image-wrapper")).css(
                      "position",
                      "relative"
                    ),
                      n.after(a),
                      (r = !0);
                  } else if (
                    e(s).hasClass("product-item") &&
                    e(s).find(".product-item__thumbnail").length
                  ) {
                    var n;
                    (n = e(s).find(".product-item__thumbnail")).css(
                      "position",
                      "relative"
                    ),
                      n.after(a),
                      (r = !0);
                  } else if (e(s).hasClass("product__main-photos"))
                    e(s).hasClass("aos-animate")
                      ? (r = !0)
                      : (e(s).after(a), (r = !0));
                  else if (e(s).hasClass("product-thumb"))
                    e(s).parent().hasClass("collection-products-wrapper") &&
                      (e(s).after(a), (r = !0)),
                      2656 == t.storeId && (r = !0);
                  else if (
                    e(s).parent().hasClass("shopify-product-gallery__image")
                  )
                    e(s).parent().after(a), (r = !0);
                  else if (
                    e(s).hasClass("product-collection__image") ||
                    e(s).hasClass("tt-image-box") ||
                    !e(s).parent().parent().hasClass("slick-slide")
                  )
                    if (e(s).hasClass("productitem")) {
                      let t = e(s).find(".productitem--image-link");
                      t.length &&
                        (t.css("position", "relative"), t.after(a), (r = !0));
                    } else if (e(s).hasClass("o-layout__item")) {
                      var d = e(s).find(".product__media");
                      d.length &&
                        (d.css("position", "relative"), d.after(a), (r = !0));
                    } else if (
                      e(s).hasClass("product-single__photo__item") &&
                      e(s).hasClass("slick-slide")
                    )
                      e(s).css("position", "relative"), e(s).after(a), (r = !0);
                    else if (e(s).hasClass("product-galley--image-background"))
                      e(s).css("position", "relative"), e(s).after(a), (r = !0);
                    else if (e(s).hasClass("grid-product__content"))
                      if (2788 === t.storeId) {
                        let t = e(s)
                          .find(".grid-product__link")
                          .find(".grid-product__image-mask");
                        t.length && (t.after(a), (r = !0));
                      } else
                        e(s).css("position", "relative"),
                          e(s).after(a),
                          (r = !0);
                    else if (
                      e(s).hasClass("thumbnail") &&
                      e(s).hasClass("columns")
                    )
                      e(s).find(".product_image").length &&
                        (e(s).find(".product_image").after(a), (r = !0));
                    else if (
                      e(s).hasClass("fancybox") &&
                      e("#shopify-section-product-template .flexslider").length
                    )
                      e(s).parent().after(a), (r = !0);
                    else if (
                      e(s).hasClass("rimage-wrapper") ||
                      e(s).hasClass("rimage-outer-wrapper")
                    )
                      e(s)
                        .parent()
                        .parent()
                        .hasClass("thumbnail--media-image") || e(s).after(a),
                        (r = !0);
                    else if (
                      e(s).hasClass("product-media--image") &&
                      e(s).parent().hasClass("main")
                    )
                      0 == e(s).find(".bss_pb_img").length &&
                        0 == e(s).find(".rimage-wrapper[data-handle]").length &&
                        (e(s).css("position", "relative"),
                        e(s).after(a),
                        (r = !0));
                    else if (
                      !e(s).hasClass("recomatic-product-wrap") &&
                      e(s).hasClass("swiper-slide") &&
                      e(s).parent().hasClass("swiper-wrapper")
                    )
                      10680 == t.storeId &&
                        e(s).hasClass(
                          "kusaba_product-slider__slide swiper-slide swiper-slide-active"
                        ) &&
                        e(s).parent().after(a),
                        e(s).css("position", "relative"),
                        e(s).after(a),
                        (r = !0);
                    else if (e(s).hasClass("prod-image")) {
                      var p = e(s).parent();
                      e(p).hasClass("prod-container") &&
                        (e(p).css("position", "relative"),
                        e(p).after(a),
                        (r = !0));
                    } else if (
                      e(s).hasClass("aspect-ratio") &&
                      e("#shopify-section-product-template .flickity-viewport")
                        .length
                    ) {
                      var c = e(
                        "#shopify-section-product-template .flickity-viewport"
                      );
                      e(c).parent().find(".bss_pb_img").length ||
                        (e(c).after(a), (r = !0));
                    } else if (e(s).hasClass("product-single__meta")) {
                      var h = e(s)
                        .parent()
                        .parent()
                        .find(".product-single__featured-image-wrapper");
                      h.length && (e(h).after(a), (r = !0));
                    } else if (e(s).hasClass("featured-img"))
                      e(s).after(a), (r = !0);
                    else if (
                      e(s).hasClass("c-slide-product__wrap-image") &&
                      e(s).hasClass("slick-slide")
                    )
                      e(s).after(a), (r = !0);
                    else if (
                      e(s).hasClass("image-cont") &&
                      e(s).hasClass("with-secondary-image")
                    )
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("cart-mini-item-image")) r = !0;
                    else if (e(s).hasClass("product-gallery--media-wrapper"))
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("snize-product")) {
                      (_ = e(s).find(".snize-thumbnail")).length &&
                        (e(_).after(a), (r = !0));
                    } else if (
                      e(s).hasClass("fotorama__stage__frame") ||
                      e(s).parent().hasClass("product-page-gallery__thumbnail")
                    ) {
                      (p = e(
                        ".product-page-gallery__main--single.product-page-gallery__main"
                      )).length &&
                        0 == p.find(".bss_pb_img").length &&
                        (e(p).css("position", "relative"), e(p).after(a)),
                        (r = !0);
                    } else if (
                      13709 != t.storeId &&
                      e(s).hasClass("ProductItem__Wrapper")
                    )
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("tt-image-box"))
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("tt-layout-vertical")) {
                      (_ = e(s).find(".tt-img")).length &&
                        (e(_).after(a), (r = !0));
                    } else if (e(s).hasClass("mediaimageholder"))
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("zoom-container")) {
                      (p = e(
                        "#shopify-section-product__main .product-gallery__main .flickity-viewport"
                      )).length
                        ? e(p).after(a)
                        : e(s).after(a),
                        (r = !0);
                    } else if (e(s).hasClass("recomatic-product-wrap")) {
                      var _;
                      (_ = e(s).find(".recomatic-image-wrap")).length &&
                        (e(_).after(a), (r = !0));
                    } else if (
                      e(s).hasClass("product-element-top") &&
                      (e(s)
                        .parent()
                        .parent()
                        .hasClass("owl-carousel-item-inner") ||
                        e(s).parent().hasClass("product-grid-item"))
                    )
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("gf_module-center"))
                      e(s).find("a").after(a), (r = !0);
                    else if (e(s).hasClass("vtl-product-card__header"))
                      e(s).find(".vtl-product-card__image").after(a), (r = !0);
                    else if (
                      e(s).parent().hasClass("product-top") &&
                      e(s).hasClass("product-image")
                    )
                      e(s).after(a), (r = !0);
                    else if (
                      e(s).hasClass("fancybox") &&
                      e(s).parent().hasClass("thumb")
                    )
                      e(s).after(a), (r = !0);
                    else if (
                      e(s).hasClass("proHImage") ||
                      e(s).hasClass("proFeaturedImage")
                    )
                      e(s).after(a), (r = !0);
                    else if (
                      e(s).hasClass("vtl-pb-main-widget__product-image")
                    ) {
                      (p = e(s).find("a")).length &&
                        (p.after(a), p.css("text-decoration", "none"));
                      var f = e(s).find(".bss-pl-frontend");
                      f.length && f.css("position", "relative"), (r = !0);
                    } else if (e(s).hasClass("photo-zoom-link ")) {
                      (p = e(s).parent().parent()).hasClass(
                        "product-image-main"
                      ) && p.after(a),
                        (r = !0);
                    } else if (
                      e(s).hasClass("image--container") &&
                      e(s).parent().hasClass("image--root")
                    ) {
                      (p = e(s).parent().parent().parent()).hasClass(
                        "modal--link"
                      ) &&
                        0 == p.find(".bss_pb_img").length &&
                        (p.after(a), (r = !0));
                    } else if (
                      e(s).hasClass("mthumb") &&
                      e(s).parent().hasClass("owl-item")
                    )
                      e(s).after(a), (r = !0);
                    else if (e(s).is("#bigimage")) e(s).after(a), (r = !0);
                    else if (e(s).hasClass("position-relative"))
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("image-container-position")) {
                      (p = e(s).parent().parent()).hasClass(
                        "image-container"
                      ) &&
                        !p.find(".bss_pb_img").length &&
                        (p.after(a), (r = !0));
                    } else if (
                      e(s).hasClass("gallery__image-wrapper") &&
                      e(s).hasClass("gallery__image-wrapper--scale")
                    )
                      e(s).after(a), (r = !0);
                    else if (
                      e(s).hasClass("product__submedia-wrapper") ||
                      e(s).hasClass("product__media-wrapper")
                    )
                      e(s).after(a), (r = !0);
                    else if (
                      e(s).parent().hasClass("product-single__image-wrapper")
                    ) {
                      let t = e(s)
                        .closest(".product-single__image-wrapper")
                        .parent()
                        .find(".product-single__image-wrapper")
                        .last();
                      t.next(".bss_pb_img").length ||
                        t.css("position", "relative").after(a),
                        (r = !0);
                    } else if (
                      e(s).hasClass("product__image-wrapper") &&
                      e(s).hasClass("no-js")
                    )
                      e(s).after(a), (r = !0);
                    else if (e(s).hasClass("product__photo--single"))
                      e(s).after(a), (r = !0);
                    else if (
                      6404 == t.storeId &&
                      e(s).find(".search__image-wrapper").length
                    )
                      e(s).find(".search__image-wrapper").after(a), (r = !0);
                    else if (8210 == t.storeId)
                      e(s)
                        .closest(".grid.product-single")
                        .find(".product-single__media-flex").length &&
                        (e(s)
                          .closest(".grid.product-single")
                          .find(".product-single__media-flex")
                          .after(a),
                        (r = !0)),
                        e(s).find(".grid-product__image-link img").length &&
                          e(s).find(".grid-product__image-link img").after(a);
                    else if (9987 == t.storeId && "collections" == i)
                      e(s).hasClass("grid-view-item product-card") &&
                        e(s).find(
                          ".grid-view-item__image-wrapper.product-card__image-wrapper"
                        ).length &&
                        (e(s)
                          .find(
                            ".grid-view-item__image-wrapper.product-card__image-wrapper"
                          )
                          .after(a),
                        (r = !0));
                    else if (9006 == t.storeId) {
                      if (
                        "/search" == window.location.pathname &&
                        e(s).hasClass("df-card")
                      ) {
                        let t = e(s).find(".df-card__image");
                        t.length && (t.after(a), (r = !0));
                      }
                      if ("" == i && "Column" == e(s).attr("data-pf-type")) {
                        let t = e(s).find(
                          '[data-pf-type="ProductDescription"]'
                        );
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (t.after(a), (r = !0));
                      }
                      ("collections" != i && "" != i && "products" != i) ||
                        "Column" != e(s).attr("data-pf-type") ||
                        (r = !0);
                    } else if (13371 == t.storeId) {
                      if ("collections" == i) {
                        let t = e(".product-item").find(".bss_pb_img");
                        t.length > 1 && t.last().remove();
                      }
                      if ("products" == i) {
                        let t = e(".product-gallery__carousel").find(
                          ".bss_pb_img"
                        );
                        if (
                          (t.length && t.not(":first").remove(),
                          e(s).hasClass("product-item__info-inner"))
                        ) {
                          let t = e(s)
                            .closest(".product-item")
                            .find(".bss_pb_img");
                          t.length && t.not(":first").remove();
                          let i = e(s).closest(".flickity-slider");
                          setTimeout(() => {
                            i.length &&
                              i.children(".bss_pb_img").length &&
                              i.children(".bss_pb_img").remove();
                          }, 400);
                        }
                      }
                    } else if (5483 == t.storeId) {
                      if (
                        ("collections" == i ||
                          "/" == window.location.pathname) &&
                        e(s).hasClass("limespot-recommendation-box-item")
                      ) {
                        let t = e(s).find(".ls-image-wrap");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (t.after(a), (r = !0));
                      }
                      if ("products" == i)
                        if (e(s).hasClass("image-wrap")) {
                          let t = e(s)
                            .closest(".slick-track")
                            .find(".product-image-main");
                          t.length &&
                            !e(s).closest(".slick-track").find(".bss_pb_img")
                              .length &&
                            (t.after(a), (r = !0));
                        } else if (
                          e(s).hasClass("limespot-recommendation-box-item")
                        ) {
                          let t = e(s).find(".ls-image-wrap");
                          t.length &&
                            !t.parent().find(".bss_pb_img").length &&
                            (t.after(a), (r = !0));
                        } else if (e(s).hasClass("grid-product__content")) {
                          let t = e(s).find(
                            ".image-wrap, .grid-product__image-mask"
                          );
                          t.length &&
                            !t.parent().find(".bss_pb_img").length &&
                            (t.after(a), (r = !0));
                        } else
                          e(s).hasClass("ls-image-wrap") &&
                            (e(s).after(""), (r = !0));
                    } else if (
                      15564 == t.storeId &&
                      "products" == i &&
                      e(s).hasClass("flickity-slider")
                    ) {
                      (g = e(s)
                        .closest(".col_thumb")
                        .find(".fade_flick_1.p-thumb_ppr.images")).length &&
                        (g.after(a), (r = !0));
                    } else if (16645 == t.storeId) {
                      if (
                        "collections" == i &&
                        e(s).hasClass("product-image")
                      ) {
                        let t = e(s).find(".img-effect");
                        t.length &&
                          !e(t).find(".bss_pb_img").length &&
                          (t.append(a), (r = !0));
                      }
                    } else if (7832 == t.storeId) {
                      if (
                        ("/search" == window.location.pathname &&
                          e(s).hasClass("grid-view-item-image") &&
                          (e(s).after(a), (r = !0)),
                        "products" == i &&
                          e(s).hasClass("product-medias__media"))
                      ) {
                        let t = e(s).closest(".swiper-container");
                        t.length && (t.append(a), (r = !0));
                      }
                      "collections" == i &&
                        e(s).hasClass("grid-view-item-image") &&
                        (e(s).after(a), (r = !0));
                    } else if (16502 == t.storeId) {
                      if (
                        ("/" == window.location.pathname &&
                          e(s).hasClass("global-border-radius") &&
                          (e(s).parent().after(a), (r = !0)),
                        "/search" == window.location.pathname &&
                          e(s).hasClass("global-border-radius"))
                      ) {
                        let t = e(s)
                          .closest(".product-block")
                          .find(".product-block__title");
                        t.length &&
                          !t.parent().find(".bss_pb_img").length &&
                          (t.after(a), (r = !0));
                      }
                    } else if (12519 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("fancybox") &&
                        (e(s).append(a), (r = !0));
                    else if (16099 == t.storeId)
                      "/" == window.location.pathname &&
                        e(s).hasClass("product-bottom-wrapper") &&
                        (e(s).parent().before(a), (r = !0)),
                        ("collections" != i &&
                          "products" != i &&
                          "/search" != window.location.pathname) ||
                          !e(s).hasClass("product-bottom") ||
                          (e(s).before(a), (r = !0));
                    else if (5822 == t.storeId)
                      "collections" == i &&
                        e(s).hasClass("one-third") &&
                        (e(s).find(".product_image").after(a), (r = !0)),
                        "/search" == window.location.pathname &&
                          e(s).hasClass("columns") &&
                          (e(s).append(a), (r = !0));
                    else if (11370 == t.storeId) {
                      if ("products" == i) {
                        var g;
                        if (e(s).hasClass("productitem--image"))
                          (g = e(s)
                            .closest(".productitem")
                            .find(".productitem--image-link")).length &&
                            !g.parent().find(".bss_pb_img").length &&
                            (g.after(a), (r = !0));
                        setTimeout(() => {
                          var t = e(
                            ".bss-countdown-display.bss-pb-frontend"
                          ).closest(
                            ".product-gallery--viewer.product-gallery--has-media"
                          );
                          t.length &&
                            (t.parent().find(".bss_pb_img").length &&
                              t.parent().find(".bss_pb_img").remove(),
                            t.after(a),
                            (r = !0));
                        }, 400);
                      }
                    } else if (6101 == t.storeId)
                      e(s).hasClass("mini-cart__item") &&
                        (e(s).find(".cart_image").append(a), (r = !0)),
                        "/search" == window.location.pathname
                          ? e(s).hasClass("columns") &&
                            (setTimeout(() => {
                              let t = e(s).parent().children(".bss_pb_img");
                              t.length && t.remove();
                            }, 220),
                            e(s).append(a),
                            (r = !0))
                          : "products" == i
                          ? !e(s).parent().find(".bss_pb_img").length &&
                            e(s).hasClass("image__container")
                            ? (e(s).after(a), (r = !0))
                            : e(s).hasClass("product-wrap") &&
                              (setTimeout(() => {
                                let t = e(s).parent().find(".bss_pb_img");
                                t.length > 1 && t.not(":first").remove();
                              }, 220),
                              e(s).find(".product_image").append(a),
                              (r = !0))
                          : "collections" == i &&
                            e(s).hasClass("product_image") &&
                            (setTimeout(() => {
                              let t = e(s).parent().find(".bss_pb_img");
                              t.length > 1 && t.not(":first").remove();
                            }, 220),
                            e(s).after(a),
                            (r = !0));
                    else if (15488 == t.storeId)
                      "products" == i && e(s).hasClass("product__media")
                        ? (e(s)
                            .closest(".product__media-item")
                            .find(".product__modal-opener")
                            .after(a),
                          (r = !0))
                        : "collections" == i &&
                          e(s).hasClass("card-information__text") &&
                          setTimeout(() => {
                            e(s)
                              .closest(".card-wrapper")
                              .find(".card--product")
                              .after(a),
                              (r = !0);
                          }, 400);
                    else if (16886 == t.storeId)
                      "products" == i &&
                      e(s).hasClass("product-media-container") &&
                      e(s).closest(".slides").length
                        ? (e(s).closest(".slides").after(a), (r = !0))
                        : window.location.pathname.includes("/collections") &&
                          e(s).hasClass("product-info") &&
                          (e(s).parent().children("a").after(a), (r = !0));
                    else if (4097 == t.storeId)
                      ("/search" != window.location.pathname &&
                        "collections" != i &&
                        "" != i) ||
                        !e(s).hasClass("img-product") ||
                        (e(s).after(a), (r = !0));
                    else if (16487 == t.storeId)
                      "products" == i &&
                        e(s).hasClass("aspect-ratio") &&
                        e(s)
                          .parent()
                          .hasClass("product-gallery__size-limiter") &&
                        (e(s).after(a), (r = !0));
                    else if (16723 == t.storeId) {
                      let t = e(s).closest(".flickity-viewport");
                      "products" == i &&
                        e(s).hasClass("card__image-container") &&
                        e(s).parent().hasClass("product-single__media") &&
                        t.length &&
                        (t.parent().children(".bss_pb_img").length ||
                          (t.after(a), (r = !0)),
                        setTimeout(() => {
                          let t = e(s).parent().find(".bss_pb_img");
                          t.length > 0 && t.remove();
                        }, 220));
                    } else if (16961 == t.storeId) {
                      if (
                        "products" == i &&
                        e(s).hasClass("image-wrap") &&
                        e(s).parent().hasClass("product-image-main")
                      ) {
                        let t = e(s)
                          .closest(".product__main-photos-wrapper")
                          .find(".product-image-main");
                        t.length &&
                          !e(s).parent().children(".bss_pb_img").length &&
                          (t.append(a), (r = !0)),
                          setTimeout(() => {
                            let t = e(s).parent().find(".bss_pb_img");
                            t.length > 1 && t.not(":first").remove();
                          }, 220);
                      }
                    } else
                      16577 == t.storeId &&
                      "" == i &&
                      e(s).hasClass("card__media-full-spacer") &&
                      e(s).closest(".card--product").length
                        ? (e(s).closest(".card--product").after(a), (r = !0))
                        : 18632 == t.storeId
                        ? ("products" == i &&
                            e(s).hasClass("product-slide") &&
                            !e(s).find(".bss_pb_img").length &&
                            (e(s).append(a), (r = !0)),
                          "products" == i &&
                            e(s).hasClass("product-info-inner") &&
                            !e(s).parent().find(".bss_pb_img").length &&
                            (e(s).before(a), (r = !0)))
                        : 13709 == t.storeId &&
                          (("/search" != window.location.pathname &&
                            "collections" != i &&
                            "" != i &&
                            "products" != i) ||
                            !e(s).closest(".ProductItem__Info").length ||
                            e(s)
                              .closest(".ProductItem__Info")
                              .parent()
                              .find(".bss_pb_img").length ||
                            (e(s).closest(".ProductItem__Info").before(a),
                            (r = !0)),
                          "products" == i &&
                            e(s).parent().hasClass("Product__SlideItem") &&
                            (e(s).parent().append(a), (r = !0)));
                  else e(s).parent().after(a), (r = !0);
                  if (
                    Shopify &&
                    Shopify.theme &&
                    Shopify.theme.name &&
                    -1 !== Shopify.theme.name.indexOf("Dawn")
                  )
                    if (e(s).hasClass("product__media")) {
                      let t = e(s).closest(".product__modal-opener");
                      t.length &&
                        !t.parent().find(".bss_pb_img").length &&
                        (t.after(a), (r = !0));
                    } else if (e(s).hasClass("card-information__text")) {
                      let t = e(s)
                        .closest(".card-wrapper")
                        .find(".card--product");
                      t.length &&
                        !t.parent().find(".bss_pb_img").length &&
                        (t.after(a), (r = !0));
                      let i = e(s)
                        .closest(".collage-content")
                        .find(".collage-card__image-wrapper");
                      i.length &&
                        !i.parent().find(".bss_pb_img").length &&
                        (i.after(a), (r = !0));
                    } else if (e(s).hasClass("product__info-container")) {
                      let t = e(s)
                        .closest(".featured-product")
                        .find(".product__info-wrapper");
                      t.length &&
                        !t.parent().find(".bss_pb_img").length &&
                        (t.after(a), (r = !0));
                    }
                  return r;
                })(e, t, n, l, h))),
                d &&
                  setTimeout(function () {
                    let t = e(n)
                      .parent()
                      .find(".bss_pb_img img.bss-pb-frontend")
                      .first()
                      .height();
                    t = parseInt(t) + parseInt(c);
                    let s = e(n).find(".bss_pb_img").first();
                    s.length || (s = e(n).next(".bss_pb_img")),
                      e(s).height(t + "px");
                  }, 300);
            }),
            !d) &&
            !e(n).hasClass("swatchProductColor") &&
            !e(n).hasClass("hero-content") &&
            (e.each(i, function (i, o) {
              var l = "",
                n = p(e, t, s, a, r, o);
              let c = e(o).attr("class");
              (l +=
                '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                t.getMaxValueMarginBottom(s) +
                'px;">'),
                (l += n.join("")),
                (l += "</div>"),
                c && c.includes("image")
                  ? (e(o).after(l), (d = !0))
                  : c && c.includes("name")
                  ? (e(o).before(l), (d = !0))
                  : c && c.includes("price") && (e(o).before(l), (d = !0));
            }),
            !d)
          ) {
            let i = "",
              o = p(e, t, s, a, r, n),
              d = t.getMaxValueMarginBottom(s);
            if (o.length)
              if (
                ((i +=
                  '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                  d +
                  'px;">'),
                (i += o.join("")),
                (i += "</div>"),
                9006 == t.storeId && "products" == l)
              ) {
                if ("MasterImage" == e(n).attr("data-pf-type")) return;
                if ("Column" == e(n).attr("data-pf-type")) return;
              } else if (16487 == t.storeId && "products" == l) {
                if (
                  e(n).hasClass("product-item") &&
                  e(n).parent().hasClass("flickity-slider")
                )
                  return;
              } else e(n).next(".bss_pb_img").length || e(n).after(i);
          }
          e("div[data-thumbnail-slider]").length &&
            e(".product-single__media-wrapper .bss_pb_img").length &&
            e(".product-single__media-wrapper .bss_pb_img").remove(),
            Shopify &&
              Shopify.theme &&
              Shopify.theme.name &&
              "Dawn" == Shopify.theme.name &&
              "products" == l &&
              e(
                ".product__modal-opener.product__modal-opener--image .bss_pb_img"
              ).length &&
              e(
                ".product__modal-opener.product__modal-opener--image .bss_pb_img"
              ).remove();
        }),
        (e.initForBadgePriceOnPageFly = function (e, t, s, i, a, r, o, l, n) {
          let d = !1;
          e.each(i, function (i, n) {
            let c = t.getMaxValueMarginTop(s),
              h = "",
              _ = p(e, t, s, a, r, n),
              f = t.getMaxValueMarginBottom(s);
            if (_.length && !o)
              if (
                ((h +=
                  '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                  f +
                  'px;">'),
                (h += _.join("")),
                (h += "</div>"),
                "collections" == l)
              ) {
                let t = e(n)
                  .closest('[data-pf-type="ProductBox"]')
                  .find('[data-product-type="price"]')
                  .first();
                if (t.length) {
                  let s = t.closest('[data-pf-type="Row"]');
                  s.length &&
                    (s.next(".bss_pb_img").length ||
                      (s.after(h),
                      (d = !0),
                      setTimeout(function () {
                        let t = e(s)
                          .parent()
                          .find(".bss_pb_img img")
                          .first()
                          .height();
                        t = parseInt(t) + parseInt(c);
                        let i = e(s).parent().find(".bss_pb_img");
                        e(i).height(t + "px");
                      }, 300)));
                }
              } else if (5196 == t.storeId);
              else {
                let t = e(n)
                  .closest('[data-pf-type="ProductBox"]')
                  .find('[data-product-type="price"]')
                  .first();
                if (t.length) {
                  let s = t.parent();
                  s.length &&
                    (s.next(".bss_pb_img").length ||
                      (s.after(h),
                      (d = !0),
                      setTimeout(function () {
                        let t = e(s)
                          .parent()
                          .find(".bss_pb_img img")
                          .first()
                          .height();
                        t = parseInt(t) + parseInt(c);
                        let i = e(s).parent().find(".bss_pb_img");
                        e(i).height(t + "px");
                      }, 300)));
                }
              }
          });
        }),
        (e.initForBadgeProductImageOnPageFly = function (
          e,
          t,
          s,
          i,
          a,
          r,
          o,
          l,
          n
        ) {
          let d = !1;
          e.each(i, function (i, o) {
            let l = t.getMaxValueMarginTop(s),
              n = "",
              c = p(e, t, s, a, r, o),
              h = t.getMaxValueMarginBottom(s);
            c.length &&
              ((n +=
                '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                h +
                'px;">'),
              (n += c.join("")),
              (n += "</div>"),
              e(o).next(".bss_pb_img").length || e(o).after(n),
              (d = !0)),
              d &&
                setTimeout(function () {
                  let t = e(o)
                    .parent()
                    .find(".bss_pb_img img.bss-pb-frontend")
                    .first()
                    .height();
                  t = parseInt(t) + parseInt(l);
                  let s = e(o).find(".bss_pb_img").first();
                  s.length || (s = e(o).next(".bss_pb_img")),
                    e(s).height(t + "px");
                }, 300);
          });
        }),
        (e.initForBadgeProductNameOnPageFly = function (
          e,
          t,
          s,
          i,
          a,
          r,
          o,
          l,
          n
        ) {
          let d = !1;
          e.each(i, function (i, n) {
            let c = t.getMaxValueMarginTop(s),
              h = t.getMaxValueMarginBottom(s),
              _ = "",
              f = p(e, t, s, a, r, n);
            f.length &&
              !o &&
              ((_ +=
                '<div class="bss_pb_img" style="display: block !important; margin-bottom: ' +
                h +
                'px;">'),
              (_ += f.join("")),
              (_ += "</div>"));
            let g = "";
            (g =
              9006 == t.storeId && "products" == l
                ? e(n).siblings('[data-product-type="title"]')
                : e(n)
                    .closest('[data-pf-type="ProductBox"]')
                    .find('[data-product-type="title"]')),
              g.length &&
                (g.next(".bss_pb_img").length ||
                  (g.after(_),
                  (d = !0),
                  setTimeout(function () {
                    let t = e(g)
                      .parent()
                      .find(".bss_pb_img img")
                      .first()
                      .height();
                    t = parseInt(t) + parseInt(c);
                    let s = e(g).parent().find(".bss_pb_img");
                    e(s).height(t + "px");
                  }, 300)));
          });
        });
    }
    function h(e, t) {
      (e.getProductInfoForPageFly = function (e, s, i, a) {
        var r = s.configData;
        s.currentPlan && "free" !== s.currentPlan && (r = r.filter(t));
        var o = r.filter((e) => 1 == e.label_type || null == e.label_type),
          l = r.filter((e) => 2 == e.label_type && 0 == e.badge_type),
          n = r.filter((e) => 2 == e.label_type && 1 == e.badge_type),
          d = r.filter((e) => 2 == e.label_type && 2 == e.badge_type),
          c = r.filter((e) => 2 == e.label_type && 3 == e.badge_type);
        var h = {
          baseImgUrl: bssPlApiServer + "/images/" + s.storeId + "/240/",
        };
        e.get(i, function (t) {
          var i = [];
          try {
            i = JSON.parse(t);
          } catch (e) {
            console.log("product label: JSON parse returns no item");
          }
          i.length &&
            i.map(function (t) {
              h.collects = t.collections;
              var i = t.id,
                r = e(
                  '[data-product-id="' +
                    i +
                    '"][data-pf-type="ProductImage2"], [data-product-id="' +
                    i +
                    '"][data-pf-type="ProductImage"] [data-pf-type="MasterImage"],[data-product-id="' +
                    i +
                    '"][data-pf-type="ProductMedia"] [data-media-type="image"]'
                ),
                _ = r[0],
                f = !1;
              o.length &&
                (function (i) {
                  let o = !1;
                  e.each(r, function (r, l) {
                    if (!e(l).find(".bss_pl_img").length) {
                      var n = "",
                        d = p(e, s, i, t, h, l);
                      if (d.length && !f)
                        if (
                          ((n +=
                            '<div class="bss_pl_img" style="display: block !important;">'),
                          (n += d.join("")),
                          (n += "</div>"),
                          2583 == s.storeId)
                        ) {
                          let t = e(l).find("[data-pf-type='MasterImage']");
                          t.length && (t.prepend(n), (o = !0));
                        } else if (3887 == s.storeId && "" == a) {
                          let t = e(l).find("[data-pf-type='MasterImage']");
                          t.length && (t.prepend(n), (o = !0));
                        } else if (5662 == s.storeId) {
                          if ("" == a && e(l).hasClass("splide__slide")) {
                            let t = e(l).closest(".splide__track");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(n), (o = !0));
                          }
                        } else if (9006 == s.storeId) {
                          let t = e(l).find("[data-pf-type='MasterImage']");
                          t.length && (t.prepend(n), (o = !0));
                        } else if (10795 == s.storeId) {
                          let t = e(l).find("[data-pf-type='MasterImage']");
                          t.length && (t.prepend(n), (o = !0));
                        } else if (16146 == s.storeId) {
                          if (
                            ("products" == a ||
                              "/" == window.location.pathname) &&
                            e(l).attr("data-pf-type", "MasterImage")
                          ) {
                            let t = e(l).find(".zoom-image"),
                              s = e(l).closest("[data-pf-type='ProductImage']");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(n), (o = !0)),
                              s.length &&
                                !s.find(".bss_pl_img").length &&
                                (s.prepend(n), (o = !0));
                          }
                        } else if (9946 == s.storeId) {
                          if (e(l).attr("data-pf-type", "MasterImage")) {
                            let t = e(l).find(".zoom-image"),
                              s = e(l).closest("[data-pf-type='ProductImage']");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(n), (o = !0)),
                              s.length &&
                                !s.find(".bss_pl_img").length &&
                                (s.prepend(n), (o = !0));
                          }
                        } else if (19006 == s.storeId)
                          ("products" != a && "collections" != a) ||
                            !e(l).attr("data-pf-type", "MasterImage") ||
                            (e(l).parent().append(n), (o = !0));
                        else if (7027 == s.storeId) "products" == a && (o = !0);
                        else if (3341 == s.storeId)
                          e(l).attr("data-media-type", "image") &&
                            e(l).append(n),
                            (o = !0);
                        else if (13399 == s.storeId) {
                          if (
                            (e(l).hasClass("splide__slide") &&
                              !e(l).parent().find(".bss_pl_img").length &&
                              (e(l).prepend(n), (o = !0)),
                            "/" == window.location.pathname &&
                              e(l).hasClass("sc-cGKJhA"))
                          ) {
                            let t = e(l).closest(".sc-fyjqAk");
                            t.length && (t.prepend(n), (o = !0));
                          }
                          "/pages/varaasa-save-your-hair-combo" ==
                            window.location.pathname &&
                            e(l).hasClass("sc-cGKJhA") &&
                            !e(l).parent().find(".bss_pl_img").length &&
                            (e(l).after(n), (o = !0));
                        } else e(l).prepend(n), (o = !0);
                    }
                  });
                })(o),
                n.length &&
                  s.initForBadgeProductImageOnPageFly(
                    e,
                    s,
                    n,
                    r,
                    t,
                    h,
                    f,
                    a,
                    _
                  ),
                d.length &&
                  s.initForBadgeCustomSelector(e, s, d, r, t, h, f, a, _),
                c.length &&
                  s.initForBadgePriceOnPageFly(e, s, c, r, t, h, f, a, _),
                l.length &&
                  s.initForBadgeProductNameOnPageFly(e, s, l, r, t, h, f, a, _),
                (() => {
                  if (e(".bss_pb_img").length) {
                    let t = e(".bss_pb_img");
                    e.each(t, function (t, s) {
                      "relative" !== e(s).css("position") &&
                        e(s).css("position", "relative"),
                        "25px" !== e(s).css("min-height") &&
                          e(s).css("min-height", "25px"),
                        setTimeout(function () {
                          let t = 0;
                          (e(s).find("img.bss-pb-frontend").length ||
                            e(s).find(".bss_pl_label_text").length) &&
                            e.each(e(s).children(), function (i, a) {
                              let r = e(a);
                              t = r.height();
                              let o = r.css("margin-top");
                              (t = parseInt(t) + parseInt(o)),
                                parseInt(e(s).height()) < t &&
                                  e(s).height(t + "px");
                            });
                        }, 700);
                    });
                  }
                })();
            });
        });
      }),
        (e.addLabelForPageFly = function (e, t) {
          var s = [],
            i = e("[data-product-id]"),
            a = window.location.pathname.split("/");
          a.pop(-1);
          var r = a.pop(-2);
          i.attr("bss-pl-product-active", !0),
            e.each(i, function (t, i) {
              let a = e(i).attr("data-product-id");
              -1 !== a.indexOf("product-") && (a = a.replace("product-", "")),
                a &&
                  "" != a &&
                  -1 === s.indexOf('id:"' + a + '"') &&
                  s.push('id:"' + a + '"');
            });
          var o = "/search.js?q=" + s.join(" OR ") + "&view=bss.product.labels",
            l = encodeURI(o);
          t.getProductInfoForPageFly(e, t, l, r);
        });
    }
    function _(e, t, s, i, a) {
      var r,
        o = BSS_PL.configData;
      o.sort(
        ((r = "priority"),
        function (e, t) {
          return e[r] > t[r] ? 1 : e[r] < t[r] ? -1 : 0;
        })
      ),
        BSS_PL.currentPlan &&
          "free" !== BSS_PL.currentPlan &&
          (o = o.filter(a));
      var l = o.filter((e) => 1 == e.label_type || null == e.label_type),
        n = o.filter((e) => 2 == e.label_type && 0 == e.badge_type),
        d = o.filter((e) => 2 == e.label_type && 1 == e.badge_type),
        c = o.filter((e) => 2 == e.label_type && 2 == e.badge_type),
        h = o.filter((e) => 2 == e.label_type && 3 == e.badge_type);
      var _ = {
          baseImgUrl: bssPlApiServer + "/images/" + BSS_PL.storeId + "/240/",
        },
        f = "";
      e.get(t, function (t) {
        var a = [];
        try {
          a = (a = JSON.parse(t)).filter(
            (e) => null !== e.price && null !== e.available
          );
        } catch (e) {
          console.log("product label: JSON parse returns no item");
        }
        if (a.length) {
          if ("products" == s) {
            var r = e(
              'img[srcset*="/products/"][srcset*="/cdn.shopify.com/s/files/"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"],img[srcset*="/products/"][srcset*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".jp"],img[srcset*="/products/"][srcset*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".JP"],img[srcset*="/products/"][srcset*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".png"],img[srcset*="/products/"][srcset*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".PNG"],img[data-src*="/products/"][data-src*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".jp"],img[data-src*="/products/"][data-src*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".JP"],img[data-src*="/products/"][data-src*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".png"],img[data-src*="/products/"][data-src*="/cdn.shopify.com/s/files/"][src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".PNG"],.swiper-lazy[src*="/products/"][src*="/cdn.shopify.com/s/files/"],.engoj_img_main[src*="/products/"][src*="/cdn.shopify.com/s/files/"],.single_product__img img[src*="/cdn.shopify.com/s/files/"],[data-pf-type="MasterImage"] img[src*="/cdn.shopify.com/s/files/"],.c-slide-product__wrap-image.slick-slide .c-slide-product__image[src*="/cdn.shopify.com/s/files/"],#ProductPhotoImg[src*="/cdn.shopify.com/s/files/"],.zoom-product[data-zoom-image][src*="/cdn.shopify.com/s/files/"],.fotorama__img[src*="/cdn.shopify.com/s/files/"],.product-big-image img[src*="/cdn.shopify.com/s/files/"],#bigimage img.mainimage[src*="/cdn.shopify.com/s/files/"],#mob-product-images .mthumb img[src*="/cdn.shopify.com/s/files/"],img.FeaturedImage-product-template.product-featured-img[src*="/cdn.shopify.com/s/files/"],.position-relative div[data-zoom-images*="/cdn.shopify.com/s/files/"],img.image-zoom[src*="/cdn.shopify.com/s/files/"],.slick-slide.slick-current.slick-active img[src*="/cdn.shopify.com/s/files/"],.detail-content-inner .detail-content .info-detail-pro #product-image img[src*="/cdn.shopify.com/s/files/"],.product-single__photos .slideshow__image[data-bgset*="/cdn.shopify.com/s/files/"],.op_0.dn[src*="data:image/gif;base64"],img.Image--fadeIn.lazyautosizes.Image--lazyLoaded[data-original-src*="/cdn.shopify.com/s/files/"],img.Image--lazyLoad.Image--fadeIn[data-original-src*="/cdn.shopify.com/s/files/"],img[data-zoom-src*="/cdn.shopify.com/s/files/"][src*="/cdn.shopify.com/s/files/"],img.lazyautosizes.lazyloaded[data-srcset*="/cdn.shopify.com/s/files/"],.product-photo-container img#product-featured-image[src*="/cdn.shopify.com/s/files/"],img.zoom-product[src*="/cdn.shopify.com/s/files/"],img[itemprop*="image"][src*="/cdn.shopify.com/s/files/"],img.zoomImg[src*="/cdn.shopify.com/s/files/"],.product-image .product-single__media.product-single__media--image[data-bgset*="/cdn.shopify.com/s/files/"],.product-layout-images .product-image--single[data-bgset*="/cdn.shopify.com/s/files/"],.product-swiper-img-height.swiper-slide-active[style*="background-image"],.product-layout-images .product-image[data-bgset*="/cdn.shopify.com/s/files/"],.gt_product-img-box img.gt_product-image--feature[src*="//cdn.shopify.com/s/files/"],.zoomContainer div.zoomWindow[style*="background-image"],img.gf_product-image-thumb[src*="//cdn.shopify.com/s/files/"], .main-product-image img[src*="//cdn.shopify.com/s/files/"], .product-image-wrapper img[src*="//cdn.shopify.com/s/files/"], .product-single__photo-wrapper img.product-single__photo, .owl-item img.lazyautosizes.lazyloaded[src*="//cdn.shopify.com/s/files/"],img.gt_product-image--feature.gt_lazyload.gt_lazyloaded[src*="//cdn.shopify.com/s/files/"],img.lazyload--mirage.lazyautosizes.lazyloaded[data-srcset*="/cdn.shopify.com/s/files/"][data-sizes="auto"],img.gt_active.gt_lazyload[src*="//cdn.shopify.com/s/files/"],img.rimage__image.fade-in.lazyautosizes[data-srcset*="/cdn.shopify.com/s/files/"],.product-photo-container img[src*="//cdn.shopify.com/s/files/"],.product__image.lazyload.lazyload-fade img[data-src*="/cdn.shopify.com/s/files/"],.product_slider img.featured_image[src*="//cdn.shopify.com/s/files/"],.flickity-viewport .flickity-slider .img_ptw,.product__image[style*="//cdn.shopify.com/s/files/"],div.product-single__photo.js-zoom-enabled, div.swiper-slide img.product-featured-media[srcset*="//cdn.shopify.com/s/files/"],img.rondell-item-image.rondell-item-resizeable[src*="//cdn.shopify.com/s/files/"],.paira-single-product-image img.fotorama__img,.flickity-viewport img[src*="//cdn.shopify.com/s/files/"],.image-wrap img.photoswipe__image[srcset*="//cdn.shopify.com/s/files/"],img.bss-custom-img-product-page[src*="//cdn.shopify.com/s/files/"],img.rimage__image.fade-in.lazyautosizes[data-srcset*="//cdn.shopify.com/s/files/"],.owl-wrapper-outer .image--container img.lazyautosizes.lazyloaded[data-srcset*="//cdn.shopify.com/s/files/"],.product-gallery__main_item .rimage img.rimage__img.donothide.entered.loaded.ls-is-cached.lazyloaded[data-master*="//cdn.shopify.com/s/files/"],img.rimage__img[data-master*="//cdn.shopify.com/s/files/"],img[src*="//cdn.accentuate.io"]:not(.kusaba_product-slider-thumbnail__img),.image__container img.lazyload--fade-in[data-src*="/cdn.shopify.com/s/files/"]'
            );
            11370 == BSS_PL.storeId &&
              (r = e(
                ".product-gallery--image-background img.product-gallery--loaded-image"
              )),
              r.map(function (t, s) {
                if (
                  (e(s).closest(".site-header").length ||
                    e(s).closest("header").length ||
                    (e(s).closest('[data-section-id="header"]').length &&
                      11867 != BSS_PL.storeId)) &&
                  17336 !== BSS_PL.storeId
                );
                else if (
                  e(s).is(".secondary-media.lazyautosizes.lazyloaded") ||
                  e(s).closest(".collection-products").length
                );
                else if (
                  !e(s).is(".js.lazyautosizes.lazyloaded") ||
                  (5254 != BSS_PL.storeId && 1881 != BSS_PL.storeId)
                )
                  if (
                    e(s).is(".logo__image.lazyautosizes.lazyloaded") &&
                    1427 == BSS_PL.storeId
                  );
                  else if (
                    e(s).is(".lazyautosizes.lazyloaded") &&
                    4526 == BSS_PL.storeId
                  );
                  else if (
                    1866 == BSS_PL.storeId &&
                    e(s).parent().parent().hasClass("proHImage")
                  );
                  else if (
                    6673 == BSS_PL.storeId &&
                    "PICTURE" == e(s).parent().prop("tagName")
                  );
                  else if (
                    6101 == BSS_PL.storeId &&
                    e(s).parent().hasClass("image-element__wrap")
                  );
                  else if (
                    16961 == BSS_PL.storeId &&
                    e(s).parent().hasClass("product__thumb")
                  );
                  else if (
                    13635 == BSS_PL.storeId &&
                    e(s).closest(".product-gallery--navigation").length
                  );
                  else if (
                    14921 == BSS_PL.storeId &&
                    e(s).parent().hasClass("product-item")
                  ) {
                    let t = e(s).closest(".product-item").attr("data-handle");
                    e(s).parent().attr("data-handle", t),
                      "" == f && (f = e(s).parent());
                  } else if (
                    10234 == BSS_PL.storeId &&
                    e(s).parent().hasClass("recomatic-responsive-image")
                  ) {
                    let t = e(s)
                      .closest(".recomatic-product-wrap")
                      .attr("data-handle");
                    e(s).parent().attr("data-handle", t),
                      "" == f && (f = e(s).parent());
                  } else if (
                    13098 == BSS_PL.storeId &&
                    e(s).parent().hasClass("reveal")
                  );
                  else if (
                    9163 == BSS_PL.storeId &&
                    e(s).parent().hasClass("image-element__wrap")
                  );
                  else if (15800 == BSS_PL.storeId) {
                    e(s)
                      .closest(".product__main-photos-wrapper")
                      .find(".image-wrap")
                      .attr("data-handle", i),
                      "" == f && (f = e(s).parent());
                  } else if (11965 == BSS_PL.storeId) {
                    if (e(s).parent().hasClass("sc-cGKJhA")) {
                      let t = e(s).parent().attr("data-href").split("/"),
                        i = t[t.length - 1];
                      e(s).parent().attr("data-handle", i),
                        "" == f && (f = e(s).parent());
                    }
                    if (
                      e(s).parent().hasClass("sc-dSnXvR") &&
                      e(s).parent().hasClass("dzBcKB")
                    ) {
                      let t = e(s)
                          .closest(".sc-JsfZP")
                          .children(".sc-cGKJhA")
                          .attr("data-href")
                          .split("/"),
                        i = t[t.length - 1];
                      e(s).parent().attr("data-handle", i),
                        "" == f && (f = e(s).parent());
                    }
                  } else if (
                    14187 == BSS_PL.storeId &&
                    e(s).parent().hasClass("slick-item")
                  );
                  else if (
                    14064 == BSS_PL.storeId &&
                    e(s).parent().hasClass("Product__SlideshowNavImage")
                  );
                  else if (11305 == BSS_PL.storeId) {
                    e(s)
                      .closest(".product__main-photos")
                      .find(".image-wrap")
                      .attr("data-handle", i),
                      "" == f && (f = e(s).parent());
                  } else
                    (e(s).is(".product--image.lazyloaded.lazyautosizes") &&
                      4062 == BSS_PL.storeId) ||
                      (e(s).parent().attr("data-handle", i),
                      "" == f && (f = e(s).parent()));
                else;
              });
          }
          a.map(function (t) {
            _.collects = t.collections;
            var i = t.handle;
            if (
              (encodeURI(i) != i && (i = encodeURI(i)),
              i.includes("%CC%87") &&
                1551 == BSS_PL.storeId &&
                (i = decodeURI(i)),
              "" == s && 3543 == BSS_PL.storeId && (i = decodeURI(i)),
              (3846 == BSS_PL.storeId ||
                7832 == BSS_PL.storeId ||
                (16183 == BSS_PL.storeId && "products" != s)) &&
                (i = decodeURI(i)),
              9005 == BSS_PL.storeId &&
                "products" != s &&
                "collections" != s &&
                (i = decodeURI(i)),
              6867 == BSS_PL.storeId && isCollectionPage && (i = decodeURI(i)),
              7961 == BSS_PL.storeId && isCollectionPage && (i = decodeURI(i)),
              10495 == BSS_PL.storeId && "products" != s && (i = decodeURI(i)),
              11446 == BSS_PL.storeId &&
                "products" != s &&
                "" != s &&
                (i = decodeURI(i)),
              4966 == BSS_PL.storeId && "products" != s && (i = decodeURI(i)),
              7440 == BSS_PL.storeId && "products" == s && (i = decodeURI(i)),
              13325 != BSS_PL.storeId ||
                ("/search" != window.location.pathname &&
                  "collections" != s &&
                  !window.location.pathname.includes("/pages/")) ||
                (i = decodeURI(i)),
              9518 != BSS_PL.storeId ||
                ("collections" != s && "/search" != window.location.pathname) ||
                (i = decodeURI(i)),
              12969 == BSS_PL.storeId &&
                "/pages/search-results-page" == window.location.pathname &&
                (i = decodeURI(i)),
              7901 == BSS_PL.storeId &&
                "collections" == s &&
                (i = decodeURI(i)),
              16146 == BSS_PL.storeId && "products" != s && (i = decodeURI(i)),
              16705 == BSS_PL.storeId &&
                "/search" == window.location.pathname &&
                (i = decodeURI(i)),
              19204 != BSS_PL.storeId ||
                ("/search" != window.location.pathname && "collections" != s) ||
                (i = decodeURI(i)),
              "" == s && 17768 == BSS_PL.storeId)
            ) {
              let s = t.id;
              e(`div[id*="ProductSection-${s}"]`).map(function (t, s) {
                e(s).find(".product-block--header").attr("data-handle", i);
              });
            }
            var a = e(
                '[data-handle="' +
                  i +
                  '"]:not(".meganav__product"):not([class$="autoketing"])'
              ),
              r = a[0],
              o = !1;
            l.length &&
              (function (i) {
                let l = !1,
                  n = new Map();
                e.each(a, function (a, r) {
                  if (!e(r).find(".bss_pl_img").length) {
                    var d = "",
                      c = p(e, BSS_PL, i, t, _, r, n);
                    t.margin_bottom && t.margin_bottom;
                    c.length &&
                      !o &&
                      ((d +=
                        '<div class="bss_pl_img" style="display: block !important;">'),
                      (d += c.join("")),
                      (d += "</div>"),
                      (l = (function (e, t, s, i, a) {
                        let r = !1;
                        if (
                          e(s).hasClass("slick-item") &&
                          "products" == i &&
                          2512 == t.storeId
                        )
                          r = !0;
                        else if (
                          !e(s).parent("figure").length ||
                          "products" != i ||
                          (1808 != t.storeId && 2435 != t.storeId)
                        )
                          if (
                            e(s).hasClass("medium-up--one-fifth") &&
                            "products" != i
                          )
                            e(s).find(".product-card__image.js").length &&
                              (e(s).find(".product-card__image.js").prepend(a),
                              (r = !0));
                          else if (
                            e(s).hasClass("productimage") &&
                            "products" == i &&
                            3508 == t.storeId
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            e(s).find(".product_img-wrapper").length &&
                            3508 == t.storeId
                          )
                            e(s).find(".product_img-wrapper").prepend(a),
                              (r = !0);
                          else if (
                            e(s).hasClass("res-image") &&
                            3508 == t.storeId
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            e(s).closest(".slick-slide.slick-current").length &&
                            3508 == t.storeId
                          )
                            e(s)
                              .closest(".prd-block")
                              .find(".main-image--slide")
                              .prepend(a),
                              (r = !0);
                          else if (
                            7422 == t.storeId &&
                            e(s).hasClass("productForm-submit")
                          ) {
                            let t = e(s)
                              .closest(".featured-product__wrapper")
                              .find(".flickity-viewport");
                            t.length > 0 && (t.prepend(a), (r = !0));
                          } else if (4837 == t.storeId)
                            e(s).hasClass("pt-image-box")
                              ? (e(s).prepend(a), (r = !0))
                              : e(s)
                                  .parent()
                                  .hasClass("pt-product-single-img") &&
                                (e(s).prepend(a), (r = !0));
                          else if (
                            4237 == t.storeId &&
                            e(s).hasClass("product-media--image")
                          ) {
                            (x = e(s).find(".rimage-wrapper")).length &&
                              (x.prepend(a), (r = !0));
                          } else if (787 == t.storeId) {
                            if (e(s).parent().hasClass("es-content")) {
                              let t = e(s)
                                .closest(".es-product-card")
                                .find(".es-image");
                              t.length > 0 && (t.prepend(a), (r = !0));
                            }
                            e(s).parent().hasClass("product-list-item") &&
                              (e(s).prepend(a), (r = !0)),
                              e(s).hasClass("product-thumbnails") &&
                                "products" == i &&
                                e(s)
                                  .find(
                                    'img[src*="//cdn.shopify.com/s/files/"]'
                                  )
                                  .on("click", function () {
                                    setTimeout(() => {
                                      e(this)
                                        .closest(".product-images")
                                        .find(".product-image-wrapper")
                                        .length &&
                                        (e(this)
                                          .closest(".product-images")
                                          .find(".product-image-wrapper")
                                          .prepend(a),
                                        (r = !0));
                                    }, 400);
                                  });
                          } else if (
                            e(s).hasClass("photo-zoom-link") &&
                            "products" == i &&
                            3596 == t.storeId
                          )
                            e(s).closest(".product-image-main").prepend(a),
                              (r = !0);
                          else if (
                            3732 == t.storeId &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            "products" == i
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            10751 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("image__container")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            3732 == t.storeId &&
                            e(s).hasClass("ProductItem__Wrapper")
                          ) {
                            let t = e(s).find(".AspectRatio");
                            t.length > 0 && (t.prepend(a), (r = !0));
                          } else if (
                            16765 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("product-media")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            19173 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("product-single__image-wrapper")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            15474 == t.storeId &&
                            "products" == i &&
                            (e(s).hasClass("flickity-slider") ||
                              e(s).hasClass("product-image"))
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            1341 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("image-wrap")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (6225 == t.storeId) {
                            if (e(s).hasClass("product-image")) {
                              let t = e(s).closest(".product-top");
                              t.length > 0 && (t.prepend(a), (r = !0));
                            }
                          } else if (
                            9873 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (17637 == t.storeId && "products" == i)
                            e(s).hasClass("product-single__media__image") &&
                              (e(s).prepend(a),
                              (r = !0),
                              e(".product-single__thumbnail__wrapper").on(
                                "click",
                                function () {
                                  setTimeout(() => {
                                    let t = e(this)
                                      .closest(".shopify-section")
                                      .find(".product-single__media__image");
                                    t.length > 0 &&
                                      !e(t[t.length - 1]).find(".bss_pl_img")
                                        .length &&
                                      (e(t[t.length - 1]).prepend(a), (r = !0));
                                  }, 200);
                                }
                              ));
                          else if (13399 == t.storeId)
                            "collections" == i && e(s).hasClass("product_image")
                              ? (e(s).prepend(a), (r = !0))
                              : "/pages/varaasa-collection-sale-b" ==
                                  window.location.pathname &&
                                e(s).hasClass("sc-bqiRlB") &&
                                (e(s)
                                  .closest(".sc-jJoQJp")
                                  .find(".sc-jJoQJp")
                                  .prepend(a),
                                (r = !0));
                          else if (1381 == t.storeId)
                            "collections" == i &&
                              e(s).hasClass("ssw-carousel-review__image") &&
                              (e(s).prepend(a), (r = !0)),
                              "products" == i &&
                                e(s).hasClass("product-image") &&
                                (e(s).prepend(a), (r = !0));
                          else if (11088 == t.storeId && "products" == i)
                            e(s).hasClass("rimage-wrapper") &&
                              (e(s).prepend(a), (r = !0)),
                              e(s).hasClass("inner") &&
                                (e(s).prepend(a), (r = !0));
                          else if (
                            6296 != t.storeId ||
                            ("collections" != i &&
                              "/search" != window.location.pathname) ||
                            !e(s).hasClass("spf-product-card__inner")
                          )
                            if (6296 == t.storeId && "products" == i)
                              e(s).parent().prepend(a), (r = !0);
                            else if (
                              3887 == t.storeId &&
                              e(s).hasClass("product-single__media-wrapper")
                            ) {
                              let t = e(s)
                                .closest(".product-single__media-group")
                                .find(".product-single__media-wrapper");
                              t.length > 0 && (t.prepend(a), (r = !0));
                            } else if (
                              19449 == t.storeId &&
                              "products" == i &&
                              e(s).hasClass("image-wrap")
                            )
                              e(s).parent().prepend(a), (r = !0);
                            else if (
                              13559 == t.storeId &&
                              "collections" == i &&
                              e(s).hasClass("product__image")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (
                              19278 != t.storeId ||
                              ("collections" != i && "" != i) ||
                              !e(s).hasClass("card-information__text")
                            )
                              if (16288 == t.storeId) {
                                if (
                                  "products" == i &&
                                  e(s).hasClass("AspectRatio--withFallback")
                                ) {
                                  let t = e(s)
                                    .closest(".flickity-viewport")
                                    .find(".Product__SlideItem");
                                  t.length > 0 &&
                                    !t.find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                                if (
                                  "/" == window.location.pathname &&
                                  e(s).hasClass("ProductItem__Wrapper")
                                ) {
                                  let t = e(s).closest(
                                    ".ShopTheLook__ProductItem"
                                  );
                                  t.length > 0
                                    ? (t.prepend(a), (r = !0))
                                    : (e(s).prepend(a), (r = !0));
                                }
                              } else if (12217 == t.storeId)
                                ("collections" != i && "" != i) ||
                                  !e(s).hasClass("product__image") ||
                                  (e(s).prepend(a), (r = !0)),
                                  setTimeout(() => {
                                    if (
                                      0 ==
                                      e(s).find(
                                        'img[alt="Anti-Radiation Kids"]'
                                      ).length
                                    ) {
                                      var t = e(s)
                                        .find(".bss_pl_img img")
                                        .not(":nth-child(1)");
                                      t.length && e(t).remove();
                                    } else {
                                      e(s).find('img[alt="Anti-Radiation"]')
                                        .length &&
                                        e(s).find('img[alt="New"]').remove();
                                    }
                                  }, 220);
                              else if (10117 == t.storeId)
                                e(s).hasClass("product_image") &&
                                  (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("zoom-container") &&
                                    e(s).closest(".flickity-slider").length &&
                                    (e(s)
                                      .closest(".flickity-slider")
                                      .prepend(a),
                                    (r = !0));
                              else if (5483 == t.storeId && "products" == i) {
                                if (e(s).hasClass("image-wrap")) {
                                  let t = e(s)
                                    .closest(".slick-track")
                                    .find(".image-wrap");
                                  t.length &&
                                    !e(t).find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                              } else if (17330 == t.storeId) {
                                if (
                                  "products" == i &&
                                  e(s).hasClass("image-slide-link")
                                ) {
                                  let t = e(s)
                                    .closest(".slides")
                                    .find(".image-slide-link");
                                  t.length &&
                                    !e(t).find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                              } else if (3524 == t.storeId)
                                "products" == i &&
                                  e(s).hasClass("variant-image") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (13273 == t.storeId && "products" == i)
                                e(s).hasClass("product__photo") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                17005 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("shopify-product-gallery__image")
                              ) {
                                let t = e(s)
                                  .closest(".single-product-thumbnail")
                                  .find(".shopify-product-gallery__image");
                                t.length &&
                                  !e(t).find(".bss_pl_img").length &&
                                  (t.prepend(a), (r = !0));
                              } else if (
                                16575 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("product-single__photo__item")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                17520 == t.storeId &&
                                e(s).hasClass("card-information__text")
                              ) {
                                let t = e(s)
                                  .closest(".grid__item")
                                  .find(".card__inner");
                                t.length &&
                                  !e(t).find(".bss_pl_img").length &&
                                  (t.prepend(a), (r = !0));
                              } else if (6706 == t.storeId) {
                                let t = [];
                                e(s).hasClass("recommended-products-items") &&
                                  e(s).find(".recommended-product").length >
                                    0 &&
                                  t.push(e(s).find(".recommended-product")),
                                  e(s).hasClass(
                                    "product-gallery--media-wrapper"
                                  ) &&
                                    e(s)
                                      .closest(".product-gallery")
                                      .find(".product-gallery--figure").length >
                                      0 &&
                                    t.push(
                                      e(s)
                                        .closest(".product-gallery")
                                        .find(".product-gallery--figure")
                                    );
                                for (var o = 0; o < t.length; o++)
                                  t[o].prepend(a), (r = !0);
                              } else if (11741 == t.storeId) {
                                if (
                                  "collections" == i &&
                                  e(s).hasClass("block-inner")
                                )
                                  (w = e(s).find(".image-label-wrap")).length &&
                                    (w.prepend(a), (r = !0));
                                if (
                                  "products" == i &&
                                  e(s).hasClass("rimage-wrapper")
                                )
                                  (w = e(s).closest(".main-image")).length &&
                                    !w.find(".bss_pl_img").length &&
                                    (w.prepend(a), (r = !0));
                              } else if (13710 == t.storeId)
                                "collections" == i &&
                                  e(s).hasClass("product--root") &&
                                  (e(s).prepend(a), (r = !0)),
                                  "products" == i &&
                                    e(s).hasClass("image--container") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                e(s).hasClass("prod-zoom") &&
                                "products" == i &&
                                2512 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (3539 == t.storeId || 3543 == t.storeId) {
                                if (
                                  ((e(s).hasClass("product_image") ||
                                    e(s).hasClass(
                                      "cbb-frequently-bought-product"
                                    )) &&
                                    (e(s).prepend(a),
                                    (r = !0),
                                    e(s).is(
                                      "li.cbb-frequently-bought-product"
                                    ) && e(s).css("position", "relative")),
                                  3543 == t.storeId &&
                                    e(s)
                                      .parent()
                                      .parent()
                                      .hasClass("gallery-cell"))
                                )
                                  (x = e(s).closest(".flickity-viewport"))
                                    .length > 0 && (x.prepend(a), (r = !0));
                                3543 == t.storeId &&
                                  (e(s).hasClass("gallery-cell") &&
                                    "" == i &&
                                    (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("product_name") &&
                                    "" == i &&
                                    (e(s)
                                      .closest(".container")
                                      .find(".product_gallery")
                                      .prepend(a),
                                    (r = !0)),
                                  e(s).hasClass("image__container") &&
                                    "products" == i &&
                                    (e(s)
                                      .closest(".product_gallery")
                                      .prepend(a),
                                    (r = !0))),
                                  e(s).hasClass("image__container") &&
                                    (e(s).css("position", "relative"),
                                    e(s).prepend(a),
                                    (r = !0));
                              } else if (
                                e(s).hasClass("zoomWrapper") &&
                                "products" == i &&
                                2511 == t.storeId
                              )
                                e(s)
                                  .closest(".product-photo-container")
                                  .prepend(a),
                                  (r = !0);
                              else if (
                                4403 == t.storeId &&
                                e(s).hasClass("grid-view-item__image-wrapper")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                15617 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("aspect-ratio")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                10809 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass(
                                  "AspectRatio AspectRatio--withFallback"
                                )
                              ) {
                                let t = e(s)
                                  .closest(".Product__Gallery")
                                  .find(
                                    ".AspectRatio.AspectRatio--withFallback"
                                  )
                                  .eq(0);
                                t.length > 0 && (t.prepend(a), (r = !0));
                              } else if (
                                13712 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("image-wrap")
                              ) {
                                let t = e(s)
                                  .closest(".flickity-viewport")
                                  .find(".image-wrap");
                                t.length > 0 &&
                                  !e(t).find(".bss_pl_img").length &&
                                  (t.prepend(a), (r = !0));
                              } else if (
                                10061 == t.storeId &&
                                "products" == i
                              ) {
                                if (e(s).hasClass("grid-product__content")) {
                                  let t = e(s).find(
                                    ".grid-product__image-mask"
                                  );
                                  t.length > 0 &&
                                    !e(t).find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                                e(s).parent().hasClass("product-image-main") &&
                                  (e(s).prepend(a), (r = !0));
                              } else if (12847 == t.storeId) {
                                if (
                                  ("/pages/search-results" ==
                                    window.location.pathname &&
                                    (e(s).hasClass("klevuImgWrap") ||
                                      e(s).hasClass("tns-item")) &&
                                    (e(s).prepend(a), (r = !0)),
                                  "products" == i &&
                                    e(s).hasClass("product__main-photos"))
                                ) {
                                  let t = e(s)
                                    .find(".product-image-main")
                                    .first();
                                  t.length &&
                                    !e(t).find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                              } else if (5062 == t.storeId)
                                "products" == i &&
                                  (e(s).hasClass("product__main-photos") ||
                                    e(s).hasClass("image-wrap")) &&
                                  (e(s).prepend(a), (r = !0)),
                                  ("collections" != i &&
                                    "/search" != window.location.pathname) ||
                                    !e(s).hasClass(
                                      "clerk-design-component-ZJSszQVQ"
                                    ) ||
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                9982 == t.storeId &&
                                e(s).hasClass("ProductItem__Wrapper")
                              )
                                e(s).find(".ProductItem__ImageWrapper")
                                  .length &&
                                  (e(s)
                                    .find(".ProductItem__ImageWrapper")
                                    .prepend(a),
                                  (r = !0));
                              else if (10846 == t.storeId && "products" == i) {
                                if (
                                  e(s).parent().hasClass("productFeaturedImage")
                                ) {
                                  let t = e(s).closest(".left");
                                  t.length &&
                                    !e(t).find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                                if (e(s).hasClass("productWrapper")) {
                                  let t = e(s).find(".imageWrapper");
                                  t.length &&
                                    !e(t).find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                              } else if (
                                8947 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("product-single__media")
                              ) {
                                let t = e(s)
                                  .closest(".flickity-viewport")
                                  .find(".product-single__media");
                                t.length &&
                                  !e(t).find(".bss_pl_img").length &&
                                  (t.prepend(a), (r = !0));
                              } else if (
                                13260 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("pwzrswiper-slide")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (10884 == t.storeId)
                                (("products" == i &&
                                  e(s).hasClass("height-inherit")) ||
                                  ("/search" == window.location.pathname &&
                                    e(s).hasClass(
                                      "boost-pfs-filter-product-item-image"
                                    ))) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                9579 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("product-single__media-wrapper")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                11489 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("AspectRatio--withFallback")
                              ) {
                                let t = e(s).closest(
                                  ".Product__Slideshow--zoomable"
                                );
                                t.length &&
                                  (t.find(".bss_pl_img").length ||
                                    (t.prepend(a), (r = !0))),
                                  setTimeout(() => {
                                    var t = e(s).find(".bss_pl_img");
                                    t.length && t.remove();
                                  }, 220);
                              } else if (
                                8747 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("rimage-wrapper")
                              ) {
                                (x = e(s)
                                  .closest(".theme-images")
                                  .find(".product-media")).length &&
                                  !e(x).find(".bss_pl_img").length &&
                                  (x.prepend(a), (r = !0));
                              } else if (
                                11929 == t.storeId &&
                                "products" == i
                              ) {
                                if (e(s).hasClass("primgWrp"))
                                  (x = e(s)
                                    .closest(".slick-track")
                                    .find(".primgWrp")).length &&
                                    !e(x).find(".bss_pl_img").length &&
                                    (x.prepend(a), (r = !0));
                                e(s).hasClass("grid-view_image") &&
                                  (e(s).prepend(a), (r = !0));
                              } else if (
                                9973 == t.storeId &&
                                e(s).hasClass("photo-zoom-link")
                              )
                                e(s).closest(".slick-list").length &&
                                  (e(s).closest(".slick-list").prepend(a),
                                  (r = !0));
                              else if (
                                11264 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("image-wrap")
                              ) {
                                (w = e(s).closest(".slick-list")).length &&
                                  !w.find(".bss_pl_img").length &&
                                  (w.prepend(a), (r = !0));
                              } else if (
                                11751 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("aspect-ratio")
                              ) {
                                (w = e(s)
                                  .closest(".flickity-viewport")
                                  .find(".aspect-ratio")).length &&
                                  !w.find(".bss_pl_img").length &&
                                  (w.prepend(a), (r = !0));
                              } else if (
                                11696 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("rimage-wrapper")
                              ) {
                                (w = e(s).closest(".theme-viewport")).length &&
                                  !w.find(".bss_pl_img").length &&
                                  (w.prepend(a), (r = !0));
                              } else if (10713 == t.storeId && "products" == i)
                                e(s).hasClass(
                                  "product-single__thumbnail__wrapper"
                                ) &&
                                  e(s).closest(".swiper-container").length &&
                                  (e(s).closest(".swiper-container").prepend(a),
                                  (r = !0));
                              else if (
                                6230 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("product__image-wrapper")
                              ) {
                                (w = e(s).closest(".product-photo-container"))
                                  .length && (w.prepend(a), (r = !0));
                              } else if (
                                10499 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("primgWrp")
                              )
                                e(s).closest(".slick-list").length &&
                                  (e(s)
                                    .closest(".slick-list")
                                    .find(".bss_pl_img").length ||
                                    (e(s).closest(".slick-list").prepend(a),
                                    (r = !0)));
                              else if (
                                139 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("image-slide-link")
                              ) {
                                (w = e(s).closest(".flexslider")).length &&
                                  !w.find(".bss_pl_img").length &&
                                  (w.prepend(a), (r = !0));
                              } else if (
                                11377 == t.storeId &&
                                "/pages/rapid-search-results" ==
                                  window.location.pathname &&
                                e(s).hasClass("rps-products-container")
                              ) {
                                (w = e(s).find(".rps-product-container"))
                                  .length && (w.prepend(a), (r = !0));
                              } else if (10631 == t.storeId) {
                                if (
                                  (e(s).hasClass("lazy-image") &&
                                    e(s).closest(".slick-list").length &&
                                    (e(s).closest(".slick-list").prepend(a),
                                    (r = !0)),
                                  "products" == i &&
                                    e(s).hasClass("ga-product") &&
                                    e(s).closest("#ga-product_related").length >
                                      0)
                                ) {
                                  let t = e(s).find(".ga-product_image");
                                  t.length > 0 && (t.before(a), (r = !0));
                                }
                              } else if (10588 == t.storeId)
                                e(s).hasClass("AspectRatio--withFallback") &&
                                  e(s).closest(".flickity-viewport").length &&
                                  e(s)
                                    .closest(".flickity-viewport")
                                    .find(".bss_pl_img").length < 1 &&
                                  (e(s)
                                    .closest(".flickity-viewport")
                                    .prepend(a),
                                  (r = !0));
                              else if (10017 == t.storeId && "products" == i) {
                                if (
                                  (e(s).hasClass("gf_product-image-thumb") &&
                                    (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("module"))
                                ) {
                                  var l = e(".owl-item").find(".item").first();
                                  l.length &&
                                    l.on("click", function () {
                                      var t = e(this)
                                        .closest(".gf_column")
                                        .find(".module")
                                        .first();
                                      t.length &&
                                        !t.find(".bss_pl_img").length &&
                                        (t.prepend(a), (r = !0));
                                    });
                                }
                              } else if (11265 == t.storeId) {
                                if ("collections" == i) {
                                  var n = e(".star-set-image");
                                  n.length &&
                                    n.on("click", function () {
                                      var t = e(this)
                                          .css("background-image")
                                          .split('url("https:'),
                                        i = (t = t.toString().split('")'))
                                          .toString()
                                          .slice(1, t.toString().length - 1)
                                          .toString(),
                                        o = e(this)
                                          .closest(".product_item")
                                          .find("img.wp-post-image.loading")
                                          .first();
                                      o.length &&
                                        (o.attr("src", `${i}`),
                                        e(this)
                                          .closest(".product_item")
                                          .find(".bss_pl_img")
                                          .remove(),
                                        setTimeout(() => {
                                          e(s).hasClass(
                                            "product_item--thumbnail-holder"
                                          ) &&
                                            (e(s).find(".bss_pl_img").length ||
                                              (e(s).prepend(a), (r = !0)));
                                        }, 100));
                                    });
                                }
                                if (
                                  "products" == i &&
                                  e(s).hasClass("g-image-zoom")
                                ) {
                                  var d = e(s).closest(".slick-list");
                                  d.length &&
                                    (d.find(".bss_pl_img").length ||
                                      (d.prepend(a), (r = !0)));
                                }
                              } else if (11656 == t.storeId) {
                                if (
                                  "collections" == i &&
                                  e(s).hasClass("product-item")
                                )
                                  (w = e(s).find(".aspect-ratio")).length &&
                                    (w.prepend(a), (r = !0));
                                if (
                                  "products" == i &&
                                  e(s).hasClass("product-item")
                                )
                                  (w = e(s).find(
                                    ".product-item__primary-image"
                                  )).length && (w.after(a), (r = !0));
                                "products" == i &&
                                  e(s)
                                    .parent()
                                    .hasClass(
                                      "product-gallery__size-limiter"
                                    ) &&
                                  (e(s).prepend(a), (r = !0));
                              } else if (10234 == t.storeId)
                                "products" == i &&
                                  e(s).hasClass("image-wrap") &&
                                  e(s).closest(".slick-list").length &&
                                  (e(s)
                                    .closest(".slick-list")
                                    .find(".bss_pl_img").length ||
                                    (e(s).closest(".slick-list").prepend(a),
                                    (r = !0))),
                                  "collections" == i &&
                                    e(s).hasClass("spf-product-card__inner") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                8674 == t.storeId &&
                                e(s).hasClass("product-single__media__image")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                9893 == t.storeId &&
                                e(s).hasClass("grid-view_image")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                11103 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("product-grid-item--left") &&
                                e(s).find(".product_card").length
                              )
                                e(s).find(".product_card").prepend(a), (r = !0);
                              else if (8659 == t.storeId && "products" == i) {
                                if (e(s).hasClass("rimage-wrapper"))
                                  (w = e(s).closest(".slick-list")).length &&
                                    (w.find(".bss_pl_img").length ||
                                      (w.prepend(a), (r = !0)));
                                if (e(s).hasClass("medium--one-quarter")) {
                                  var p = e(s).find(".global-border-radius");
                                  p.length && (p.prepend(a), (r = !0));
                                }
                              } else if (
                                10495 == t.storeId &&
                                e(s).hasClass("spf-product-card__inner")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                9635 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("gf_module-left")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (3220 == t.storeId)
                                "" == i &&
                                  "Column" == e(s).attr("data-pf-type") &&
                                  (e(s).prepend(a), (r = !0)),
                                  "" == i &&
                                    e(s).hasClass("sc-jgPyTC") &&
                                    (e(s).prepend(a), (r = !0)),
                                  "products" == i &&
                                    e(s).hasClass("slide") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                -1 != [17455, 8721].indexOf(t.storeId) &&
                                e(s).hasClass("flickity-slider")
                              )
                                e(s).parent().prepend(a), (r = !0);
                              else if (
                                9477 == t.storeId &&
                                e(s).hasClass("product__main-photos")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                2583 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("ga-product")
                              )
                                e(s).find('a[target="_blank"]').length &&
                                  (e(s).find('a[target="_blank"]').prepend(a),
                                  (r = !0));
                              else if (
                                7961 == t.storeId &&
                                e(s).hasClass("AspectRatio")
                              )
                                e(s).closest(".flickity-viewport").length &&
                                  (e(s)
                                    .closest(".flickity-viewport")
                                    .prepend(a),
                                  (r = !0));
                              else if (5662 == t.storeId)
                                e(s).hasClass("product-media-container") &&
                                  e(s).closest(".flickity-viewport").length &&
                                  (e(s)
                                    .closest(".flickity-viewport")
                                    .prepend(a),
                                  (r = !0)),
                                  e(s).hasClass("js-product-image") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                536 == t.storeId &&
                                e(s).hasClass("fancybox")
                              )
                                e(s).closest(".slick-list").length &&
                                  !e(s)
                                    .closest(".slick-list")
                                    .find(".bss_pl_img").length &&
                                  (e(s).closest(".slick-list").prepend(a),
                                  (r = !0));
                              else if (
                                10596 == t.storeId &&
                                e(s).hasClass("rimage-wrapper")
                              )
                                e(s).closest(".slick-list").length &&
                                  (e(s).closest(".slick-list").prepend(a),
                                  (r = !0));
                              else if (
                                7184 == t.storeId &&
                                e(s).hasClass("item")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                8704 == t.storeId &&
                                e(s).hasClass("product-gallery--media-wrapper")
                              )
                                e(s).closest(".product-gallery").prepend(a),
                                  (r = !0);
                              else if (8645 == t.storeId)
                                "products" == i &&
                                  (e(s).hasClass("product__photo")
                                    ? (e(s)
                                        .closest(".product__slides")
                                        .find(".product__photo")
                                        .append(a),
                                      (r = !0))
                                    : e(s).hasClass(
                                        "limespot-recommendation-box-item"
                                      ) &&
                                      e(s).find(".ls-image-wrap").length &&
                                      (e(s).find(".ls-image-wrap").prepend(a),
                                      (r = !0))),
                                  ("collections" != i && "" != i) ||
                                    (e(s).hasClass(
                                      "limespot-recommendation-box-item"
                                    ) &&
                                      (e(s).find(".ls-image-wrap").append(a),
                                      (r = !0)),
                                    e(s).hasClass("grid__item") &&
                                      (e(s).find(".grid__image").append(a),
                                      (r = !0)));
                              else if (
                                8281 == t.storeId &&
                                e(s).hasClass("product-image-inner")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (8374 == t.storeId) {
                                if (
                                  e(s).hasClass("product-image-wrap") ||
                                  e(s).closest(".item")
                                )
                                  (x = e(s)
                                    .closest(".product-grid")
                                    .find(".item")).length > 0 &&
                                    (x.prepend(a), (r = !0)),
                                    e(s).prepend(a),
                                    (r = !0);
                              } else if (8377 == t.storeId)
                                e(s).hasClass("grid-product__content") &&
                                  e(s).find(".grid-product__image-mask")
                                    .length > 0 &&
                                  (e(s)
                                    .find(".grid-product__image-mask")
                                    .prepend(a),
                                  (r = !0)),
                                  e(s).hasClass("image-wrap") &&
                                    e(s).closest(".slick-initialized").length >
                                      0 &&
                                    (e(s)
                                      .closest(".slick-initialized")
                                      .prepend(a),
                                    (r = !0));
                              else if (
                                5324 == t.storeId &&
                                e(s).hasClass("AspectRatio--withFallback")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                8519 == t.storeId &&
                                e(s).hasClass("fancybox")
                              )
                                e(s).parent().prepend(a), (r = !0);
                              else if (8563 == t.storeId) {
                                if (
                                  (e(s).parent().hasClass("image__container") &&
                                    (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("product_name") && "" == i)
                                )
                                  (x = e(s)
                                    .closest(".collection-in-detail")
                                    .find(".product_gallery")).length > 0 &&
                                    (x.prepend(a), (r = !0));
                              } else if (
                                7136 == t.storeId &&
                                e(s).hasClass("grid__item")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                6873 == t.storeId &&
                                e(s).hasClass("product-single__photo-wrapper")
                              ) {
                                (x = e(s).closest(".product-single__photos"))
                                  .length > 0 && (x.prepend(a), (r = !0));
                              } else if (
                                8232 == t.storeId &&
                                e(s).hasClass("pwzrswiper-slide")
                              ) {
                                (x = e(s).closest(
                                  "#pwzrswiper-container-wrapper"
                                )).length > 0 && (x.prepend(a), (r = !0)),
                                  e(".swatch-view-item").on(
                                    "click",
                                    function () {
                                      setTimeout(() => {
                                        e(".swatch-view-item")
                                          .closest(".page-width")
                                          .find("#pwzrswiper-container-wrapper")
                                          .length &&
                                          (e(".swatch-view-item")
                                            .closest(".page-width")
                                            .find(
                                              "#pwzrswiper-container-wrapper"
                                            )
                                            .prepend(a),
                                          (r = !0));
                                      }, 500);
                                    }
                                  );
                              } else if (7363 == t.storeId)
                                (e(s).hasClass("product_image") ||
                                  e(s).hasClass("gallery-cell")) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (5694 == t.storeId)
                                (e(s).hasClass("ci") ||
                                  e(s).hasClass("main-product-image")) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                2175 == t.storeId &&
                                e(s).hasClass("image-container")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                8864 == t.storeId &&
                                e(s).hasClass("image-wrap")
                              )
                                e(s).closest(".slick-list").prepend(a),
                                  (r = !0);
                              else if (
                                8302 == t.storeId &&
                                e(s).hasClass("ProductItem__Wrapper")
                              )
                                e(s).find(".ProductItem__ImageWrapper")
                                  .length &&
                                  (e(s)
                                    .find(".ProductItem__ImageWrapper")
                                    .prepend(a),
                                  (r = !0));
                              else if (
                                6578 == t.storeId &&
                                e(s).hasClass("product-single__media-wrapper")
                              ) {
                                (x = e(s).closest(".swiper-container")).length >
                                  0 && (x.prepend(a), (r = !0));
                              } else if (
                                6588 == t.storeId &&
                                e(s).hasClass("enap-pro-img")
                              ) {
                                (x = e(s).closest(
                                  ".enormproductslider-enappitem"
                                )).length > 0 && (x.prepend(a), (r = !0));
                              } else if (7658 == t.storeId)
                                (e(s).hasClass("snize-product") ||
                                  e(s).hasClass("grid-view-item-image")) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                4062 == t.storeId &&
                                e(s).hasClass("grid-product__image-wrapper")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                5061 == t.storeId &&
                                e(s).hasClass("product-single__media")
                              ) {
                                (x = e(s)
                                  .closest(".product-single__media-group")
                                  .find(".product-single__media-wrapper"))
                                  .length > 0 && (x.prepend(a), (r = !0)),
                                  e(s).prepend(a),
                                  (r = !0);
                              } else if (
                                6116 == t.storeId &&
                                e(s).hasClass("product-item")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                6232 == t.storeId &&
                                e(s).hasClass("product-single__media")
                              )
                                e(s).parent().prepend(a), (r = !0);
                              else if (5728 == t.storeId)
                                (e(s).hasClass("col-md-8") ||
                                  e(s).hasClass("c-product-card__thumb")) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                5342 == t.storeId &&
                                e(s).hasClass("product-single__photo__item")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                5890 == t.storeId &&
                                e(s).hasClass("slick-slide")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (5047 == t.storeId)
                                e(s).hasClass("MagicToolboxSlide") &&
                                  (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("product-grid-item--center") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (1731 == t.storeId)
                                e(s).hasClass(
                                  "limoniapps-discountninja-collectionbadge"
                                ) && (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass(
                                    "product-single__media__image"
                                  ) && (e(s).prepend(a), (r = !0));
                              else if (4748 == t.storeId) {
                                if (e(s).hasClass("snize-product")) {
                                  let t = e(s).find(".snize-thumbnail-wrapper");
                                  t.length > 0 && (t.prepend(a), (r = !0));
                                }
                                e(s).hasClass("slick-slide") &&
                                  (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("mediaimageholder") &&
                                    (e(s).prepend(a), (r = !0));
                              } else if (4966 == t.storeId) {
                                if (
                                  "products" == i &&
                                  e(s).hasClass("rimage-wrapper")
                                ) {
                                  let t = e(s).closest(".slick-list");
                                  t.length > 0 && (t.prepend(a), (r = !0));
                                }
                                if (
                                  "collections" == i &&
                                  e(s).hasClass("snize-product")
                                )
                                  (w = e(s).find(".snize-thumbnail")).length &&
                                    (w.prepend(a), (r = !0));
                              } else if (
                                e(s).closest(".product-single__photos")
                                  .length &&
                                "products" == i &&
                                3153 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                e(s).hasClass("reveal") &&
                                "collections" == i &&
                                3153 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                (e(s).hasClass("grid-view-item-image") ||
                                  e(s).hasClass("grid__image")) &&
                                3153 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                3153 == t.storeId &&
                                e(s).closest(".owl-item").length &&
                                "products" == i
                              )
                                e(s).prepend(a), (r = !0);
                              else if (4237 == t.storeId)
                                e(s).hasClass("inner") &&
                                  (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("cart-summary-item__image") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                e(s).hasClass("product-image") &&
                                "products" !== i &&
                                3687 == t.storeId
                              )
                                e(s).closest(".product-top").prepend(a),
                                  (r = !0);
                              else if (
                                e(s).hasClass("zoom-container") &&
                                "products" == i &&
                                2153 == t.storeId
                              )
                                e(s).closest(".flickity-slider").prepend(a),
                                  (r = !0);
                              else if (
                                267 == t.storeId &&
                                e(s)
                                  .parent()
                                  .hasClass("product-single__media__thumbnail")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                e(s).hasClass("product__thumb") &&
                                "products" == i &&
                                3011 == t.storeId
                              )
                                r = !0;
                              else if (
                                e(s).hasClass("product-fancybox") &&
                                "products" == i &&
                                3122 == t.storeId
                              )
                                e(s)
                                  .closest(".product-image-container")
                                  .prepend(a),
                                  (r = !0);
                              else if (
                                e(s).hasClass(
                                  "FeaturedImage-product-template"
                                ) &&
                                "products" == i &&
                                2403 == t.storeId
                              )
                                e(s)
                                  .parent(".rt-fastor-product-gallery__image")
                                  .prepend(a),
                                  (r = !0);
                              else if (
                                e(s).hasClass("image-swap-effect") &&
                                "collections" == i &&
                                2403 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                e(s).hasClass("slideshow__slide") &&
                                "products" == i &&
                                2834 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if ("products" == i && 2409 == t.storeId)
                                r = !1;
                              else if (
                                e(s).hasClass("slick-item") &&
                                "products" == i &&
                                3214 == t.storeId
                              )
                                r = !0;
                              else if (
                                e(s)
                                  .closest(".variant-image-product-template")
                                  .hasClass("relative") &&
                                "products" == i &&
                                2631 == t.storeId
                              )
                                e(s)
                                  .closest(
                                    ".variant-image-product-template.relative"
                                  )
                                  .prepend(a),
                                  (r = !0);
                              else if (2241 == t.storeId) {
                                if (
                                  ("collections" == i &&
                                    e(s).find(".snize-thumbnail-wrapper") &&
                                    (e(s)
                                      .find(".snize-thumbnail-wrapper")
                                      .prepend(a),
                                    (r = !0)),
                                  "/pages/search-results-page" ==
                                    window.location.pathname &&
                                    e(s).hasClass("snize-product"))
                                ) {
                                  let t = e(s).find(".snize-thumbnail-wrapper");
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (
                                e(s).hasClass("grid__item") &&
                                "collections" == i &&
                                3073 == t.storeId
                              )
                                e(s).find(".product-card__image").prepend(a),
                                  (r = !0);
                              else if (4349 == t.storeId)
                                e(s).hasClass("snize-product") &&
                                  (e(s).find(".snize-product-label-image img")
                                    .length &&
                                    e(s)
                                      .find(".snize-product-label-image img")
                                      .remove(),
                                  e(s).prepend(a),
                                  (r = !0));
                              else if (
                                e(s).hasClass("snize-product") &&
                                "collections" == i &&
                                3335 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                e(s).hasClass("grid__item") &&
                                2558 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                e(s).hasClass("ProductItem__Wrapper") &&
                                "products" !== i &&
                                207 == t.storeId
                              )
                                e(s)
                                  .find("a.ProductItem__ImageWrapper")
                                  .prepend(a),
                                  e(s)
                                    .find("a.ProductItem__ImageWrapper")
                                    .css("position", "relative"),
                                  (r = !0);
                              else if (
                                (e(s).closest(".hero-content__controls")
                                  .length ||
                                  e(s).closest(".nsl").length) &&
                                3174 == t.storeId
                              )
                                r = !0;
                              else if (
                                (e(s).hasClass("announcement__wrapper") ||
                                  e(s).hasClass("hero__link appear-delay-4")) &&
                                1623 == t.storeId
                              )
                                r = !0;
                              else if (
                                e(s).hasClass("product-card-figure") &&
                                2895 == t.storeId
                              )
                                e(s).prepend(a);
                              else if (
                                e(s).hasClass("title") &&
                                2895 == t.storeId
                              )
                                r = !0;
                              else if (
                                e(s).hasClass("main-content") &&
                                3533 == t.storeId
                              )
                                r = !0;
                              else if (2837 == t.storeId && "products" == i) {
                                if (
                                  (e(s).is("#groupProImage") &&
                                    (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("pr_trust_seal"))
                                ) {
                                  let t = e(s).closest(".pr_sticky_content");
                                  if (t.length) {
                                    let e = t.find(".fade_flick_1");
                                    e.length && (e.prepend(a), (r = !0));
                                  }
                                }
                              } else if (
                                e(s).hasClass("product-grid-item--center") &&
                                "collections" == i &&
                                3592 == t.storeId
                              )
                                e(s)
                                  .find(".product_card__image-wrapper")
                                  .prepend(a),
                                  (r = !0);
                              else if (4163 == t.storeId) {
                                if (
                                  e(s).hasClass(
                                    "product-single__thumbnails-item"
                                  )
                                ) {
                                  var c = e(s).find(
                                    "a.text-link.product-single__thumbnail.product-single__thumbnail--product-template"
                                  );
                                  if (0 == c.length) return;
                                  c.prepend(a), (r = !0);
                                }
                                e(s).hasClass("product-single__photo") &&
                                  (e(s).prepend(a), (r = !0));
                              } else if (
                                e(s).hasClass("prod-zoom") &&
                                "products" == i &&
                                3330 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                e(s).hasClass("slick-item") &&
                                "products" == i &&
                                3330 == t.storeId
                              )
                                r = !0;
                              else if (
                                e(s).hasClass("product__thumb") &&
                                "products" == i &&
                                2510 == t.storeId
                              )
                                r = !0;
                              else if (
                                e(s).hasClass("product-single__photo") &&
                                1351 == t.storeId &&
                                "products" == i
                              )
                                e(s).css("position", "relative"),
                                  e(s).prepend(a),
                                  (r = !0);
                              else if (3498 == t.storeId || 207 == t.storeId)
                                e(s).hasClass("AspectRatio--withFallback") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                4489 == t.storeId &&
                                e(s).hasClass("product-media")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (3599 == t.storeId) {
                                if (e(s).hasClass("hero__content")) {
                                  var h = e(s)
                                    .parents()
                                    .parents()
                                    .find(".split-hero__half--right");
                                  h.length > 0 &&
                                    (e(s).find("bss_pl_img").remove(),
                                    h.first().prepend(a),
                                    (r = !0));
                                }
                                if (
                                  e(s).hasClass("product-information-custom")
                                ) {
                                  var _ = e(s)
                                    .prev()
                                    .find(".product-item__image-custom");
                                  _.length > 0 && (_.prepend(a), (r = !0));
                                }
                                "products" == i &&
                                  e(s).hasClass("lazy-image") &&
                                  (e(s).prepend(a), (r = !0));
                              } else if (
                                1576 == t.storeId &&
                                e(s).hasClass("fotorama")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                3232 == t.storeId &&
                                e(s).hasClass("image-wrap")
                              )
                                e(s).parent().prepend(a), (r = !0);
                              else if (4063 == t.storeId)
                                (e(s)
                                  .parent()
                                  .hasClass("tt-product-single-img") ||
                                  e(s).hasClass("slick-slide")) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                4078 == t.storeId ||
                                4085 == t.storeId ||
                                4084 == t.storeId
                              )
                                e(s).hasClass("MagicToolboxContainer")
                                  ? (e(s)
                                      .find("figure.mz-figure.mz-click-zoom")
                                      .prepend(a),
                                    (r = !0))
                                  : e(s).hasClass("productview") &&
                                    (e(s)
                                      .find(
                                        "a.qview-product-handle.qview-button-container"
                                      )
                                      .prepend(a),
                                    (r = !0));
                              else if (
                                e(s).parent().hasClass("product-thumbnail") &&
                                1545 === t.storeId
                              )
                                r = !0;
                              else if (
                                e(s).parent().hasClass("product-full-image") &&
                                1545 === t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                e(s).hasClass(
                                  "shopify-product-gallery__image"
                                ) &&
                                2656 == t.storeId
                              ) {
                                (g = e(s).closest(".shopify-product-gallery"))
                                  .length &&
                                  !g.find(".bss_pl_img").length &&
                                  (e(g).prepend(a), (r = !0));
                              } else if (2587 == t.storeId) {
                                (g = e(s).parent()).hasClass(
                                  "tt-product-single-img"
                                ) && (e(g).prepend(a), (r = !0));
                              } else if (
                                2800 == t.storeId &&
                                ((e(s).hasClass("product-grid-item") &&
                                  e(s).hasClass("grid__item")) ||
                                  e(s).hasClass("lg--up--px0"))
                              ) {
                                var f = e(s).find(".t--list-and-grid");
                                if (f.length)
                                  (g = f.find(".relative")).length &&
                                    (g
                                      .find(".responsive-image__wrapper")
                                      .prepend(a),
                                    (r = !0));
                              } else if (
                                2800 == t.storeId &&
                                e(s).hasClass("responsive-image__wrapper")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                17 == t.storeId &&
                                e(s).hasClass("img_ptw") &&
                                e(s).hasClass("p_ptw")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                3176 == t.storeId &&
                                e(s).hasClass("img_ptw") &&
                                e(s).hasClass("p_ptw")
                              ) {
                                var g;
                                (g = e(s).parent().parent()).hasClass(
                                  "flickity-viewport"
                                ) && (g.prepend(a), (r = !0));
                              } else if (
                                3084 == t.storeId &&
                                e(s).hasClass("image--style")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                3214 == t.storeId &&
                                e(s).hasClass("prod-zoom") &&
                                e(s).parent().hasClass("slick-item")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                3248 == t.storeId &&
                                e(s).hasClass("rondell-container")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (2849 == t.storeId)
                                e(s).hasClass("product-thumb") &&
                                  (e(s).parent().prepend(a), (r = !0));
                              else if (
                                3010 == t.storeId &&
                                e(s).hasClass("sp-pr-gallery__img")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                4199 == t.storeId &&
                                e(s).hasClass("card__image-container")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (4227 == t.storeId)
                                (e(s).hasClass("product-media-container") ||
                                  e(s).hasClass("collection-image") ||
                                  e(s).hasClass("ci")) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                e(s).hasClass("zoomWindowContainer") &&
                                4369 == t.storeId
                              )
                                e(s).prepend(a), (r = !0);
                              else if (4264 == t.storeId) {
                                var u = (x = e(s).closest(
                                    ".ProductItem__Wrapper"
                                  )).find(".bss_pl_img"),
                                  m = x.find(".AspectRatio");
                                if (
                                  (e(s).hasClass(
                                    "ProductItem__Title Heading"
                                  ) &&
                                    x.length &&
                                    (u.length && u.remove(),
                                    m.length && (m.prepend(a), (r = !0))),
                                  "products" == i &&
                                    e(s).hasClass("AspectRatio--withFallback"))
                                ) {
                                  let t = e(s).closest(
                                    ".Product__Slideshow--zoomable"
                                  );
                                  if (t.length) {
                                    let e = t.find(
                                      ".AspectRatio--withFallback"
                                    );
                                    e.length && (e.prepend(a), (r = !0));
                                  }
                                }
                              } else if (1600 == t.storeId)
                                e(s).find(
                                  "#FeaturedImageZoom-1566363782678-12828186607734-wrapper .bss_pl_img"
                                ).length &&
                                  e(s)
                                    .find(
                                      "#FeaturedImageZoom-1566363782678-12828186607734-wrapper .bss_pl_img"
                                    )
                                    .remove();
                              else if (
                                e(s).hasClass("product-form--root") &&
                                4790 == t.storeId
                              )
                                e(s)
                                  .closest(".product-page--main-content")
                                  .find(".product-media--wrapper .modal--root")
                                  .length &&
                                  (e(s)
                                    .closest(".product-page--main-content")
                                    .find(
                                      ".product-media--wrapper .modal--root"
                                    )
                                    .prepend(a),
                                  (r = !0));
                              else if (4654 == t.storeId) {
                                e(s).hasClass("mz-figure") &&
                                  (e(s).prepend(a), (r = !0));
                                u = (x = e(s).closest("#logo")).find(
                                  ".bss_pl_img"
                                );
                                x.length && u.length && u.remove();
                              } else if (
                                5040 == t.storeId &&
                                e(s).hasClass("product__inside__image")
                              ) {
                                var b = e(s).find('a[data-bss-pl="active"]');
                                b.length && (b.prepend(a), (r = !0));
                              } else if (
                                1418 == t.storeId &&
                                e(s).hasClass("label-item")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                -1 !==
                                [5175, 5358, 5354, 5357, 5355, 5356].indexOf(
                                  t.storeId
                                )
                              ) {
                                if (e(s).hasClass("ProductItem__Wrapper")) {
                                  let t = e(s).find(".AspectRatio");
                                  if (t.length)
                                    if (
                                      e(s).find(".ProductItem__LabelList")
                                        .length
                                    ) {
                                      let e =
                                        '<div class="bss-product-is-sale">';
                                      (e += a),
                                        (e += "</div>"),
                                        t.prepend(e),
                                        (r = !0);
                                    } else t.prepend(a), (r = !0);
                                }
                                if (
                                  e(s).hasClass("AspectRatio--withFallback") &&
                                  "products" == i
                                ) {
                                  let t = e(s).closest(
                                    ".Product__Slideshow--zoomable"
                                  );
                                  t.length &&
                                    (t.find(".bss_pl_img").length ||
                                      t.prepend(a)),
                                    (r = !0);
                                }
                              } else if (5287 == t.storeId) {
                                if (
                                  e(s).hasClass("FeaturedProduct") &&
                                  "" == i
                                ) {
                                  let t = e(s).find(".AspectRatio");
                                  t.length && (t.prepend(a), (r = !0));
                                }
                                e(s).hasClass("AspectRatio--withFallback") &&
                                  "products" == i &&
                                  (e(s).prepend(a), (r = !0));
                              } else if (5254 == t.storeId)
                                e(s).hasClass("grid-view-item") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                5472 == t.storeId &&
                                e(s).hasClass("product-item-parent") &&
                                e(s).find(".grid__image").length
                              )
                                e(s).find(".grid__image").prepend(a), (r = !0);
                              else if (5553 == t.storeId && "products" == i)
                                e(s)
                                  .parent()
                                  .parent()
                                  .hasClass("slick-slide") && (r = !0),
                                  e(s).hasClass("lazy-image") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                2180 == t.storeId &&
                                e(s).parent().parent().hasClass("slick-slide")
                              )
                                r = !0;
                              else if (
                                e(s)
                                  .closest(
                                    ".product-media.product-media--image"
                                  )
                                  .find(".rimage-wrapper").length &&
                                5485 == t.storeId
                              )
                                e(s)
                                  .closest(
                                    ".product-media.product-media--image"
                                  )
                                  .find(".rimage-wrapper")
                                  .prepend(a),
                                  (r = !0);
                              else if (
                                5485 == t.storeId &&
                                e(s).hasClass("product-title") &&
                                e(s)
                                  .closest(".featured-product-section")
                                  .find(
                                    ".product-media.product-media--image .rimage-wrapper"
                                  ).length
                              )
                                e(s)
                                  .closest(".featured-product-section")
                                  .find(
                                    ".product-media.product-media--image .rimage-wrapper"
                                  )
                                  .prepend(a),
                                  (r = !0);
                              else if (
                                5673 == t.storeId &&
                                e(s).hasClass("prod-zoom") &&
                                e(s).closest(".slider-main-image").length
                              )
                                e(s).closest(".slider-main-image").append(a),
                                  (r = !0);
                              else if (5390 == t.storeId && "" == i) {
                                e(
                                  ".product-single__hero .grid__item .product-single__photos"
                                ).length && (r = !0);
                                let t = e(s).closest(".product-single__hero");
                                if (t.length) {
                                  let s = e(t).find(
                                    ".product-single__image-wrapper"
                                  );
                                  s.length && (s.prepend(a), (r = !0));
                                }
                              } else if (
                                -1 !==
                                [5558, 5460, 5590, 5738, 5793].indexOf(
                                  t.storeId
                                )
                              ) {
                                e(s).find(".snize-thumbnail").length &&
                                  (r = !0);
                                let t = e(s).find(".snize-thumbnail-wrapper");
                                t.length && (t.prepend(a), (r = !0));
                              } else if (
                                1244 == t.storeId &&
                                e(s).closest(".productitem").length
                              ) {
                                e(s)
                                  .closest(".productitem")
                                  .css("position", ""),
                                  e(s)
                                    .find(".productitem--image-link")
                                    .append(a),
                                  (r = !0);
                              } else if (
                                (e(s).hasClass("collectionBlock-image") ||
                                  e(s).hasClass("product-image")) &&
                                6193 == t.storeId
                              )
                                e(s).append(a), (r = !0);
                              else if (5413 == t.storeId)
                                e(s).hasClass("swiper-wrapper") &&
                                e(s).find(
                                  ".swiper-slide.product-swiper-img-height.swiper-slide-active"
                                ).length
                                  ? (e(s)
                                      .find(
                                        ".swiper-slide.product-swiper-img-height.swiper-slide-active"
                                      )
                                      .prepend(a),
                                    (r = !0))
                                  : e(s).hasClass(
                                      "product-collection-box-padding"
                                    )
                                  ? (e(s)
                                      .find(
                                        ".collectionBlock-image.collection-product-image"
                                      )
                                      .append(a),
                                    (append = !0))
                                  : e(s).hasClass(
                                      "product_sale_content_shopinfo_shop"
                                    ) && e(s).find("a li div img").length
                                  ? (e(s).find("a > li > div > img").after(a),
                                    e(s)
                                      .find("a > li > div")
                                      .first()
                                      .css("position", "relative"),
                                    (r = !0))
                                  : e(s).hasClass("flickity-slider") &&
                                    e(s).find(".product-image").length &&
                                    (e(s).find(".product-image").append(a),
                                    console.log(e(s), "lll"),
                                    (r = !0));
                              else if (3341 == t.storeId) {
                                if (
                                  "collections" == i &&
                                  e(s).hasClass("productitem")
                                ) {
                                  let t = e(s).find(".productitem--image-link");
                                  t.length &&
                                    !t.find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                                "Column" == e(s).attr("data-pf-type") &&
                                  (r = !0);
                              } else if (6231 == t.storeId)
                                "collections" == i &&
                                  e(s).hasClass("product-tile__images") &&
                                  (e(s).append(a), (r = !0)),
                                  "products" == i &&
                                    e(s).hasClass(
                                      "responsive-image__wrapper"
                                    ) &&
                                    (e(s).append(a), (r = !0));
                              else if (3772 == t.storeId) {
                                if (e(s).hasClass("productitem--image")) {
                                  let t = e(s).closest(
                                    ".productitem.custom_bedge"
                                  );
                                  t.length && (t.append(a), (r = !0));
                                }
                              } else if (
                                (6390 == t.storeId &&
                                  e(s).closest(".relative.product_image")
                                    .length) ||
                                (6262 == t.storeId &&
                                  e(s).closest(".relative.product_image")
                                    .length)
                              )
                                e(s)
                                  .closest(".relative.product_image")
                                  .append(a),
                                  (r = !0);
                              else if (
                                6346 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("image-wrap")
                              ) {
                                let t = e(s).closest(".product-image-main");
                                t.length && (t.append(a), (r = !0));
                              } else if (
                                6341 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("AspectRatio--withFallback")
                              )
                                e(s).append(a), (r = !0);
                              else if (
                                6491 == t.storeId &&
                                "products" == i &&
                                e(s)
                                  .closest(".container")
                                  .find(".flexslider.product_gallery ul > li")
                                  .length
                              )
                                e(s)
                                  .closest(".container")
                                  .find(".flexslider.product_gallery ul > li")
                                  .append(a),
                                  (r = !0);
                              else if (
                                5931 == t.storeId &&
                                "products" == i &&
                                e(s).closest(".product-medias").length
                              )
                                e(s).closest(".product-medias").append(a),
                                  (r = !0);
                              else if (6673 == t.storeId) {
                                "products" == i && (e(s).before(a), (r = !0));
                                let t = e(s).closest(".product-top");
                                ("/search" != window.location.pathname &&
                                  "collections" != i) ||
                                  !e(s).hasClass("product-image") ||
                                  !t.length ||
                                  t.children(".bss_pl_img").length ||
                                  (t.append(a), (r = !0));
                              } else if (1703 == t.storeId && "products" == i)
                                e(s).hasClass("aspect-ratio") &&
                                  e(
                                    "#shopify-section-product-template .flickity-viewport"
                                  ).length &&
                                  (r = !0),
                                  e(s).hasClass("aspect-ratio") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                5185 == t.storeId &&
                                e(s).parent().hasClass("product-grid-item")
                              ) {
                                let t = e(s).find(".lazy-image");
                                t.length && (t.prepend(a), (r = !0)),
                                  e(s).closest(".product-grid-item").length &&
                                    (e(s)
                                      .closest(".product-grid-item")
                                      .children()
                                      .children()
                                      .prepend(a),
                                    (r = !0));
                              } else if (
                                6705 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("aspect-ratio")
                              ) {
                                let t = e(s).closest(".flickity-viewport");
                                e(t).length && e(t).prepend(a), (r = !0);
                              } else if (
                                6913 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("aspect-ratio")
                              ) {
                                let t = e(s).closest(".flickity-viewport");
                                e(t).length &&
                                  e(t)
                                    .parent()
                                    .hasClass("product-gallery__carousel") &&
                                  e(t).prepend(a),
                                  (r = !0);
                              } else if (
                                5868 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass(
                                  "product-single__thumbnail__wrapper"
                                )
                              ) {
                                let t = e(s).closest(".swiper-wrapper");
                                e(t).length && e(t).prepend(a), (r = !0);
                              } else if (
                                6912 == t.storeId &&
                                "products" == i &&
                                e(s)
                                  .closest(".product-page--main-content")
                                  .find(".product-media--root").length
                              )
                                e(s)
                                  .closest(".product-page--main-content")
                                  .find(".product-media--root")
                                  .append(a),
                                  (r = !0);
                              else if (
                                5877 == t.storeId &&
                                "collections" == i &&
                                e(s).find(".boost-pfs-action-overlay").length
                              )
                                e(s)
                                  .find(".boost-pfs-action-overlay")
                                  .append(a),
                                  (r = !0);
                              else if (
                                5420 == t.storeId &&
                                e(s).find(".feature-row__image-wrapper").length
                              )
                                e(s)
                                  .find(".feature-row__image-wrapper")
                                  .append(a),
                                  (r = !0);
                              else if (
                                6918 == t.storeId &&
                                e(s).hasClass("grid-product__content")
                              )
                                e(s)
                                  .find(".grid-product__image-mask")
                                  .append(a),
                                  (r = !0);
                              else if (
                                5420 == t.storeId &&
                                e(s).closest(".slide-img").length
                              )
                                e(s).closest(".slide-img").prepend(a), (r = !0);
                              else if (
                                6684 == t.storeId &&
                                e(s).hasClass("rimage-wrapper")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (7012 == t.storeId) {
                                if (
                                  "collections" == i &&
                                  e(s).hasClass("product-grid-item")
                                ) {
                                  let t = e(s).find(
                                    ".responsive-image__wrapper"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                }
                                if (
                                  e(s).hasClass("product-grid-item") ||
                                  e(s).parent().hasClass("product-grid-item")
                                ) {
                                  let t = e(s).find(
                                    ".responsive-image__wrapper"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (
                                7650 == t.storeId &&
                                e(s).find(".snize-thumbnail-wrapper").length
                              )
                                e(s).find(".snize-thumbnail-wrapper").append(a),
                                  (r = !0);
                              else if (
                                8008 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("product-media-container")
                              )
                                e(s).closest(".flickity-viewport").prepend(a),
                                  (r = !0);
                              else if (
                                7832 == t.storeId &&
                                "collections" == i &&
                                e(s).hasClass("reveal")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (1541 == t.storeId) {
                                if (e(s).hasClass("grid-product__content")) {
                                  let t = e(s).find(
                                    ".grid-product__image-mask"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                }
                                if (
                                  "products" == i &&
                                  e(s).hasClass("cbb-also-bought-product")
                                ) {
                                  let t = e(s).find(
                                    ".cbb-also-bought-product-image-link"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (8075 == t.storeId)
                                "products" == i &&
                                e(s).hasClass("pg__main__link img-container")
                                  ? (e(s).prepend(a), (r = !0))
                                  : e(s).hasClass("item__top por") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (8131 == t.storeId)
                                "products" == i &&
                                  e(s).hasClass("rimage-wrapper") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (7723 == t.storeId)
                                "products" == i &&
                                  e(s).hasClass("box--product-image") &&
                                  (e(s).closest(".flickity-slider").prepend(a),
                                  (r = !0));
                              else if (5180 == t.storeId)
                                "collections" == i &&
                                  e(s).hasClass(
                                    "overflow-h pro-im position-r"
                                  ) &&
                                  e(s).find(
                                    ".display-in-b.full-width.overflow-h"
                                  ).length &&
                                  (e(s)
                                    .find(".display-in-b.full-width.overflow-h")
                                    .prepend(a),
                                  (r = !0)),
                                  "products" == i &&
                                    e(s).closest(".fotorama__stage").length &&
                                    (e(s)
                                      .closest(".fotorama__stage")
                                      .prepend(a),
                                    (r = !0));
                              else if (8295 == t.storeId)
                                "products" == i &&
                                e(s).closest(".item-picture.slick-slide").length
                                  ? (e(s)
                                      .closest(".item-picture.slick-slide")
                                      .prepend(a),
                                    (r = !0))
                                  : (e(s).closest(".product-top").prepend(a),
                                    (r = !0));
                              else if (8473 == t.storeId)
                                "collections" == i &&
                                  e(s).hasClass("prod-image") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (7404 == t.storeId)
                                e(s).hasClass(
                                  "snize-product snize-product-in-stock snize-product-vendor-panther-wholesale"
                                )
                                  ? (e(s)
                                      .find(".snize-thumbnail-wrapper")
                                      .prepend(a),
                                    (r = !0))
                                  : "products" == i &&
                                    e(s).parent().hasClass("swiper-slide") &&
                                    (e(s).parent().prepend(a), (r = !0));
                              else if (7084 == t.storeId)
                                if ("collections" == i) {
                                  if (
                                    e(s).hasClass("grid-view-item product-card")
                                  ) {
                                    var C = e(s).find(
                                      ".product-card__image-with-placeholder-wrapper"
                                    );
                                    C.length && (C.prepend(a), (r = !0));
                                  }
                                } else
                                  "products" == i &&
                                    "products" == i &&
                                    e(s).hasClass("product-single__media") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                5931 == t.storeId &&
                                e(s).hasClass("zoom-effect--inner")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                7300 == t.storeId &&
                                "collections" == i &&
                                e(s).hasClass("product-container")
                              ) {
                                let t = e(s).find(".product_right_tag");
                                t.length && (t.before(a), (r = !0));
                              } else if (
                                8844 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("tt-product-single-img")
                              )
                                e(s).append(a), (r = !0);
                              else if (
                                7187 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("AspectRatio--withFallback")
                              ) {
                                let t = e(s).closest(
                                  ".Product__Slideshow--zoomable"
                                );
                                t.length &&
                                  (t.find(".bss_pl_img").length ||
                                    t.prepend(a)),
                                  (r = !0);
                              } else if (9250 == t.storeId) {
                                if (
                                  "collections" == i &&
                                  e(s).hasClass("product-card")
                                ) {
                                  let t = e(s).find(
                                    ".product-card__image-with-placeholder-wrapper"
                                  );
                                  t.length && (t.append(a), (r = !0));
                                }
                                if ("products" == i) {
                                  if (e(s).hasClass("product-single__media")) {
                                    let t = e(s).closest(
                                      ".product-single__media-group"
                                    );
                                    t.length && (t.append(a), (r = !0));
                                  }
                                  if (e(s).hasClass("grid-view-item")) {
                                    let t = e(s).find(
                                      ".product-card__image-with-placeholder-wrapper"
                                    );
                                    t.length && (t.append(a), (r = !0));
                                  }
                                }
                                "" == i &&
                                  e(s).hasClass(
                                    "grid-view-item product-card"
                                  ) &&
                                  (e(s).prepend(a), (r = !0));
                              } else if (8696 == t.storeId) {
                                if (
                                  "collections" == i &&
                                  e(s).hasClass("grid-product__content")
                                ) {
                                  let t = e(s).find(
                                    ".grid-product__image-mask"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                }
                                if (
                                  "/search" == window.location.pathname &&
                                  e(s).hasClass("grid-product__content")
                                ) {
                                  let t = e(s).find(
                                    ".grid-product__image-mask"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (
                                7896 == t.storeId &&
                                e(s).hasClass("product-single__media")
                              )
                                e(s)
                                  .closest(".swiper-parent.grid.product-single")
                                  .find(".swiper-slide").length &&
                                  (e(s)
                                    .closest(
                                      ".swiper-parent.grid.product-single"
                                    )
                                    .find(".swiper-slide")
                                    .prepend(a),
                                  (r = !0));
                              else if (-1 !== [9806, 9808].indexOf(t.storeId))
                                "products" == i &&
                                  e(s).hasClass("shg-product-image-wrapper") &&
                                  (e(s).append(a), (r = !0)),
                                  "collections" == i &&
                                    e(s)
                                      .parent()
                                      .hasClass("product-list-item") &&
                                    (e(s).append(a), (r = !0));
                              else if (9005 == t.storeId)
                                "products" == i
                                  ? e(s).hasClass("prod-zoom") &&
                                    (e(s).prepend(a), (r = !0))
                                  : e(s).hasClass(
                                      "snize-product-vendor-cdkeys-israel"
                                    ) && (e(s).prepend(a), (r = !0));
                              else if (9033 == t.storeId) {
                                if (
                                  e(s).hasClass("product") ||
                                  e(s).hasClass("product__image-inner")
                                ) {
                                  let t = e(s).find(".product__image");
                                  t &&
                                    (e(t).css("position", "relative"),
                                    e(t).prepend(a)),
                                    (r = !0);
                                }
                              } else if (9052 == t.storeId)
                                e(s).closest("article.product-item").length &&
                                  (e(s)
                                    .closest("article.product-item")
                                    .prepend(a),
                                  (r = !0));
                              else if (9192 == t.storeId)
                                e(s).hasClass("shop-prod-inner") &&
                                  e(s).find(".prod_img").length &&
                                  (e(s).find(".prod_img").prepend(a), (r = !0));
                              else if (9163 == t.storeId)
                                e(s).hasClass("product-wrap")
                                  ? (e(s)
                                      .find(".relative.product_image")
                                      .prepend(a),
                                    (r = !0))
                                  : e(s)
                                      .parent()
                                      .hasClass("image__container") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (568 == t.storeId) {
                                if (
                                  (e(s).hasClass("product-index") &&
                                    (e(s)
                                      .find(".reveal.square-images")
                                      .prepend(a),
                                    (r = !0)),
                                  "products" == i &&
                                    e(s).hasClass("product-media-container") &&
                                    (e(s).prepend(a), (r = !0)),
                                  "" == i && e(s).hasClass("section-heading"))
                                ) {
                                  let t = e(s).closest(".product__section");
                                  if (t.length) {
                                    let e = t.find(".image-slide");
                                    e.length && (e.prepend(a), (r = !0));
                                  }
                                }
                              } else if (3060 == t.storeId && "" == i)
                                e(s).hasClass("relative") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (9639 == t.storeId)
                                (e(s).hasClass("product-page--media") ||
                                  e(s).hasClass("product--image")) &&
                                  (e(s).find(".image--container").prepend(a),
                                  (r = !0)),
                                  e(s).hasClass("image--container") &&
                                    "products" == i &&
                                    (e(s).prepend(a), (r = !0));
                              else if (9667 == t.storeId) {
                                if (
                                  (e(s).hasClass(
                                    "product-single__media-wrapper"
                                  ) &&
                                    "products" == i &&
                                    (e(s).append(a), (r = !0)),
                                  e(s).hasClass("product-thumb"))
                                ) {
                                  let t = e(s).find(".product-thumb-img-wrap");
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (
                                9826 == t.storeId &&
                                "collections" == i &&
                                e(s).hasClass("grid__item")
                              ) {
                                let t = e(s).find(".product-card__image");
                                t.length && (t.prepend(a), (r = !0));
                              } else if (9562 == t.storeId)
                                "products" == i
                                  ? e(s).hasClass("active") &&
                                    e(s).closest(".gallery").length &&
                                    (e(s).closest(".gallery").prepend(a),
                                    (r = !0))
                                  : e(s).hasClass("card--default") &&
                                    e(s).find(".card__img--ratio").length &&
                                    (e(s).find(".card__img--ratio").prepend(a),
                                    (r = !0));
                              else if (9507 == t.storeId) {
                                if (
                                  "products" == i &&
                                  e(s).hasClass("photo-zoom-link")
                                ) {
                                  let t = e(s).closest(
                                    ".product__main-photos.aos-init.aos-animate"
                                  );
                                  t.find(".bss_pl_img").length || t.prepend(a),
                                    (r = !0);
                                }
                                if (e(s).hasClass("grid-product__content")) {
                                  let t = e(s).find(".image-wrap");
                                  t.length > 0 && (t.prepend(a), (r = !0));
                                }
                              } else if (3666 == t.storeId)
                                "products" == i
                                  ? e(s).hasClass("product-form--root") &&
                                    e(s)
                                      .closest(".product-page--main-content")
                                      .find(".modal--root").length &&
                                    (e(s)
                                      .closest(".product-page--main-content")
                                      .find(".modal--root")
                                      .prepend(a),
                                    (r = !0))
                                  : e(s).hasClass("product--root") &&
                                    e(s).find(".product--image").length &&
                                    (e(s).find(".product--image").prepend(a),
                                    (r = !0));
                              else if (9703 == t.storeId) {
                                if (
                                  e(s).hasClass(
                                    "FeaturedImage-product-template"
                                  )
                                ) {
                                  let t = e(s).closest(
                                    "#product-images-product-template"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (10002 == t.storeId)
                                "products" == i &&
                                  e(s).hasClass(
                                    "product-single__media--image"
                                  ) &&
                                  (e(s).prepend(a), (r = !0));
                              else if (6053 == t.storeId) {
                                if (e(s).hasClass("ProductItem__Wrapper")) {
                                  let t = e(s).find(".AspectRatio--square");
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (8624 == t.storeId)
                                "products" == i &&
                                  e(s).hasClass("flex-active-slide") &&
                                  (e(s).prepend(a), (r = !0));
                              else if (
                                9896 == t.storeId &&
                                "products" == i &&
                                e(s).hasClass("slick-slide")
                              ) {
                                let t = e(s).closest(
                                  ".col-md-5.aside.aside-fixed"
                                );
                                t &&
                                  !e(t).find(".bss_pl_img").length &&
                                  (e(t).prepend(a), (r = !0));
                              } else if (10224 == t.storeId) {
                                if (
                                  "products" == i &&
                                  e(s).hasClass("product-single__thumbnail")
                                ) {
                                  let t = e(s).closest(
                                    ".product-single__photos.right"
                                  );
                                  t &&
                                    !e(t).find(".bss_pl_img").length &&
                                    (e(t).prepend(a), (r = !0));
                                }
                              } else if (2805 == t.storeId) {
                                if (
                                  e(s)
                                    .parent()
                                    .hasClass("product-form--regular")
                                ) {
                                  let t = e(s)
                                    .closest(".featured-product--inner")
                                    .find(".product-gallery");
                                  t.length && (t.prepend(a), (r = !0));
                                }
                              } else if (
                                6202 == t.storeId &&
                                e(s).hasClass("snize-product")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (10147 == t.storeId) {
                                if (
                                  "collections" == i &&
                                  e(s).closest(".grid-view-item.product-card")
                                    .length
                                ) {
                                  let t = e(s)
                                    .closest(".grid-view-item.product-card")
                                    .find(
                                      ".product-card__image-with-placeholder-wrapper"
                                    );
                                  t.length && (t.prepend(a), (r = !0));
                                } else if (
                                  e(s).hasClass("predictive-search-item")
                                ) {
                                  let t = e(s).find(
                                    ".predictive-search__column--image"
                                  );
                                  t.length && (t.prepend(a), (r = !0));
                                } else
                                  "products" == i &&
                                    e(s).hasClass("text-link") &&
                                    (e(s)
                                      .closest(".grid__item")
                                      .find(".product-single__media")
                                      .prepend(a),
                                    (r = !0));
                                "products" == i && (e(s).prepend(a), (r = !0));
                              } else if (7559 == t.storeId && "products" == i)
                                e(s).parent().hasClass("rondell-container") &&
                                  (e(s).prepend(a), (r = !0)),
                                  e(s).hasClass("rondell-item-crop") &&
                                    (e(s).prepend(a), (r = !0));
                              else if (
                                164 == t.storeId &&
                                e(s).closest(
                                  ".snize-search-results-main-content"
                                ).length
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                164 == t.storeId &&
                                e(s).hasClass("aspect-ratio") &&
                                e(s)
                                  .parent()
                                  .hasClass("product-gallery__size-limiter")
                              )
                                e(s).prepend(a), (r = !0);
                              else if (
                                10240 != t.storeId ||
                                ("collections" != i &&
                                  "/pages/search-results-page" !=
                                    window.location.pathname) ||
                                !e(s).hasClass("snize-product")
                              )
                                if (
                                  10608 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("image-wrap")
                                )
                                  e(s).closest(".flickity-viewport").length &&
                                    (e(s)
                                      .closest(".flickity-viewport")
                                      .prepend(a),
                                    (r = !0));
                                else if (8172 == t.storeId) {
                                  if (
                                    e(s).hasClass(
                                      "AspectRatio--withFallback"
                                    ) &&
                                    "products" == i
                                  ) {
                                    let t = e(s).closest(
                                      ".Product__Slideshow--zoomable"
                                    );
                                    t.length &&
                                      0 == t.find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (
                                  3441 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("AspectRatio")
                                )
                                  e(s).prepend(a), (r = !0);
                                else if (9704 == t.storeId && "products" == i)
                                  e(s).hasClass(
                                    "cbb-frequently-bought-product"
                                  ) && (e(s).prepend(a), (r = !0));
                                else if (10625 == t.storeId && "products" == i)
                                  e(s).hasClass("swiper-zoom-container") &&
                                    (e(s).prepend(a), (r = !0));
                                else if (6372 == t.storeId)
                                  e(s).hasClass("snize-product") &&
                                    (e(s)
                                      .find(".snize-thumbnail-wrapper")
                                      .prepend(a),
                                    (r = !0));
                                else if (10839 == t.storeId && "products" == i)
                                  e(s).hasClass("photo-zoom-link") &&
                                    (e(s).prepend(a), (r = !0));
                                else if (
                                  2518 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("AspectRatio")
                                )
                                  e(s).prepend(a), (r = !0);
                                else if (10688 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("rimage-wrapper")
                                  ) {
                                    let t = e(s).closest(".slick-list");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                  "" == i &&
                                    e(s).hasClass("global-border-radius") &&
                                    e(s)
                                      .parent()
                                      .hasClass(
                                        "product-block__image-container"
                                      ) &&
                                    (e(s).prepend(a), (r = !0));
                                } else if (
                                  10772 == t.storeId &&
                                  "products" == i
                                ) {
                                  if (e(s).hasClass("shows-lightbox")) {
                                    let t = e(s).closest(".main-image-wrapper");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                  if (
                                    (e(s).hasClass("slick-slide") &&
                                      e(s).closest(".slick-list").length &&
                                      (e(s).closest(".slick-list").prepend(a),
                                      (r = !0)),
                                    e(s).hasClass("boxx-list-item"))
                                  ) {
                                    let t = e(s).find(".boxx-image-container");
                                    t.length &&
                                      !t.find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (7807 == t.storeId)
                                  "products" == i &&
                                    e(s).hasClass("rondell-item-crop") &&
                                    e(s)
                                      .parent()
                                      .hasClass(
                                        "rondell-item rondell-item-focused labelfied"
                                      ) &&
                                    (e(s).prepend(a), (r = !0));
                                else if (6144 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("AspectRatio--withFallback")
                                  )
                                    e(s).prepend(a);
                                  else if (
                                    e(s).hasClass("ProductItem__Wrapper")
                                  ) {
                                    e(s).prepend(a);
                                    let t = e(s).closest(".ShopTheLook__Inner");
                                    if (t.length) {
                                      let s = e(t).find(
                                        ".AspectRatio--withFallback"
                                      );
                                      s.length && e(s).prepend(a);
                                    }
                                  }
                                  r = !0;
                                } else if (
                                  3096 == t.storeId &&
                                  e(s).hasClass("product-thumbnail__title")
                                ) {
                                  let t = e(s)
                                    .parent()
                                    .parent()
                                    .parent()
                                    .find(
                                      ".product-gallery__main.flickity-enabled.flickity-resize"
                                    );
                                  t.length && (e(t).prepend(a), (r = !0));
                                } else if (9006 == t.storeId)
                                  "Column" == e(s).attr("data-pf-type") &&
                                    (r = !0);
                                else if (10925 == t.storeId)
                                  "collections" == i &&
                                    e(s).hasClass("product") &&
                                    e(s).find(".image").length &&
                                    (e(s).find(".image").prepend(a), (r = !0)),
                                    "products" == i &&
                                      e(s).hasClass("swiper-zoom-container") &&
                                      (e(s).prepend(a), (r = !0));
                                else if (10795 == t.storeId && "products" == i)
                                  e(s).hasClass("rondell-item") &&
                                    (e(s).prepend(a), (r = !0)),
                                    e(s).hasClass("rondell-item-crop") &&
                                      (e(s).prepend(a), (r = !0));
                                else if (
                                  11087 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("mz-figure")
                                )
                                  e(s).prepend(a), (r = !0);
                                else if (
                                  11086 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("image--container")
                                )
                                  e(s).prepend(a), (r = !0);
                                else if (
                                  5015 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("image-wrap")
                                ) {
                                  let t = e(s).closest(".slick-list.draggable");
                                  t.length && (t.prepend(a), (r = !0));
                                } else if (
                                  11457 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass(
                                    "product-single__photo__item product-single__photo__item--image"
                                  )
                                ) {
                                  let t = e(s).closest(".slick-list.draggable");
                                  t.length && (t.prepend(a), (r = !0));
                                } else if (11552 == t.storeId) {
                                  if (
                                    ("/pages/search-results-page" ==
                                      window.location.pathname ||
                                      "products" == i) &&
                                    e(s).hasClass("snize-product")
                                  ) {
                                    let t = e(s).find(
                                      ".snize-thumbnail-wrapper"
                                    );
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                } else if (11446 == t.storeId) {
                                  if (
                                    ("collections" == i || "" == i) &&
                                    e(s).hasClass("product-item")
                                  ) {
                                    let t = e(s).find(".aspect-ratio");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                  if (
                                    "products" == i &&
                                    (e(s).hasClass("bss-fix-recommendations") &&
                                      (e(s).prepend(a), (r = !0)),
                                    e(s).hasClass("bss-fix-all-image"))
                                  ) {
                                    let t = e(s)
                                      .closest(
                                        ".product-gallery__carousel-wrapper"
                                      )
                                      .find(".aspect-ratio");
                                    t.length &&
                                      !t.find("bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (
                                  8700 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("image-container")
                                )
                                  e(s).prepend(a), (r = !0);
                                else if (11819 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("rimage")
                                  ) {
                                    let t = e(s).closest(".slick-list");
                                    t.length &&
                                      !t.find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                  var w;
                                  if (
                                    "collections" == i &&
                                    e(s).hasClass("product-collection__image")
                                  )
                                    (w = e(s).closest(
                                      'form[action="/cart/add"]'
                                    )).length && (w.prepend(a), (r = !0)),
                                      setTimeout(() => {
                                        var t = e(s).find(".bss_pl_img");
                                        t.length && t.remove();
                                      }, 220);
                                } else if (
                                  11713 == t.storeId &&
                                  "products" == i
                                ) {
                                  if (e(s).hasClass("rondell-item-crop")) {
                                    let t = e(s)
                                      .closest(".product-images")
                                      .find(".rondell-item-crop");
                                    t.length > 0 &&
                                      !t.eq(0).find(".bss_pl_img").length &&
                                      (t.eq(0).prepend(a), (r = !0));
                                  }
                                } else if (
                                  11300 == t.storeId &&
                                  "products" == i
                                )
                                  e(s).hasClass(
                                    "product-single__media-wrapper"
                                  ) && (e(s).prepend(a), (r = !0));
                                else if (11810 == t.storeId) {
                                  if (
                                    e(s)
                                      .parent()
                                      .parent()
                                      .hasClass("slick-slide slick-active")
                                  ) {
                                    let t = e(s).closest(".aside-content");
                                    if (t.length) {
                                      let s = e(t).find(
                                        ".prd-block_main-image"
                                      );
                                      s.length && e(s).prepend(a);
                                    }
                                  }
                                  "products" == i &&
                                    e(s).hasClass("product__media") &&
                                    (e(s)
                                      .closest(".product__media-list")
                                      .find(".product__media")
                                      .prepend(a),
                                    (r = !0)),
                                    "products" == i &&
                                      e(s).hasClass("card-information__text") &&
                                      (e(s)
                                        .closest(".card-wrapper")
                                        .find(".media")
                                        .prepend(a),
                                      (r = !0)),
                                    ("collections" != i &&
                                      "/search" != window.location.pathname) ||
                                      !e(s).hasClass(
                                        "card-information__text"
                                      ) ||
                                      (e(s)
                                        .closest(".card-wrapper")
                                        .find(".media--transparent")
                                        .prepend(a),
                                      (r = !0));
                                } else if (
                                  11810 == t.storeId &&
                                  e(s)
                                    .parent()
                                    .parent()
                                    .hasClass("slick-slide slick-active")
                                ) {
                                  let t = e(s).closest(".aside-content");
                                  if (t.length) {
                                    let s = e(t).find(".prd-block_main-image");
                                    s.length && e(s).prepend(a);
                                  }
                                  "products" == i &&
                                    e(s).hasClass("product__media") &&
                                    (e(s)
                                      .closest(".product__media-list")
                                      .find(".product__media")
                                      .prepend(a),
                                    (r = !0)),
                                    ("collections" != i &&
                                      "/search" != window.location.pathname) ||
                                      !e(s).hasClass(
                                        "card-information__text"
                                      ) ||
                                      (e(s)
                                        .closest(".card-wrapper")
                                        .find(".media--transparent")
                                        .prepend(a),
                                      (r = !0));
                                } else if (10279 == t.storeId) {
                                  if (
                                    ("collections" == i ||
                                      "/search" == window.location.pathname) &&
                                    e(s).hasClass("grid-product__content")
                                  ) {
                                    let t = e(s).find(
                                      ".grid-product__image-mask"
                                    );
                                    t.length > 0 && (t.prepend(a), (r = !0));
                                  }
                                } else if (11541 == t.storeId)
                                  "products" == i &&
                                    e(s).hasClass(
                                      "product-single__photo__item product-single__photo__item--image"
                                    ) &&
                                    (e(s).prepend(a), (r = !0));
                                else if (9493 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("lazy-image")
                                  ) {
                                    let t = e(s)
                                      .closest(".product__slides")
                                      .find(".lazy-image");
                                    t.length > 0 &&
                                      !t.find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (6244 == t.storeId)
                                  "products" == i &&
                                    e(s).hasClass("image-wrap") &&
                                    e(s).closest(
                                      ".slick-initialized.slick-slider"
                                    ).length &&
                                    (e(s)
                                      .closest(
                                        ".slick-initialized.slick-slider"
                                      )
                                      .prepend(a),
                                    (r = !0));
                                else if (12033 == t.storeId) {
                                  if (
                                    ("collections" == i || "" == i) &&
                                    e(s).hasClass("product--root")
                                  ) {
                                    let t = e(s).find(".product--image");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("image--container") &&
                                    e(s).closest(".product-page--media").length
                                  ) {
                                    let t = e(s)
                                      .closest(".product-page--media")
                                      .find(".product-media--featured");
                                    t.length > 0 && (t.prepend(a), (r = !0));
                                  }
                                } else if (7027 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    "MasterImage" == e(s).attr("data-pf-type")
                                  ) {
                                    let t = e(s).find(
                                      '[data-pf-type="ProductImagePagination"]'
                                    );
                                    t.length && (t.before(a), (r = !0));
                                  }
                                } else if (
                                  11863 == t.storeId &&
                                  "products" == i
                                )
                                  e(s).hasClass("rimage-wrapper") &&
                                    (e(s).prepend(a), (r = !0));
                                else if (12229 == t.storeId) {
                                  if ("products" == i) {
                                    if (
                                      e(s).closest(".featured-image__container")
                                        .length > 0
                                    ) {
                                      let t = e(s)
                                        .closest(".featured-image__container")
                                        .find(".product-single__photo");
                                      t.length > 0 && (t.prepend(a), (r = !0));
                                    }
                                    if (e(s).hasClass("slick-track")) {
                                      let t = e(s).closest(".slick-list");
                                      t.length && (t.prepend(a), (r = !0));
                                    }
                                    e(s).hasClass("product_image") &&
                                      (e(s).before(a), (r = !0));
                                  }
                                  if (
                                    "/cart" == window.location.pathname &&
                                    e(s).hasClass("cart__row")
                                  ) {
                                    let t = e(s).find(".cart__image-wrapper");
                                    t.length > 0 && (t.prepend(a), (r = !0));
                                  }
                                } else if (
                                  -1 !==
                                  [
                                    10503, 12408, 14691, 14692, 14693, 14694,
                                    14695,
                                  ].indexOf(t.storeId)
                                )
                                  "products" == i
                                    ? (e(s).hasClass(
                                        "AspectRatio AspectRatio--withFallback"
                                      ) && (e(s).prepend(a), (r = !0)),
                                      -1 !==
                                        [
                                          12408, 14691, 14692, 14693, 14694,
                                          14695,
                                        ].indexOf(t.storeId) &&
                                        e(s).hasClass("ProductItem__Wrapper") &&
                                        e(s).find(".AspectRatio").length &&
                                        (e(s).find(".AspectRatio").prepend(a),
                                        (r = !0)))
                                    : e(s).hasClass("ProductItem__Wrapper") &&
                                      e(s).find(".AspectRatio").length &&
                                      (e(s).find(".AspectRatio").prepend(a),
                                      (r = !0));
                                else if (6876 == t.storeId && "products" == i)
                                  e(s).hasClass(
                                    "product-single__media-wrapper"
                                  ) && (e(s).prepend(a), (r = !0));
                                else if (7470 == t.storeId)
                                  "products" == i &&
                                    e(s).hasClass("image-wrap") &&
                                    (e(s).prepend(a), (r = !0));
                                else if (5304 == t.storeId)
                                  "products" == i &&
                                    e(s).hasClass(
                                      "AspectRatio AspectRatio--withFallback"
                                    ) &&
                                    (e(s).prepend(a), (r = !0));
                                else if (
                                  11867 == t.storeId ||
                                  12623 == t.storeId
                                )
                                  "products" == i
                                    ? (e(s).hasClass("rimage") &&
                                        e(s)
                                          .parent()
                                          .hasClass(
                                            "product-gallery__blockratio_content"
                                          ) &&
                                        e(s).prepend(a),
                                      e(s).hasClass(
                                        "product-collection__image"
                                      ) &&
                                        (e(s)
                                          .closest('form[action="/cart/add"]')
                                          .prepend(a),
                                        (r = !0)))
                                    : e(s).hasClass(
                                        "product-collection__image"
                                      ) &&
                                      (e(s)
                                        .closest('form[action="/cart/add"]')
                                        .prepend(a),
                                      (r = !0));
                                else if (10326 == t.storeId) {
                                  if (
                                    ("products" == i &&
                                      e(s).hasClass("mz-figure") &&
                                      (e(s).prepend(a), (r = !0)),
                                    "collections" == i &&
                                      e(s).hasClass(
                                        "boost-pfs-filter-product-item-inner"
                                      ))
                                  ) {
                                    let t = e(s).find(
                                      ".boost-pfs-filter-product-item-image"
                                    );
                                    t.length > 0 &&
                                      !e(t).find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (6378 == t.storeId && "products" == i)
                                  e(s).parent().hasClass("primary-image") &&
                                    (e(s).prepend(a), (r = !0));
                                else if (7637 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("image-wrap") &&
                                    e(s).closest(".product__main-photos")
                                  ) {
                                    let t = e(s)
                                      .closest(".product__main-photos")
                                      .find(".product-image-main");
                                    t.length > 0 && (t.prepend(a), (r = !0));
                                  }
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("grid-product__content")
                                  ) {
                                    let t = e(s).find(
                                      ".grid-product__image-mask"
                                    );
                                    t.length > 0 && (t.prepend(a), (r = !0));
                                  }
                                } else if (
                                  12150 == t.storeId &&
                                  "products" == i
                                )
                                  e(s).hasClass(
                                    "p-sgl__photo--product-template"
                                  ) &&
                                    e(s).closest(
                                      ".p-sgl__photos-item.gallery-image"
                                    ) &&
                                    (e(s)
                                      .closest(
                                        ".p-sgl__photos-item.gallery-image"
                                      )
                                      .prepend(a),
                                    (r = !0));
                                else if (11662 == t.storeId)
                                  setTimeout(() => {
                                    if ("products" == i) {
                                      if (
                                        e(s).hasClass(
                                          "product-photo-thumb product-photo-thumb-product-template"
                                        )
                                      ) {
                                        let t = e(s).closest(
                                          ".grid-item.large--eleven-twelfths.text-center"
                                        );
                                        if (t.length) {
                                          let s = e(t).find(
                                            ".product-photo-container.main-image-slider.flexslider"
                                          );
                                          s.length &&
                                            (e(s).prepend(a), (r = !0));
                                        }
                                      }
                                    } else if (
                                      e(s).hasClass(
                                        "product-grid-image--centered"
                                      )
                                    ) {
                                      let t = e(s).find(
                                        ".lazyload__image-wrapper.no-js.qimify-product-container"
                                      );
                                      t.length && (e(t).prepend(a), (r = !0));
                                    }
                                  }, 2e3);
                                else if (2072 == t.storeId)
                                  "collections" == i
                                    ? e(s).hasClass("thumbnail") &&
                                      (e(s).prepend(a), (r = !0))
                                    : "products" == i &&
                                      e(s).hasClass(
                                        "product-big-image can-zoom"
                                      ) &&
                                      (e(s).prepend(a), (r = !0));
                                else if (12302 == t.storeId) {
                                  if (
                                    e(s).hasClass("image__container") &&
                                    "products" == i
                                  ) {
                                    let t = e(s)
                                      .closest(".product_gallery")
                                      .find(".image__container");
                                    t.length > 0 && (t.prepend(a), (r = !0));
                                  }
                                } else if (12351 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("AspectRatio--withFallback")
                                  ) {
                                    let t = e(s).closest(".flickity-viewport");
                                    t.length > 0 &&
                                      !t.find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0)),
                                      setTimeout(() => {
                                        let t = e(s).find(".bss_pl_img");
                                        t.length && t.remove();
                                      }, 220);
                                  }
                                } else if (12579 == t.storeId) {
                                  if (
                                    ("products" == i &&
                                      e(s).hasClass("img-container") &&
                                      (e(s).prepend(a), (r = !0)),
                                    "collections" == i &&
                                      e(s).hasClass("item__top"))
                                  ) {
                                    let t = e(s).find(".img-container");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                } else if (12519 == t.storeId) {
                                  if (
                                    (e(s).hasClass("fancybox") &&
                                      e(s).attr("data-fancybox-group") &&
                                      (e(s).parent().prepend(a), (r = !0)),
                                    "products" == i &&
                                      e(s).hasClass("one-third"))
                                  ) {
                                    let t = e(s).find(".product_image");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                } else if (7028 == t.storeId) {
                                  if ("products" == i) {
                                    let t = e(s).closest(".flickity-viewport");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                } else if (
                                  12501 == t.storeId &&
                                  "products" == i
                                ) {
                                  let t = e(s)
                                    .closest(
                                      ".product-single__thumbnails.grid-uniform"
                                    )
                                    .parent()
                                    .find(".product-single__photos");
                                  t.length && (t.prepend(a), (r = !0)),
                                    e(s).hasClass(
                                      "apb_text_columns_with_images_block_container"
                                    ) &&
                                      (e(s)
                                        .closest(
                                          ".apb_text_columns_with_images_block_item"
                                        )
                                        .find(
                                          ".apb_text_columns_with_images_block_link"
                                        )
                                        .append(a),
                                      (r = !0)),
                                    e(s).hasClass(
                                      "apb_product_detail_swiper_list"
                                    ) && (e(s).parent().prepend(a), (r = !0));
                                } else if (12824 == t.storeId) {
                                  if (
                                    "collections" == i &&
                                    e(s).hasClass("indiv-product")
                                  ) {
                                    let t = e(s).find(".aspect-ratio");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                  "products" == i &&
                                    e(document).on(
                                      "click",
                                      ".product-single__thumbnail__image",
                                      function (e) {
                                        setTimeout(function () {
                                          document.querySelector(
                                            ".product-single__media__image[data-handle]"
                                          ) &&
                                            document
                                              .querySelectorAll(
                                                ".product-single__media__image"
                                              )
                                              .forEach(function (e) {
                                                -1 ==
                                                  e.innerHTML.indexOf(
                                                    "bss_pl_img"
                                                  ) &&
                                                  ((e.innerHTML =
                                                    a + e.innerHTML),
                                                  (r = !0));
                                              });
                                        }, 500);
                                      }
                                    );
                                } else if (1818 == t.storeId)
                                  "" == i &&
                                    e(s).hasClass("lh-collection-thumb") &&
                                    (e(s).prepend(a), (r = !0));
                                else if (12620 == t.storeId) {
                                  if (
                                    "collections" == i &&
                                    e(s).hasClass("ProductItem__Wrapper")
                                  ) {
                                    let t = e(s).find(
                                      ".AspectRatio--withFallback"
                                    );
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                  "products" == i &&
                                    e(s).hasClass(
                                      "AspectRatio--withFallback"
                                    ) &&
                                    (e(s).prepend(a), (r = !0));
                                } else if (12830 == t.storeId)
                                  "products" == i &&
                                    e(s).hasClass(
                                      "photo-zoom-link photo-zoom-link--enable"
                                    ) &&
                                    (e(s)
                                      .closest(".slick-list.draggable")
                                      .prepend(a),
                                    (r = !0));
                                else if (9296 == t.storeId)
                                  "products" == i &&
                                    e(s).hasClass(
                                      "product-single__media-wrapper"
                                    ) &&
                                    (e(s).prepend(a), (r = !0));
                                else if (18874 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("product__media")
                                  ) {
                                    let t = e(s).closest(
                                        ".product__modal-opener"
                                      ),
                                      i = e(s).closest(".product__media-list");
                                    !t.length ||
                                      t.find(".bss_pl_img").length ||
                                      i.find(".bss_pl_img").length ||
                                      (t.prepend(a), (r = !0));
                                  }
                                  if (
                                    ("collections" == i ||
                                      "/search" == window.location.pathname ||
                                      "/" == window.location.pathname) &&
                                    e(s).hasClass("card-information__text")
                                  ) {
                                    let t = e(s)
                                      .closest(".grid__item")
                                      .find(".card__inner");
                                    t.length &&
                                      !t.find(".bss_pb_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (
                                  5754 == t.storeId &&
                                  "products" == i
                                ) {
                                  if (e(s).hasClass("image__container")) {
                                    let t = e(s)
                                      .closest(".flickity-viewport")
                                      .find(".image__container");
                                    t.length > 0 &&
                                      !t.find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                  if (e(s).hasClass("ctl-product-component")) {
                                    let t = e(s).find(".cell-asset-image");
                                    t.length && (t.prepend(a), (r = !0));
                                  }
                                } else if (
                                  12582 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("aspect-ratio")
                                ) {
                                  let t = e(s)
                                    .closest(".flickity-viewport")
                                    .find(".aspect-ratio");
                                  t.length > 0 &&
                                    !t.find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                } else if (
                                  12376 == t.storeId &&
                                  "products" == i
                                )
                                  e(s).hasClass("image-wrap") &&
                                    (e(s).prepend(a), (r = !0));
                                else if (
                                  5102 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("imgWrapper")
                                ) {
                                  let t = e(s)
                                    .closest(".prod-large-img")
                                    .find(".imgWrapper");
                                  t.length > 0 &&
                                    !t.find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                } else if (
                                  13011 == t.storeId &&
                                  "/search" == window.location.pathname &&
                                  e(s).hasClass("products_list_inner")
                                ) {
                                  let t = e(s).find(".layer-media");
                                  t.length &&
                                    (t.css("position", "relative"),
                                    t.prepend(a),
                                    (r = !0));
                                } else if (
                                  10583 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("image-wrap")
                                ) {
                                  let t = e(s).closest(".product-image-main");
                                  t.length && (t.prepend(a), (r = !0));
                                } else if (12969 == t.storeId) {
                                  if (
                                    "collections" == i &&
                                    e(s).hasClass("product-card__title")
                                  ) {
                                    let t = e(s)
                                      .closest(".halo-column__item")
                                      .find(".product-card__image");
                                    t.length &&
                                      !t.find(".bss_pb_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                  if (
                                    "products" == i &&
                                    e(s).hasClass("product-single__photo")
                                  )
                                    if (e(document).width() < 600) {
                                      let t = e(s).closest(
                                        ".product-single__photos-wrapper"
                                      );
                                      t.length > 0 &&
                                        !t.find(".bss_pl_img").length &&
                                        (t.prepend(a), (r = !0));
                                    } else e(s).parent().prepend(a), (r = !0);
                                  "" == i &&
                                    e(s)
                                      .parent()
                                      .hasClass("product-card__gallery") &&
                                    (e(s).prepend(a), (r = !0)),
                                    "/pages/search-results-page" ==
                                      window.location.pathname &&
                                      e(s).hasClass("snize-product") &&
                                      (e(s).prepend(a), (r = !0));
                                } else if (
                                  7440 == t.storeId &&
                                  "products" == i
                                ) {
                                  if (e(s).hasClass("fotorama__stage__frame")) {
                                    var I = e(s).closest(
                                        ".product-page-gallery__main"
                                      ),
                                      y = e(
                                        ".slick-slide, .product-page-gallery__main-arrow"
                                      );
                                    y.length &&
                                      y.on("click", function () {
                                        setTimeout(() => {
                                          var t = e(I).find(
                                            ".fotorama__stage__frame"
                                          );
                                          t.length &&
                                            !t.find(".bss_pl_img").length &&
                                            (t.prepend(a), (r = !0));
                                        }, 100);
                                      });
                                  } else if (e(s).hasClass("rimage")) {
                                    let t = e(s)
                                      .closest(".product-page-gallery")
                                      .find(".product-page-gallery__main");
                                    t.length &&
                                      !t.children(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (13085 == t.storeId) {
                                  if (
                                    "products" == i &&
                                    e(s)
                                      .parent()
                                      .hasClass(
                                        "product-single__media__thumbnail"
                                      )
                                  ) {
                                    let t = e(s)
                                      .closest(
                                        ".product-single__media--selected"
                                      )
                                      .find(".media-wrapper");
                                    t.lenght > 0 &&
                                      !t.find(".bss_pl_img").length &&
                                      (t.prepend(a), (r = !0));
                                  }
                                } else if (13190 == t.storeId) {
                                  if (
                                    "/search" == window.location.pathname &&
                                    e(s).hasClass("products_list_inner")
                                  ) {
                                    let t = e(s).find(".layer-media");
                                    t.length > 0 && (t.prepend(a), (r = !0));
                                  }
                                  if ("products" == i) {
                                    let t = e(s).closest(".lSSlideOuter");
                                    t.length &&
                                      !e(t).find(".bss_pl_img").length &&
                                      (e(t).find(".lslide").prepend(a),
                                      (r = !0));
                                  }
                                } else
                                  13364 == t.storeId &&
                                  "products" == i &&
                                  e(s).hasClass("image-wrap")
                                    ? (e(s).prepend(a), (r = !0))
                                    : 13146 == t.storeId
                                    ? ("/search" == window.location.pathname ||
                                        "collections" == i) &&
                                      e(s).hasClass("product-image") &&
                                      e(s).parent().hasClass("product-top") &&
                                      (e(s).parent().prepend(a), (r = !0))
                                    : 13555 == t.storeId
                                    ? ("" == i &&
                                        e(s).hasClass("grid-view_image") &&
                                        (setTimeout(() => {
                                          let t = e(s)
                                            .parent()
                                            .children(".bss_pl_img");
                                          t.length && t.remove();
                                        }, 220),
                                        e(s).prepend(a),
                                        (r = !0)),
                                      "products" == i &&
                                        (e(s).hasClass("primgWrp") &&
                                          (e(s).prepend(a), (r = !0)),
                                        e(s).hasClass("grid-view_image") &&
                                          e(s).closest(".related-product")
                                            .length &&
                                          (e(s).prepend(a), (r = !0))))
                                    : 13254 == t.storeId &&
                                      "products" == i &&
                                      e(s).hasClass("image-wrap") &&
                                      (e(s).prepend(a), (r = !0));
                              else {
                                let t = e(s).find(".snize-thumbnail-wrapper");
                                t.length && (t.prepend(a), (r = !0));
                              }
                            else {
                              let t = e(s)
                                .closest(".card-wrapper")
                                .find(".card--product");
                              t.length > 0 &&
                                !t.find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          else e(s).prepend(a), (r = !0);
                        else
                          e(s).closest(".owl-item").hasClass("active")
                            ? (e(s).parent("figure").prepend(a), (r = !0))
                            : (r = !1);
                        if (11987 == t.storeId)
                          "/pages/search-results-page" ==
                            window.location.pathname &&
                            e(s).hasClass("snize-product") &&
                            e(s).find(".snize-thumbnail-wrapper").length &&
                            (e(s).find(".snize-thumbnail-wrapper").prepend(a),
                            (r = !0));
                        else if (13442 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-single__photo") &&
                            (e(s).prepend(a), (r = !0));
                        else if (13424 == t.storeId)
                          "collections" == i &&
                            e(s).hasClass("single-product-image") &&
                            (e(s).prepend(a), (r = !0)),
                            "/pages/blinds" == window.location.pathname &&
                              e(s).hasClass("slide-image") &&
                              (e(s).prepend(a), (r = !0));
                        else if (
                          13669 == t.storeId &&
                          e(s).hasClass("product-visual")
                        )
                          e(s).parent().prepend(a),
                            (r = !0),
                            setTimeout(() => {
                              var t = e(s).find(".bss_pl_img");
                              t.length && t.remove();
                            }, 220);
                        else if (4261 == t.storeId)
                          e(s).hasClass("lazy-image") &&
                            (e(s).parent().prepend(a),
                            setTimeout(() => {
                              let t = e(s).find(".bss_pl_img");
                              t.length && t.remove();
                            }, 220),
                            (r = !0));
                        else if (12379 == t.storeId)
                          e(s).hasClass("grid-item__content") &&
                            (e(s).parent().prepend(a), (r = !0));
                        else if (13744 == t.storeId)
                          e(s).hasClass("product__main-photos") &&
                            (e(s).prepend(a), (r = !0));
                        else if (9485 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-image") &&
                            (e(s).parent().css("position", "relative"),
                            e(s).parent().prepend(a),
                            (r = !0));
                        else if (13325 == t.storeId) {
                          if (
                            window.location.pathname.includes("/pages/") &&
                            e(s)
                              .parent()
                              .hasClass("shg-product-title-component")
                          ) {
                            let t = e(s).closest(".shg-product");
                            if (t.length) {
                              let e = t.find(".shg-product-image-wrapper");
                              e.length && (e.prepend(a), (r = !0));
                            }
                          }
                        } else if (13826 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("AspectRatio--withFallback") &&
                              e(s).parent().prepend(a),
                            e(s).hasClass("Product__SlideshowNavImage") &&
                              setTimeout(() => {
                                let t = e(s).find(".bss_pl_img");
                                t.length && t.remove();
                              }, 220),
                            (r = !0));
                        else if (10326 == t.storeId) {
                          if (
                            ("/search" == window.location.pathname ||
                              "collections" == i) &&
                            e(s).hasClass("boost-pfs-filter-product-item-inner")
                          ) {
                            let t = e(s).find(
                              ".boost-pfs-filter-product-item-image"
                            );
                            t.length && (t.prepend(a), (r = !0));
                          }
                        } else if (13931 == t.storeId && "products" == i)
                          e(s).hasClass("product__main-photos") &&
                            (e(s).prepend(a), (r = !0)),
                            e(s).hasClass("grid-product__content") &&
                              e(s).find(".grid-product__image-mask").length &&
                              (e(s)
                                .find(".grid-product__image-mask")
                                .prepend(a),
                              (r = !0));
                        else if (13831 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("product-single__media__image") &&
                              e(s).parent().prepend(a),
                            setTimeout(() => {
                              let t = e(s).find(".bss_pl_img");
                              t.length && t.remove();
                            }, 220),
                            (r = !0));
                        else if (
                          13906 == t.storeId &&
                          "products" == i &&
                          e(s).hasClass("primgWrp")
                        ) {
                          let t = e(s).closest(".slick-list");
                          t.length &&
                            !t.children(".bss_pl_img").length &&
                            (t.prepend(a), (r = !0));
                        } else if (13802 == t.storeId)
                          ("/search" != window.location.pathname &&
                            "collections" != i) ||
                            !e(s).hasClass("snize-product") ||
                            (e(s).prepend(a),
                            setTimeout(() => {
                              let t = e(s)
                                .find(".snize-thumbnail")
                                .find(".bss_pl_img");
                              t.length && t.remove();
                            }, 220),
                            (r = !0));
                        else if (2907 == t.storeId) {
                          if ("products" == i && e(s).hasClass("image-wrap")) {
                            let t = e(s).closest(".product-image-main");
                            t.length && (t.prepend(a), (r = !0));
                          }
                        } else if (13886 == t.storeId && "products" == i)
                          e(s).hasClass("aspect-ratio") &&
                            !e(s).closest(".product-gallery__thumbnail")
                              .length &&
                            (e(s).prepend(a), (r = !0));
                        else if (13417 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-media") &&
                            (e(s).find(".rimage-wrapper").prepend(a), (r = !0));
                        else if (13098 == t.storeId)
                          "collections" == i &&
                            e(s).hasClass("grid-view-item__image-wrapper") &&
                            e(s).closest(".grid__item--collection-template")
                              .length &&
                            (e(s).prepend(a), (r = !0)),
                            ("" != i && "products" != i) ||
                              !e(s).hasClass("grid-view-item__image-wrapper") ||
                              (e(s).prepend(a), (r = !0));
                        else if (14064 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio") &&
                            setTimeout(() => {
                              let t = e(s).find(".bss_pl_img");
                              t.length > 0 && (t.remove(), e(s).after(a));
                            }, 220);
                        else if (14128 == t.storeId)
                          ("" != i && "collections" != i) ||
                            !e(s).hasClass("reveal") ||
                            (e(s).prepend(a), (r = !0)),
                            "/search" == window.location.pathname &&
                              e(s).hasClass("grid__item") &&
                              (e(s).css("position", "relative"),
                              e(s).prepend(a),
                              (r = !0)),
                            "products" == i &&
                              (e(s).hasClass("product-medias__media") ||
                                e(s).hasClass("grid-view-item-image")) &&
                              (e(s).prepend(a), (r = !0));
                        else if (11113 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image-wrap") &&
                            (e(s).closest(".flickity-viewport").append(a),
                            (r = !0));
                        else if (13163 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-image-gallery") &&
                            (e(s).prepend(a), (r = !0));
                        else if (13315 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("ProductItem--horizontal") &&
                            (setTimeout(() => {
                              let t = e(s).find(".bss_pl_img");
                              t.length > 0 &&
                                (t.remove(),
                                e(s)
                                  .find(".AspectRatio--withFallback")
                                  .prepend(a));
                            }, 220),
                            (r = !0));
                        else if (14187 == t.storeId && "products" == i)
                          e(s).hasClass("prod-zoom") &&
                            (e(s).prepend(a), (r = !0));
                        else if (14387 == t.storeId && "products" == i)
                          e(s).hasClass("product__main-photos")
                            ? (e(s).prepend(a), (r = !0))
                            : e(s).hasClass("grid-product__content") &&
                              e(s).find(".grid-product__image-mask").length &&
                              (e(s)
                                .find(".grid-product__image-mask")
                                .prepend(a),
                              (r = !0));
                        else if (14341 == t.storeId && "products" == i)
                          e(s).hasClass("js-product-panel")
                            ? (e(s).prepend(a), (r = !0))
                            : e(s).hasClass(
                                "AkTopPin__product-content__Item-image"
                              ) && (e(s).prepend(a), (r = !0));
                        else if (13821 == t.storeId && "products" == i) {
                          let t = e(s).closest(".slick-track");
                          e(s).hasClass("image-wrap") &&
                            t.length &&
                            t.find(".product-image-main").length &&
                            (t.find(".product-image-main").prepend(a),
                            (r = !0));
                        } else if (7197 == t.storeId)
                          ("/search" != window.location.pathname &&
                            "collections" != i) ||
                            !e(s).hasClass("grid__item") ||
                            (e(s).find(".product-card").prepend(a), (r = !0));
                        else if (12552 == t.storeId)
                          "products" == i &&
                            e(s).is("#pwzrswiper-slide-0") &&
                            (e(s).prepend(a), (r = !0)),
                            window.location.pathname.includes(
                              "/apps/bundles"
                            ) &&
                              e(s).hasClass(
                                "bundle-builder-app--bundle--product-details"
                              ) &&
                              e(s)
                                .parent()
                                .find(
                                  ".bundle-builder-app--bundle--product-link"
                                ).length &&
                              (e(s)
                                .parent()
                                .find(
                                  ".bundle-builder-app--bundle--product-link"
                                )
                                .prepend(a),
                              (r = !0));
                        else if (
                          14313 == t.storeId &&
                          "products" == i &&
                          e(s).hasClass("AspectRatio")
                        )
                          e(s).prepend(a), (r = !0);
                        else if (
                          13652 == t.storeId &&
                          "products" == i &&
                          e(s).hasClass("product-gallery__thumbnail") &&
                          e(s).closest(".product-gallery").length
                        ) {
                          let t = e(s)
                            .closest(".product-gallery")
                            .find(".product-gallery__image");
                          t.length &&
                            !t.find(".bss_pl_img").length &&
                            (t.prepend(a), (r = !0));
                        } else if (11055 == t.storeId && "products" == i) {
                          if (
                            e(s).hasClass("product-single__media") &&
                            e(s).closest(".product-single").length
                          ) {
                            let t = e(s).closest(".product-single");
                            t.find(".product-single__media").length &&
                              (t.find(".product-single__media").prepend(a),
                              (r = !0));
                          }
                        } else if (13752 == t.storeId)
                          "products" == i
                            ? e(s).hasClass("primgWrp")
                              ? (e(s).prepend(a), (r = !0))
                              : e(s).hasClass("grid-view_image") &&
                                (e(s).prepend(a),
                                (r = !0),
                                setTimeout(() => {
                                  let t = e(s).parent();
                                  t.hasClass("grid-view-item") &&
                                    t.children(".bss_pl_img").length &&
                                    t.children(".bss_pl_img").remove();
                                }, 220))
                            : "" == i &&
                              e(s).hasClass("grid-view_image") &&
                              (e(s).prepend(a),
                              (r = !0),
                              setTimeout(() => {
                                let t = e(s).parent();
                                t.hasClass("grid-view-item") &&
                                  t.children(".bss_pl_img").length &&
                                  t.children(".bss_pl_img").remove();
                              }, 220));
                        else if (13265 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("rimage-wrapper")
                          ) {
                            const t = e(s).closest(".slick-list");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if ("" == i && e(s).hasClass("image-cont")) {
                            const t = e(s).find(".product-link");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (14573 == t.storeId && "products" == i) {
                          let t = e(s).closest(".MagicToolboxSlides");
                          t.length && (t.prepend(a), (r = !0));
                        } else if (
                          14593 == t.storeId &&
                          "products" == i &&
                          e(s).hasClass("rimage-wrapper")
                        )
                          e(s).prepend(a), (r = !0);
                        else if (
                          14084 != t.storeId ||
                          ("collections" != i &&
                            "/search" != window.location.pathname) ||
                          !e(s).hasClass("ProductItem__Wrapper")
                        ) {
                          if (14551 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("image-slide-link") &&
                              (e(s).prepend(a), (r = !0)),
                              ("collections" != i &&
                                "/search" != window.location.pathname) ||
                                !e(s).hasClass("box_1") ||
                                (e(s).prepend(a), (r = !0));
                          else if (4010 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("AspectRatio") &&
                              (e(s).prepend(a), (r = !0)),
                              "collections" == i &&
                                e(s).hasClass("spf-product-card__inner") &&
                                (e(s).prepend(a), (r = !0));
                          else if (
                            14610 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("mz-figure")
                          )
                            e(s).closest(".MagicToolboxSlides").prepend(a),
                              (r = !0);
                          else if (10747 == t.storeId)
                            "products" == i &&
                              (e(s).hasClass("mz-figure") && e(s).prepend(a),
                              e(s).hasClass("ga-product") &&
                                e(s).find(".ga-product_image").prepend(a)),
                              "/search" == window.location.pathname &&
                                e(s).hasClass("card-wrapper") &&
                                e(s).find(".card__inner").append(a),
                              "collections" == i &&
                                e(s).hasClass("card-wrapper") &&
                                e(s).find(".card__inner").append(a),
                              "" == i &&
                                (e(s).hasClass("gf_module-center") &&
                                  e(s).find(".img-holder").prepend(a),
                                e(s).hasClass("ga-product") &&
                                  e(s).find(".ga-product_image").prepend(a)),
                              (r = !0);
                          else if (
                            13382 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("image")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            11367 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("main-img-link")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (11965 == t.storeId && "products" == i) {
                            if (e(s).hasClass("sc-cGKJhA")) {
                              let t = e(s).closest(".sc-fyjqAk");
                              t.length &&
                                !t.children(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                            if (e(s).hasClass("sc-dSnXvR")) {
                              let t = e(s).closest(".sc-fyjqAk");
                              t.length &&
                                !t.children(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (
                            14611 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("AspectRatio")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            14859 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("engoj-nav-item")
                          )
                            e(s).closest(".slick-list").prepend(a), (r = !0);
                          else if (19040 == t.storeId) {
                            if ("products" == i && e(s).hasClass("media")) {
                              let t = e(s).closest(".product__media");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                            if (
                              "collections" == i &&
                              e(s).hasClass("product-item")
                            ) {
                              let t = e(s).find(".product-item__images");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (
                            11024 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("product-single__photo-wrapper")
                          )
                            e(s).append(a), (r = !0);
                          else if (14853 == t.storeId || 14854 == t.storeId) {
                            if (
                              ("products" == i &&
                                e(s).hasClass("js-slide") &&
                                (e(s).append(a), (r = !0)),
                              ("/search" == window.location.pathname ||
                                "/" == window.location.pathname ||
                                "collections" == i) &&
                                e(s).hasClass("collectionBlock-image"))
                            ) {
                              let t = e(s).find(".collectionBlock-image__link");
                              t.length &&
                                !t.find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                            if (
                              "collections" == i &&
                              e(s).hasClass("collectionBlock")
                            ) {
                              let t = e(s).find(".d-block");
                              t.length &&
                                !t.find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (4245 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("AspectRatio--withFallback") &&
                              (e(s).append(a), (r = !0));
                          else if (10193 == t.storeId) {
                            if ("products" == i && e(s).hasClass("fancybox")) {
                              const t = e(s).closest(".slick-list");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0)),
                                (r = !0);
                            }
                          } else if (14921 == t.storeId && "products" == i) {
                            if (e(s).hasClass("zoom-image")) {
                              e(s).closest(".featured__images").length &&
                                (e(s).append(a), (r = !0));
                            }
                            e(s).hasClass("product-item") &&
                              e(s).find(".product-image").length &&
                              (e(s).find(".product-image").append(a), (r = !0));
                          } else if (
                            6918 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("image-wrap")
                          ) {
                            (x = e(s)
                              .closest(".flickity-slider")
                              .find(".image-wrap")).length &&
                              !e(x).find(".bss_pl_img").length &&
                              (e(x).append(a), (r = !0));
                          } else if (14192 == t.storeId && "products" == i) {
                            if (e(s).hasClass("image-wrap")) {
                              let t = e(s)
                                .closest(".product-slideshow")
                                .find(".image-wrap");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                e(t).closest(".product-image-main").length &&
                                (e(t).closest(".product-image-main").prepend(a),
                                (r = !0));
                            }
                          } else if (14285 == t.storeId && "products" == i)
                            e(s).closest(".product-media").length &&
                              (e(s).closest(".product-media").prepend(a),
                              (r = !0));
                          else if (2325 == t.storeId && "products" == i) {
                            if (
                              e(s).hasClass("image-wrap") &&
                              e(s)
                                .closest(".slick-track")
                                .find(".starting-slide").length
                            ) {
                              e(s)
                                .closest(".slick-track")
                                .find(".product-image-main")
                                .prepend(a),
                                (r = !0);
                            }
                          } else if (13075 == t.storeId && "products" == i) {
                            if (e(s).hasClass("image-wrap")) {
                              let t = e(s)
                                .closest(".product__photos")
                                .find(".image-wrap");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                e(t).closest(".product-image-main").length &&
                                (e(t).closest(".product-image-main").prepend(a),
                                (r = !0));
                            }
                          } else if (10408 == t.storeId && "products" == i) {
                            let t = e(s).closest(".pwzrswiper-wrapper");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (e(t).find(".pwzrswiper-slide").prepend(a),
                              (r = !0));
                          } else if (
                            15125 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("pg__main__link")
                          ) {
                            let t = e(s).parent().parent().parent();
                            t.length && (t.append(a), (r = !0));
                          } else if (
                            15303 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("product-media-container")
                          )
                            e(s).append(a), (r = !0);
                          else if (15182 == t.storeId && "products" == i)
                            e(s).closest(".product__media-item").length &&
                              (e(s).closest(".product__media-item").prepend(a),
                              (r = !0)),
                              e(".bss-pl-frontend").css("z-index", "2");
                          else if (12870 == t.storeId)
                            "collections" == i &&
                              e(s).hasClass("image-wrapper") &&
                              (e(s).append(a), (r = !0));
                          else if (15727 == t.storeId && "products" == i)
                            e(s).hasClass("zoomWrapper")
                              ? (e(s).parent().append(a), (r = !0))
                              : e(s).hasClass("zoomWindowContainer") &&
                                (e(s).find(".zoomWindow").append(a), (r = !0));
                          else if (15322 == t.storeId)
                            ("/" != window.location.pathname &&
                              "collections" != i) ||
                              !e(s).hasClass("product-image") ||
                              (e(s).closest(".product-top").prepend(a),
                              (r = !0));
                          else if (5798 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("product__main-photos")
                            ) {
                              let t = e(s).find(".image-wrap");
                              t.length &&
                                !t.find(".bss_pl_img").length &&
                                (e(t).prepend(a), (r = !0));
                            }
                          } else if (7901 == t.storeId)
                            "products" == i &&
                              (e(s).hasClass("thumbs product-thumb") ||
                                e(s).hasClass("main_image_wrap")) &&
                              (e(s).prepend(a), (r = !0));
                          else if (15833 == t.storeId) {
                            if (
                              "collections" == i &&
                              e(s).hasClass("card-information__text")
                            )
                              (x = e(s)
                                .closest(".collection")
                                .find(".card__inner")).length &&
                                !e(x).find(".bss_pl_img").length &&
                                (e(x).append(a), (r = !0));
                            "products" == i &&
                              e(s).hasClass("product__media") &&
                              !e(s).find(".bss_pl_img").length &&
                              (e(s).append(a), (r = !0));
                          } else if (11128 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("aspect-ratio") &&
                              e(s)
                                .parent()
                                .hasClass("product-gallery__size-limiter") &&
                              (e(s).parent().prepend(a), (r = !0));
                          else if (19596 == t.storeId)
                            "products" == i &&
                              (e(s).hasClass("img_ptw") &&
                                (e(s).parent().prepend(a), (r = !0)),
                              e(s).hasClass("product-image") &&
                                (e(s).prepend(a), (r = !0)));
                          else if (17021 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("media") &&
                              (e(s).append(a), (r = !0)),
                              ("collections" != i &&
                                "/search" != window.location.pathname) ||
                                !e(s).hasClass("table") ||
                                (e(s).append(a), (r = !0));
                          else if (16016 == t.storeId)
                            -1 !==
                              window.location.pathname.indexOf(
                                "/collections"
                              ) &&
                              -1 ===
                                window.location.pathname.indexOf("/products") &&
                              e(s).hasClass("product-card__header") &&
                              (e(s).append(a), (r = !0));
                          else if (14642 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("product__subimage-container")
                            )
                              (x = e(s)
                                .closest(".slick-track")
                                .find(".product__subimage-container")).length &&
                                (e(x).append(a), (r = !0));
                            "collections" == i && (e(s).append(a), (r = !0));
                          } else if (16584 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("AspectRatio--withFallback") &&
                              (e(s).append(a), (r = !0));
                          else if (18078 == t.storeId)
                            "products" == i &&
                              setTimeout(() => {
                                if (e(s).hasClass("rimage-wrapper")) {
                                  let t = e(s).closest(".main-image");
                                  t.length &&
                                    !t.find(".bss_pl_img").length &&
                                    (t.prepend(a), (r = !0));
                                }
                              }, 1500);
                          else if (
                            15770 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("product-panel__media")
                          )
                            e(s).closest(".product-panel__image").append(a),
                              (r = !0);
                          else if (
                            14354 == t.storeId &&
                            "collections" == i &&
                            e(s).hasClass("product_image")
                          )
                            e(s).append(a), (r = !0);
                          else if (
                            15238 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("image-wrap")
                          ) {
                            let t = e(s)
                              .closest(".product__main-photos")
                              .find(".image-wrap");
                            t.length && (t.append(a), (r = !0));
                          } else if (
                            12994 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            !e(s).find(".bss_pl_img").length
                          )
                            e(s).prepend(a), (r = !0);
                          else if (13904 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("AspectRatio--withFallback") &&
                              (e(s).prepend(a), (r = !0));
                          else if (18995 == t.storeId) {
                            if (
                              ("collections" == i ||
                                "/search" == window.location.pathname) &&
                              e(s).hasClass("grid-item__content")
                            ) {
                              let t = e(s).find(".grid-product__image-wrap");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (e(t).prepend(a), (r = !0));
                            }
                          } else if (5931 == t.storeId) {
                            if (
                              ("/" == window.location.pathname ||
                                "collections" == i) &&
                              e(s).hasClass("grid-item__content")
                            ) {
                              let t = e(s).find(".grid__image-ratio");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (e(t).append(a), (r = !0));
                            }
                            if (
                              "products" == i &&
                              e(s).hasClass("image-wrap")
                            ) {
                              let t = e(s)
                                .closest(".flickity-slider")
                                .find(".image-wrap");
                              t.length &&
                                !t.find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                            "products" == i &&
                              e(s).hasClass("image-wrap") &&
                              (e(s).prepend(a), (r = !0));
                          } else if (15207 == t.storeId)
                            e(s).find(".main-images-wrapper").length &&
                              (e(s).find(".main-images-wrapper").prepend(a),
                              (r = !0)),
                              "products" == i &&
                                (e(s).closest(".product-single__media-wrapper")
                                  .length
                                  ? (e(s)
                                      .closest(".product-single__media-wrapper")
                                      .prepend(a),
                                    (r = !0))
                                  : e(s).closest(".product-viewed-item")
                                      .length &&
                                    (e(s)
                                      .closest(".product-viewed-item")
                                      .find(".image")
                                      .prepend(a),
                                    (r = !0))),
                              e(".bss-pl-frontend").css("z-index", "3");
                          else if (15277 == t.storeId)
                            "products" == i
                              ? e(s).hasClass("image-align") &&
                                e(s).closest(".clearfix").length &&
                                (e(s).closest(".clearfix").prepend(a), (r = !0))
                              : "collections" == i &&
                                e(s).hasClass("lazycontainer") &&
                                (e(s).prepend(a), (r = !0));
                          else if (520 == t.storeId)
                            "products" == i &&
                              e(s).parent().hasClass("tt-product-single-img") &&
                              (e(s).prepend(a), (r = !0)),
                              "products" == i &&
                                e(s).hasClass("slick-slide") &&
                                (e(s).prepend(a), (r = !0));
                          else if (
                            15270 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("product-item__info-inner")
                          )
                            e(s).parent().next().remove(), (r = !0);
                          else if (15976 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("card__image-container") &&
                              (e(s)
                                .closest(".flickity-slider")
                                .find(".card__image-container")
                                .prepend(a),
                              (r = !0)),
                              "collections" == i &&
                                e(s).hasClass("product-grid-item--center") &&
                                (e(s).prepend(a), (r = !0));
                          else if (
                            14817 == t.storeId &&
                            e(s).hasClass("grid__item")
                          ) {
                            (x = e(s).find(".feature-row__image-wrapper"))
                              .length &&
                              !e(x).find(".bss_pl_img").length &&
                              (x.prepend(a), (r = !0));
                          } else if (17351 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("image-wrap")
                            ) {
                              let t = e(s)
                                .closest(".flickity-slider")
                                .find(".image-wrap");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (19115 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("product__media")
                            ) {
                              let t = e(s).closest(".product__modal-opener");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (16766 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("image-wrap") &&
                              (e(s).prepend(a), (r = !0));
                          else if (18912 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("cool-image-swipebox")
                            ) {
                              let t = e(s).closest(".product-main-images");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                            if (
                              "/pages/search-results-page" ==
                                window.location.pathname &&
                              e(s).hasClass("snize-product")
                            ) {
                              let t = e(s).find(".snize-thumbnail-wrapper");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (15336 == t.storeId && "products" == i)
                            if (e(s).hasClass("aspect-ratio"))
                              e(s).closest(".product-gallery__carousel-wrapper")
                                .length &&
                                (e(s)
                                  .closest(".product-gallery__carousel-wrapper")
                                  .find(".aspect-ratio")
                                  .prepend(a),
                                (r = !0));
                            else if (e(s).hasClass("product-item")) {
                              let t = e(s).find(".product-item__image-wrapper");
                              t.length &&
                                (t.css("position", "relative"),
                                t.prepend(a),
                                (r = !0));
                            } else e(s).prepend(a), (r = !0);
                          else if (15e3 == t.storeId) {
                            if (
                              ("collections" == i || "products" == i) &&
                              e(s).hasClass("grid-product__content")
                            )
                              (x = e(s)
                                .find(".grid-product__link")
                                .find(".grid-product__image-mask")).append(a),
                                (r = !0);
                            if (
                              "products" == i &&
                              e(s).hasClass("image-wrap")
                            ) {
                              let t = e(s)
                                .closest(".slick-track")
                                .find(".image-wrap");
                              t.length > 0 && (t.prepend(a), (r = !0));
                            }
                          } else if (15696 == t.storeId)
                            "products" == i &&
                              e(s).parent().hasClass("featured-image") &&
                              (e(s).append(a), (r = !0)),
                              ("" != i && "collections" != i) ||
                                !e(s).hasClass("single-product__image") ||
                                (e(s).append(a), (r = !0)),
                              "/search" == window.location.pathname &&
                                e(s).hasClass("search-item-image") &&
                                (e(s).append(a), (r = !0));
                          else if (15312 == t.storeId) {
                            if (
                              ("products" == i &&
                                e(s).hasClass("image-wrap") &&
                                !e(s).parent().hasClass("product__thumb") &&
                                (e(s).append(a), (r = !0)),
                              ("collections" != i &&
                                "/search" != window.location.pathname) ||
                                !e(s).hasClass("spf-product-card__inner") ||
                                (e(s).append(a), (r = !0)),
                              "/" == window.location.pathname &&
                                e(s).closest(".swiper-wrapper"))
                            )
                              (x = e(s).find(".imagebox")).length &&
                                !e(x).find(".bss_pl_img").length &&
                                (x.prepend(a), (r = !0));
                          } else if (
                            15825 == t.storeId &&
                            "collections" == i &&
                            e(s).hasClass("lh-product-image")
                          )
                            e(s).append(a), (r = !0);
                          else if (
                            14988 == t.storeId &&
                            "products" == i &&
                            e(s).hasClass("image-wrap")
                          )
                            e(s).append(a), (r = !0);
                          else if (16249 == t.storeId) {
                            ("collections" != i && "products" != i) ||
                              (e(s).find(".prod-th").prepend(a), (r = !0)),
                              "products" == i &&
                                e(s).hasClass("product-single__media") &&
                                (e(s).prepend(a), (r = !0)),
                              "/search" == window.location.pathname &&
                                e(s).hasClass("res-image") &&
                                (e(s).prepend(a), (r = !0));
                            let t = e(s).find(".thumbnail");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          } else if (3799 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("image-container")
                            )
                              (x = e(s)
                                .closest(".slick-track")
                                .find(".image-container")).length &&
                                !e(x).find(".bss_pl_img").length &&
                                (x.prepend(a), (r = !0));
                            if (
                              ("products" == i || "collections" == i) &&
                              e(s).hasClass("prd-img-area")
                            ) {
                              var v = e(s).find(".prd-img");
                              v.length &&
                                !e(v).find(".bss_pl_img").length &&
                                (v.prepend(a), (r = !0));
                            }
                          } else if (16382 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("image-wrap")
                            ) {
                              let t = e(s)
                                .closest(".flickity-slider")
                                .find(".image-wrap");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                            if (
                              "collections" == i &&
                              e(s).hasClass("grid-product__content")
                            ) {
                              let t = e(s).find(".grid-product__image-mask");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (12724 == t.storeId) {
                            if (
                              "products" == i &&
                              e(s).hasClass("aspect-ratio")
                            ) {
                              let t = e(s)
                                .closest(".flickity-slider")
                                .find(".aspect-ratio");
                              t.length &&
                                !e(t).find(".bss_pl_img").length &&
                                (t.prepend(a), (r = !0));
                            }
                          } else if (16204 == t.storeId) {
                            if (
                              ("collections" == i ||
                                "/" == window.location.pathname ||
                                "/search" == window.location.pathname) &&
                              e(s).hasClass("grid-product__content")
                            )
                              (x = e(s).find(".grid-product__image-mask"))
                                .length &&
                                !e(x).find(".bss_pl_img").length &&
                                (x.prepend(a), (r = !0));
                            if (
                              "products" == i &&
                              e(s).hasClass("product-section")
                            )
                              (x = e(s).find(".product-main-slide")).length &&
                                !e(x).find(".bss_pl_img").length &&
                                (x.prepend(a), (r = !0));
                          } else if (
                            5822 == t.storeId &&
                            e(s).hasClass("one-third")
                          ) {
                            let t = e(s).find(".product_image");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          } else if (15365 == t.storeId)
                            "products" == i &&
                              e(s).hasClass("product__thumb") &&
                              (e(s).prepend(a), (r = !0)),
                              "products" == i &&
                                e(s).hasClass("ctl-product-component") &&
                                (e(s).find(".cell-asset-wrapper").prepend(a),
                                (r = !0)),
                              ("collections" == i ||
                                "" == i ||
                                "products" == i) &&
                                e(s).hasClass("grid-product__content") &&
                                e(s).find(".image-wrap").length &&
                                (e(s).find(".image-wrap").prepend(a), (r = !0));
                          else if (16210 == t.storeId) {
                            if (
                              ("products" == i &&
                                e(s).hasClass("image-wrap") &&
                                (e(s).append(a), (r = !0)),
                              ("collections" == i ||
                                "products" == i ||
                                "/" == window.location.pathname ||
                                "/search" == window.location.pathname) &&
                                e(s).hasClass("grid-item__content"))
                            )
                              (x = e(s).find(".grid-product__image-wrap"))
                                .length &&
                                !e(x).find(".bss_pl_img").length &&
                                (x.append(a), (r = !0));
                          }
                        } else {
                          let t = e(s).find(".AspectRatio");
                          t.length && (t.prepend(a), (r = !0));
                        }
                        if (4066 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("grid-product__content")
                          ) {
                            let t = e(s).find(".grid-product__image-mask");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (19527 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("primgWrp") &&
                            (e(s).prepend(a), (r = !0));
                        else if (11696 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("aspect-ratio")
                          ) {
                            let t = e(s).closest(".product-gallery__carousel");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (16882 == t.storeId)
                          ("collections" != i &&
                            "/" != window.location.pathname &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("product-image") ||
                            (e(s).append(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("image-slide-link") &&
                              (e(s).append(a), (r = !0));
                        else if (14499 == t.storeId) {
                          if (
                            ("collections" == i ||
                              "products" == i ||
                              "/search" == window.location.pathname ||
                              "/" == window.location.pathname) &&
                            e(s).hasClass("card-information__text")
                          ) {
                            let t = e(s)
                              .closest(".card-wrapper")
                              .find(".media--transparent");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (t.before(a), (r = !0));
                          }
                        } else if (16785 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("zoom__image") &&
                            (e(s).append(a), (r = !0));
                        else if (
                          15168 == t.storeId &&
                          "gallery" == e(s).attr("data-fancybox") &&
                          "products" == i
                        ) {
                          (x = e(s)
                            .closest(".flickity-slider")
                            .find('a[data-fancybox="gallery"]')).length &&
                            !e(x).find(".bss_pl_img").length &&
                            (x.prepend(a), (r = !0));
                        } else if (12231 == t.storeId && "products" == i)
                          e(s).hasClass("rimage-wrapper") &&
                            (e(s).prepend(a), (r = !0));
                        else if (15413 == t.storeId && "products" == i) {
                          if (e(s).hasClass("zoom-container"))
                            (x = e(s).closest(".flickity-viewport")).length &&
                              (x.prepend(a), (r = !0));
                        } else if (10846 == t.storeId && "products" == i) {
                          var x;
                          if (e(s).hasClass("mz-figure"))
                            (x = e(s).closest(
                              ".productThumbnails.mobile.single"
                            )).length && (x.prepend(a), (r = !0));
                        } else if (9273 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("main-img-link")
                          ) {
                            let t = e(s).closest(".main");
                            t.length && (t.prepend(a), (r = !0));
                          }
                        } else if (3987 == t.storeId)
                          "/pages/search-results-page" ==
                            window.location.pathname &&
                            e(s).hasClass("snize-product-in-stock") &&
                            (e(s).prepend(a), (r = !0));
                        else if (16537 == t.storeId && "products" == i)
                          e(s).hasClass("image-zoom") &&
                            (e(s).append(a), (r = !0));
                        else if (16351 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("product__media") ||
                              e(s).hasClass("card-wrapper")) &&
                            (e(s).append(a), (r = !0)),
                            "collections" == i &&
                              e(s).hasClass("card-wrapper") &&
                              (e(s).append(a), (r = !0));
                        else if (16574 == t.storeId)
                          ((("products" == i ||
                            "/" == window.location.pathname) &&
                            e(s).hasClass("inner")) ||
                            e(s).hasClass("main-img-link") ||
                            e(s).hasClass("product-media")) &&
                            (e(s).prepend(a), (r = !0));
                        else if (18781 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            (e(s).parent().find(".bss_pl_img").length ||
                              (e(s).parent().prepend(a), (r = !0)));
                        else if (18803 == t.storeId)
                          (("products" == i &&
                            e(s).hasClass("product-image-gallery")) ||
                            ("/" == window.location.pathname &&
                              e(s).hasClass("product-image"))) &&
                            (e(s).prepend(a), (r = !0));
                        else if (19286 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("product-single__photo__item") ||
                              e(s).hasClass("product-card")) &&
                            (e(s).prepend(a), (r = !0));
                        else if (19501 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            (e(s).prepend(a), (r = !0));
                        else if (18289 == t.storeId)
                          "products" == i &&
                            e(s)
                              .parent()
                              .hasClass("product-gallery__size-limiter") &&
                            (e(s).prepend(a), (r = !0));
                        else if (19539 == t.storeId)
                          ("/" != window.location.pathname &&
                            "/search" != window.location.pathname &&
                            "collections" != i &&
                            "products" != i) ||
                            !e(s).hasClass("grid-item__content") ||
                            (e(s).prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).parent().hasClass("product-image-main") &&
                              (e(s).prepend(a), (r = !0));
                        else if (2502 == t.storeId)
                          "products" == i && (e(s).prepend(a), (r = !0));
                        else if (15389 == t.storeId)
                          ("collections" != i &&
                            "" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("prod-image-wrap") ||
                            (e(s).prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("product-media") &&
                              (e(s).css("position", "relative"),
                              e(s).append(a),
                              (r = !0));
                        else if (15321 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image-wrap") &&
                            e(s).closest(".product__photos").length &&
                            (e(s)
                              .closest(".product__photos")
                              .find(".product-image-main")
                              .prepend(a),
                            (r = !0));
                        else if (4709 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-gallery__thumbnail") &&
                            e(s).closest(".product-gallery").length &&
                            (e(s)
                              .closest(".product-gallery")
                              .find(".image__container")
                              .append(a),
                            (r = !0));
                        else if (15956 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("AspectRatio--withFallback") ||
                              e(s).hasClass("vtl-product-card__header")) &&
                            (e(s).append(a), (r = !0));
                        else if (5950 == t.storeId)
                          "products" == i
                            ? e(s).hasClass("image__container") &&
                              (e(s).append(a), (r = !0))
                            : "" == i &&
                              e(s).hasClass("product-thumbnail__title") &&
                              (e(s)
                                .closest(".container")
                                .find(".product-gallery__link")
                                .append(a),
                              (r = !0));
                        else if (15561 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("product-single__media")
                          ) {
                            let t = e(s)
                                .closest(".grid__item")
                                .find(".product-single__media"),
                              i = e(s)
                                .closest(".grid__item")
                                .find(".product-single__thumbnail");
                            t.length && (t.append(a), (r = !0)),
                              i.length && (i.append(a), (r = !0));
                          }
                        } else if (15350 == t.storeId)
                          "products" == i
                            ? (e(s).find(".starting-slide").prepend(a),
                              (r = !0))
                            : ("collections" != i &&
                                "" != i &&
                                "/search" != window.location.pathname) ||
                              (e(s).prepend(a), (r = !0));
                        else if (11305 == t.storeId && "products" == i) {
                          if (e(s).hasClass("image-wrap"))
                            e(s).prepend(a), (r = !0);
                          else if (e(s).hasClass("product__main-photos")) {
                            let t = e(s).find(".product-image-main");
                            t.length && (t.append(a), (r = !0));
                          }
                        } else if (1584 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio") &&
                            e(s).closest(".flickity-slider").length &&
                            (e(s).append(a), (r = !0));
                        else if (15649 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("product__media")
                          ) {
                            let t = e(s)
                              .closest(".product__media-list")
                              .find(".product__media")
                              .first();
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (e(t).parent().prepend(a), (r = !0));
                          }
                        } else if (15721 == t.storeId)
                          "products" == i &&
                          e(s).attr("itemprop") &&
                          e(s)
                            .closest(".container")
                            .find(".product-single__media").length
                            ? (e(s)
                                .closest(".container")
                                .find(".product-single__media")
                                .append(a),
                              (r = !0))
                            : ("" != i && "collections" != i) ||
                              (e(s).append(a), (r = !0));
                        else if (15606 == t.storeId)
                          "collections" == i &&
                            e(s).hasClass("product-container") &&
                            (e(s).prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("zoomWrapper") &&
                              (e(s)
                                .closest(".product-photo-container")
                                .prepend(a),
                              (r = !0));
                        else if (15800 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image-wrap") &&
                            (e(s).parent().prepend(a), (r = !0));
                        else if (13190 == t.storeId)
                          "" == i &&
                            e(s).hasClass("layer-media") &&
                            (e(s).css("position", "relative"),
                            e(s).prepend(a),
                            (r = !0));
                        else if (
                          5374 == t.storeId &&
                          e(s).hasClass("card-information__text")
                        ) {
                          let t = e(s).closest(".card-wrapper").find(".media");
                          t.length && (t.prepend(a), (r = !0));
                        } else if (15763 == t.storeId)
                          "" == i &&
                            e(s).hasClass("MegaMenu__Push") &&
                            (e(s).find(".MegaMenu__PushImageWrapper").append(a),
                            (r = !0)),
                            ("/" != window.location.pathname &&
                              "collections" != i &&
                              "/search" != window.location.pathname) ||
                              !e(s).hasClass("ProductItem__Wrapper") ||
                              (e(s).find(".AspectRatio").prepend(a), (r = !0));
                        else if (15860 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            (e(s).parent().prepend(a), (r = !0));
                        else if (15802 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image__container") &&
                            (e(s)
                              .closest(".flickity-slider")
                              .find(".image__container")
                              .append(a),
                            (r = !0)),
                            "products" == i &&
                              e(s).hasClass("product-wrap") &&
                              (e(s).append(a), (r = !0)),
                            ("collections" != i &&
                              "/search" != window.location.pathname) ||
                              (e(s).append(a), (r = !0));
                        else if (10592 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("card-information__text") &&
                            (e(s)
                              .closest(".card-wrapper")
                              .find(".media")
                              .append(a),
                            (r = !0));
                        else if (9614 == t.storeId)
                          "/pages/search-results" == window.location.pathname &&
                            e(s).hasClass("klevuImgWrap") &&
                            (e(s).prepend(a), (r = !0));
                        else if (15488 == t.storeId)
                          ("" == i ||
                            "collections" == i ||
                            window.location.pathname.includes("/search")) &&
                            e(s).hasClass("card-information__text") &&
                            (e(s).closest(".card-wrapper").append(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("product__media") &&
                              (e(s).prepend(a), (r = !0));
                        else if (16033 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("Product__SlideshowNavImage") &&
                            (e(s)
                              .closest(".Product__Gallery")
                              .find(".AspectRatio.AspectRatio--withFallback")
                              .append(a),
                            (r = !0));
                        else if (16153 == t.storeId)
                          ("" != i &&
                            "collections" != i &&
                            "/search" != window.location.pathname &&
                            "products" != i) ||
                            !e(s).hasClass("productitem--description") ||
                            (e(s).append(a), (r = !0));
                        else if (12391 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-photo-container") &&
                            (e(s).append(a), (r = !0));
                        else if (15488 == t.storeId)
                          "products" == i && e(s).hasClass("product__media")
                            ? (e(s)
                                .closest(".product__media-list")
                                .find(".product__media")
                                .append(a),
                              (r = !0))
                            : "collections" == i &&
                              e(s).hasClass("card-information__text") &&
                              (e(s)
                                .closest(".card-wrapper")
                                .find(".card--product")
                                .append(a),
                              (r = !0));
                        else if (15970 == t.storeId)
                          "products" == i &&
                          e(s).hasClass("card__image-container")
                            ? (e(s)
                                .closest(".flickity-viewport")
                                .find(".card__image-container")
                                .append(a),
                              (r = !0))
                            : "products" == i &&
                              e(s).hasClass(
                                "limespot-recommendation-box-item"
                              ) &&
                              (e(s).find(".ls-image-wrap").append(a), (r = !0));
                        else if (9248 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).hasClass("product__media") &&
                              (e(s).prepend(a), (r = !0)),
                            "collections" == i ||
                              "/search" == window.location.pathname)
                          ) {
                            if (e(s).hasClass("card-information__text")) {
                              let t = e(s)
                                .closest(".card-wrapper")
                                .find(".media");
                              t.length && (t.append(a), (r = !0));
                            }
                            if (e(s).hasClass("evm-ws-card")) {
                              let t = e(s).find(".ws-card_image_container");
                              t.length && (t.append(a), (r = !0));
                            }
                          }
                          if (
                            "/" == window.location.pathname &&
                            e(s).hasClass("card-information__text")
                          ) {
                            let t = e(s)
                              .closest(".card-wrapper")
                              .find(".card__inner");
                            t.length && (t.prepend(a), (r = !0));
                          }
                        } else if (16645 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-image-gallery") &&
                            (e(s).prepend(a), (r = !0)),
                            ("/search" != window.location.pathname &&
                              "/" != window.location.pathname &&
                              "collections" != i) ||
                              !e(s).hasClass("product-image") ||
                              (e(s).find(".inner").append(a), (r = !0));
                        else if (15958 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product__main-photos") &&
                            (e(s).prepend(a), (r = !0)),
                            ("collections" != i &&
                              "/search" != window.location.pathname) ||
                              !e(s).hasClass("grid-product__content") ||
                              (e(s).find(".grid__image-ratio").append(a),
                              (r = !0));
                        else if (317 == t.storeId)
                          ("collections" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("grid-product__content") ||
                            (e(s).find(".grid-product__image-mask").append(a),
                            (r = !0));
                        else if (9306 == t.storeId)
                          "products" == i &&
                          e(s).hasClass("card__image-container")
                            ? (e(s)
                                .closest(".flickity-slider")
                                .find(".card__image-container")
                                .prepend(a),
                              (r = !0))
                            : ("collections" != i &&
                                "/search" != window.location.pathname) ||
                              !e(s).hasClass("product-grid-item--center") ||
                              (e(s).find(".product_card").prepend(a), (r = !0));
                        else if (15820 == t.storeId)
                          "collections" == i
                            ? (e(s).append(a), (r = !0))
                            : "products" == i &&
                              (e(s)
                                .closest(".product-single__medias")
                                .append(a),
                              (r = !0));
                        else if (10504 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("lazy-image") &&
                            (e(s).closest(".flickity-viewport").prepend(a),
                            (r = !0)),
                            "" != i ||
                              e(s).hasClass("product__grid__info") ||
                              (e(s).prepend(a), (r = !0));
                        else if (8702 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image-wrap") &&
                            (e(s)
                              .closest(".flickity-viewport")
                              .find(".image-wrap")
                              .prepend(a),
                            (r = !0));
                        else if (13810 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("product--wrapper")
                          ) {
                            let t = e(s).closest(".product-single__media-flex");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          ("collections" != i &&
                            "/search" != window.location.pathname &&
                            "/" != window.location.pathname) ||
                            !e(s).hasClass("grid-product__image-wrapper") ||
                            (e(s).prepend(a), (r = !0));
                        } else if (16183 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("flickity-slider") &&
                            (e(s).parent().prepend(a), (r = !0)),
                            ("collections" != i &&
                              "/search" != window.location.pathname) ||
                              !e(s).hasClass("shopify-section") ||
                              (e(s)
                                .closest(".row")
                                .find(".nt_bg_lz")
                                .prepend(a),
                              (r = !0));
                        else if (3336 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image--container") &&
                            (e(s)
                              .closest(".modal--root")
                              .find(".image--container")
                              .prepend(a),
                            (r = !0));
                        else if (16502 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-block") &&
                            (e(s).find(".image-one").prepend(a), (r = !0));
                        else if (16272 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("zoom-container") &&
                              (e(s).prepend(a), (r = !0)),
                            e(s).hasClass("product-wrap") &&
                              (e(s).prepend(a), (r = !0))),
                            "/pages/search-results" ==
                              window.location.pathname &&
                              e(s).hasClass("isp_product_image_wrapper") &&
                              (e(s).prepend(a), (r = !0));
                        else if (5583 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("card__image-container")
                          ) {
                            let t = e(s)
                              .closest(".product-image--slider")
                              .find(".card__image-container");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if ("pages" == i && e(s).hasClass("snize-product")) {
                            let t = e(s).find(".snize-thumbnail-wrapper");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (16299 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product__main-photos") &&
                            (e(s).prepend(a), (r = !0));
                        else if (16705 == t.storeId) {
                          if ("products" == i)
                            if (e(s).hasClass("crumb")) {
                              e(s)
                                .closest(".grid")
                                .find(".product-gallery__item")
                                .first()
                                .prepend(a),
                                (r = !0);
                            } else
                              e(s).hasClass("recently-viewed_cell") &&
                                (e(s)
                                  .closest("#main-content")
                                  .find(".wrapper--product-carousel")
                                  .find(".product-card__image-wrapper")
                                  .prepend(a),
                                (r = !0));
                          if (
                            ("collections" == i ||
                              "/search" == window.location.pathname) &&
                            e(s).hasClass("collection-listing__products")
                          ) {
                            e(s)
                              .find(".product-card__image-wrapper")
                              .prepend(a),
                              (r = !0);
                          }
                        } else if (3408 == t.storeId)
                          e(s).hasClass("grid-product__content") &&
                            e(s).find(".grid-product__image-mask").length &&
                            (e(s).find(".grid-product__image-mask").prepend(a),
                            (r = !0));
                        else if (4859 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("pwzrswiper-slide") &&
                            (e(s).prepend(a), (r = !0));
                        else if (16942 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image--responsive") &&
                            (e(s).prepend(a), (r = !0));
                        else if (16728 == t.storeId)
                          "products" == i &&
                            e(s).closest(".product-block").length &&
                            e(s).find(".main-image").length &&
                            (e(s).find(".main-image").prepend(a), (r = !0));
                        else if (16685 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("zoom-container")
                          ) {
                            let t = e(s)
                              .closest(".flickity-viewport")
                              .find(".image__container");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (e(t).prepend(a), (r = !0));
                          }
                        } else if (16577 == t.storeId)
                          "" == i &&
                            e(s).hasClass("card__media-full-spacer") &&
                            (e(s).prepend(a), (r = !0));
                        else if (6810 == t.storeId)
                          ("collections" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("grid-product__image-wrapper") ||
                            (e(s).prepend(a), (r = !0));
                        else if (10783 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).hasClass("shows-lightbox") &&
                              e(s).closest(".main-image-wrapper").length &&
                              (e(s).closest(".main-image-wrapper").prepend(a),
                              (r = !0)),
                            "products" == i &&
                              e(s).hasClass("boxx-product-info"))
                          ) {
                            let t = e(s)
                              .closest(".boxx-list-item")
                              .find(".boxx-image-container");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (13134 == t.storeId || 14857 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product__image-wrapper") &&
                            e(s).closest(".product-photo-container") &&
                            (e(s)
                              .closest(".product-photo-container")
                              .find(".product__image-wrapper")
                              .prepend(a),
                            (r = !0));
                        else if (16815 == t.storeId) {
                          if (
                            ("products" == i &&
                              (e(s).hasClass("items-img") ||
                                e(s).hasClass("lh-image-temp")) &&
                              (e(s).prepend(a), (r = !0)),
                            ("collections" == i ||
                              "/search" == window.location.pathname) &&
                              e(s).hasClass("product-block"))
                          ) {
                            let t = e(s).parent();
                            e(t).prepend(a), (r = !0);
                          }
                        } else if (16826 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("product-image")
                          ) {
                            let t = e(s).closest(".productImageDestkop");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (e(t).prepend(a), (r = !0));
                            let i = e(s)
                              .closest(".productImageMobile")
                              .find(".product-image");
                            i.length &&
                              !e(i).find(".bss_pl_img").length &&
                              (e(i).prepend(a), (r = !0));
                          }
                          ("collections" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("product-item") ||
                            (e(s).find(".product-item-image").prepend(a),
                            (r = !0)),
                            ("collections" != i &&
                              "/search" != window.location.pathname) ||
                              !e(s).hasClass("evm-ws-card") ||
                              (e(s).find(".checkurl").prepend(a), (r = !0));
                        } else if (17356 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("shows-lightbox") &&
                            (e(s).closest(".main-image-wrapper").prepend(a),
                            (r = !0)),
                            "products" == i &&
                              e(s).hasClass("slide") &&
                              (e(s).prepend(a), (r = !0));
                        else if (18068 == t.storeId) {
                          if ("products" == i && e(s).hasClass("zoomWrapper")) {
                            let t = e(s).closest(".product-photo-container");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (e(t).prepend(a), (r = !0));
                          }
                          "products" == i &&
                            e(s).hasClass("product-image") &&
                            (r = !0);
                        } else
                          2989 == t.storeId
                            ? "products" == i &&
                              e(s).hasClass("product__main-photos") &&
                              (e(s).prepend(a), (r = !0))
                            : 17066 == t.storeId &&
                              ("products" == i &&
                                e(s).parent().hasClass("image") &&
                                (e(s).prepend(a), (r = !0)),
                              "/pages/search-results-page" ==
                                window.location.pathname &&
                                e(s).hasClass("snize-product") &&
                                (e(s)
                                  .find(".snize-thumbnail-wrapper")
                                  .prepend(a),
                                (r = !0)));
                        if (15335 == t.storeId)
                          e(s).hasClass("ProductItem__Wrapper") &&
                            (e(s).find(".ProductItem__ImageWrapper").prepend(a),
                            (r = !0));
                        else if (16854 == t.storeId) {
                          if ("products" == i && e(s).hasClass("li-top-item")) {
                            let t = e(s).closest(".wrapper").find("#wrap");
                            e(t).prepend(a), (r = !0);
                          }
                        } else if (9634 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("zoomWrapper") &&
                            e(s).closest(".product-photo-container").length &&
                            (e(s)
                              .closest(".product-photo-container")
                              .prepend(a),
                            (r = !0));
                        else if (3234 == t.storeId)
                          e(s).hasClass("card-information__text") &&
                            e(s).closest(".card-wrapper").length &&
                            (e(s)
                              .closest(".card-wrapper")
                              .find(".media")
                              .prepend(a),
                            (r = !0));
                        else if (17375 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image-wrap") &&
                            (e(s).parent().prepend(a), (r = !0));
                        else if (17266 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("aspect-ratio") &&
                            e(s).closest(".product-gallery__carousel-wrapper")
                              .length &&
                            (e(s)
                              .closest(".product-gallery__carousel-wrapper")
                              .find(".product-gallery__size-limiter")
                              .prepend(a),
                            (r = !0));
                        else if (17505 == t.storeId) e(s).prepend(a), (r = !0);
                        else if (14136 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-media-container") &&
                            (e(s).prepend(a), (r = !0));
                        else if (17479 == t.storeId)
                          ("collections" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("image-container") ||
                            (e(s).prepend(a), (r = !0));
                        else if (17634 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("primgWrp") &&
                            (e(s).prepend(a), (r = !0));
                        else if (18127 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            (e(s).prepend(a), (r = !0));
                        else if (17395 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            (e(s).prepend(a), (r = !0));
                        else if (17606 == t.storeId) {
                          if (
                            ("/" == window.location.pathname ||
                              "collections" == i) &&
                            e(s).hasClass("product--root")
                          ) {
                            let t = e(s).find(".product--image");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if (
                            ("products" == i &&
                              e(s).hasClass("image--container") &&
                              e(s)
                                .parent()
                                .parent()
                                .hasClass("product-media--featured") &&
                              (e(s).parent().parent().prepend(a), (r = !0)),
                            ("products" == i ||
                              "/search" == window.location.pathname) &&
                              e(s).hasClass("product--root"))
                          ) {
                            let t = e(s).find(".product--image");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (e(t).prepend(a), (r = !0));
                          }
                          if (
                            "/" == window.location.pathname &&
                            e(s).hasClass("featured-product--heading")
                          ) {
                            let t = e(s)
                              .closest(".featured-product--container")
                              .find(".product-media--featured");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (17636 == t.storeId)
                          ("collections" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("ProductItem__Wrapper") ||
                            e(s).find(".bss_pl_img").length ||
                            (e(s).prepend(a), (r = !0));
                        else if (17844 == t.storeId) {
                          if (
                            ("collections" == i ||
                              "" == i ||
                              "products" == i ||
                              "/search" == window.location.pathname) &&
                            e(s).hasClass("product-top")
                          ) {
                            let t = e(s).find(".product__media");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (e(t).prepend(a), (r = !0));
                          }
                          "products" == i &&
                            e(s).hasClass("product-single__photo__item") &&
                            (e(s).prepend(a), (r = !0));
                        } else if (17793 == t.storeId) {
                          let t = e(s).closest(".card-wrapper").find(".media");
                          ("collections" != i &&
                            "" != i &&
                            "products" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("card-information__text") ||
                            !t.length ||
                            e(t).find(".bss_pl_img").length ||
                            (t.prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("product__media") &&
                              (e(s).prepend(a), (r = !0));
                        } else if (6526 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            (e(s).prepend(a), (r = !0));
                        else if (19042 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("lazycontainer") &&
                            (e(s).prepend(a), (r = !0));
                        else if (10773 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("shows-lightbox")
                          ) {
                            let t = e(s).closest(".main-image-wrapper");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if (
                            "products" == i &&
                            e(s).hasClass("boxx-list-item")
                          ) {
                            let t = e(s).find(".boxx-image-container");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18250 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).hasClass("img_ptw") &&
                              (e(s).prepend(a), (r = !0)),
                            "products" == i && e(s).hasClass("flickity-slider"))
                          ) {
                            let t = e(s).find(".img_ptw");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18002 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("zoom") &&
                            (e(s).parent().prepend(a), (r = !0));
                        else if (7407 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).parent().hasClass("main") &&
                              (e(s).prepend(a), (r = !0)),
                            ("/" === window.location.pathname ||
                              "/search" === window.location.pathname ||
                              "collections" == i) &&
                              e(s).hasClass("prod-image-wrap"))
                          ) {
                            const t = e(s).find("a");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (13001 == t.storeId)
                          ((-1 !==
                            window.location.pathname.indexOf("/collections") &&
                            -1 ===
                              window.location.pathname.indexOf("/products")) ||
                            "/search" == window.location.pathname) &&
                            e(s).hasClass(
                              "boost-pfs-filter-product-item-image"
                            ) &&
                            (e(s).prepend(a), (r = !0)),
                            "/" == window.location.pathname &&
                              e(s).hasClass("lh-product-item-images") &&
                              (e(s).prepend(a), (r = !0));
                        else if (14983 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio") &&
                            (e(s).prepend(a), (r = !0));
                        else if (18083 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio") &&
                            (e(s).prepend(a), (r = !0));
                        else if (13768 == t.storeId)
                          "products" == i && (e(s).prepend(a), (r = !0));
                        else if (17952 == t.storeId)
                          "collections" == i &&
                            e(s).hasClass("image") &&
                            (e(s).prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("photoswipe") &&
                              (e(s).prepend(a), (r = !0));
                        else if (17393 == t.storeId) {
                          if ("products" == i && e(s).hasClass("image-wrap")) {
                            let t = e(s)
                              .closest(".slick-track")
                              .find(".product-image-main");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (16109 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-single__photo") &&
                            (e(s).prepend(a), (r = !0));
                        else if (18092 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).hasClass("product__media") &&
                              (e(s).prepend(a), (r = !0)),
                            ("collections" == i ||
                              "/search" == window.location.pathname) &&
                              e(s).hasClass("card-information__text"))
                          ) {
                            let t = e(s)
                              .closest(".card-wrapper")
                              .find(".card__inner");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18110 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).hasClass("product-image") &&
                              (e(s).prepend(a), (r = !0)),
                            "products" == i && e(s).hasClass("nt_add_w"))
                          ) {
                            let t = e(s)
                              .closest(".theiaStickySidebar")
                              .find(".img_ptw");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18185 == t.storeId) {
                          if (e(s).hasClass("megamenu__image")) {
                            let t = e(s).find(".megamenu__image-container");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          "products" == i &&
                            e(s).hasClass("product-single__media--image") &&
                            (e(s).prepend(a), (r = !0)),
                            "collections" == i &&
                              e(s).hasClass("product__media-slide") &&
                              (e(s).prepend(a), (r = !0)),
                            "/search" == window.location.pathname &&
                              e(s).hasClass("one-third") &&
                              (e(s).prepend(a), (r = !0));
                        } else if (16586 == t.storeId) {
                          if (
                            "/search" == window.location.pathname &&
                            e(s).hasClass("container")
                          ) {
                            let t = e(s).find(".et-list-item");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          "products" == i &&
                            e(s).hasClass("product-single__media") &&
                            (e(s).prepend(a), (r = !0));
                        } else if (18152 == t.storeId)
                          "collections" == i &&
                            e(s).hasClass("product-item") &&
                            (e(s).prepend(a), (r = !0));
                        else if (9312 == t.storeId) {
                          if (
                            "/" == window.location.pathname &&
                            e(s).hasClass("section__header")
                          ) {
                            let t = e(s)
                              .closest(".section")
                              .find(".product-gallery__carousel-item");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18104 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-media") &&
                            (e(s).prepend(a), (r = !0));
                        else if (18108 == t.storeId) {
                          if ("products" == i && e(s).hasClass("image-wrap")) {
                            let t = e(s)
                              .closest(".flickity-slider")
                              .find(".image-wrap");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if (
                            ("/" == window.location.pathname ||
                              "collections" == i ||
                              "/search" == window.location.pathname) &&
                            e(s).hasClass("grid-item__content")
                          ) {
                            let t = e(s).find(".grid__image-ratio");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (17026 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("lazy-image") &&
                            (e(s).prepend(a), (r = !0));
                        else if (17783 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio") &&
                            (e(s).prepend(a), (r = !0));
                        else if (17981 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).hasClass("aspect-ratio") &&
                              (e(s).parent().prepend(a), (r = !0)),
                            "" == i && e(s).hasClass("section__header"))
                          ) {
                            let t = e(s)
                              .closest(".section")
                              .find(".product-gallery__size-limiter");
                            t.length &&
                              !e(t).find(".bss_pl_img").length &&
                              (e(t).prepend(a), (r = !0));
                          }
                        } else if (18193 == t.storeId) {
                          if (
                            ("collections" == i ||
                              "/search" == window.location.pathname) &&
                            e(s).hasClass("card-information__text")
                          ) {
                            let t = e(s)
                              .closest(".grid__item")
                              .find(".media--transparent");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          "products" == i &&
                            e(s).hasClass("media--transparent") &&
                            (e(s).prepend(a), (r = !0));
                        } else if (14504 == t.storeId) {
                          if (
                            ("collections" == i ||
                              "/search" == window.location.pathname ||
                              "/" == window.location.pathname) &&
                            e(s).hasClass("card-information__text")
                          ) {
                            let t = e(s)
                              .closest(".card-wrapper")
                              .find(".card__inner");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if (
                            ("products" == i &&
                              e(s).hasClass("product__media") &&
                              (e(s).prepend(a), (r = !0)),
                            "/" == window.location.pathname &&
                              e(s).hasClass("card-information__text") &&
                              e(s).parent().hasClass("collage-content__info"))
                          ) {
                            let t = e(s)
                              .closest(".collage-content")
                              .find(".collage-card__image-wrapper");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18475 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("height-inherit") &&
                            (e(s).prepend(a), (r = !0));
                        else if (12912 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("aspect-ratio") &&
                            (e(s).prepend(a), (r = !0));
                        else if (15960 == t.storeId)
                          "products" == i &&
                            (e(s)
                              .parent()
                              .hasClass("product-gallery__size-limiter") ||
                              e(s).hasClass("product-item")) &&
                            (e(s).prepend(a), (r = !0));
                        else if (18645 == t.storeId) {
                          if (
                            ("collections" == i ||
                              "/search" == window.location.pathname ||
                              "/" == window.location.pathname) &&
                            e(s).hasClass("card-information__text")
                          ) {
                            let t = e(s)
                              .closest(".card-wrapper")
                              .find(".card__inner");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18521 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("lazy-image") &&
                            (e(s).prepend(a), (r = !0));
                        else if (18583 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("rimage-wrapper")
                          ) {
                            e(s).closest(".main").length &&
                              !e(s).find(".bss_pl_img").length &&
                              (e(s).prepend(a), (r = !0));
                          }
                          "products" == i &&
                            e(s).hasClass("inner") &&
                            (e(s).prepend(a), (r = !0));
                        } else if (18652 == t.storeId) {
                          if ("products" == i && e(s).hasClass("nt_bg_lz")) {
                            let t = e(s)
                              .closest(".flickityt4s-slider")
                              .find(".img_ptw");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (5584 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("breadcrumbs-list__item")
                          ) {
                            let t = e(s)
                              .closest(".section-main-product")
                              .find(".rimage-wrapper");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if (
                            "/" == window.location.pathname &&
                            e(s).hasClass("image-cont")
                          ) {
                            let t = e(s).find(".rimage-wrapper");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18978 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image-wrap") &&
                            (e(s).prepend(a), (r = !0));
                        else if (19601 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("product-single__photo__item") ||
                              e(s).hasClass("o-ratio__content")) &&
                            (e(s).prepend(a), (r = !0));
                        else if (1634 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio--withFallback") &&
                            (e(s).prepend(a), (r = !0));
                        else if (18021 == t.storeId)
                          "products" == i &&
                            (e(s).hasClass("flickity-slider") ||
                              e(s).hasClass("product-image")) &&
                            (e(s).prepend(a), (r = !0));
                        else if (2370 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("gallery-cell")
                          ) {
                            let t = e(s)
                              .closest(".nine")
                              .find(".image__container");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          if (
                            ("products" == i ||
                              "/pages/search-results-page" ==
                                window.location.pathname) &&
                            e(s).hasClass("snize-product")
                          ) {
                            let t = e(s).find(".snize-thumbnail-wrapper");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (13635 == t.storeId)
                          "products" == i &&
                            e(s)
                              .parent()
                              .hasClass("product-list-item-thumbnail") &&
                            (e(s).prepend(a), (r = !0));
                        else if (4174 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("AspectRatio") &&
                            (e(s).parent().prepend(a), (r = !0));
                        else if (18435 == t.storeId)
                          ("collections" != i &&
                            "/search" != window.location.pathname &&
                            "/" != window.location.pathname) ||
                            !e(s).hasClass("product-image-container") ||
                            (e(s).prepend(a), (r = !0));
                        else if (5279 == t.storeId) {
                          if ("products" == i && e(s).hasClass("rimage")) {
                            let t = e(s).closest(".product-gallery__main_item");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (14138 == t.storeId) {
                          if ("products" == i && e(s).hasClass("fancybox")) {
                            let t = e(s)
                              .closest(".product_gallery")
                              .find(".flex-viewport");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (18256 == t.storeId) {
                          if (
                            (("collections" != i &&
                              "/search" != window.location.pathname &&
                              "products" != i) ||
                              !e(s).hasClass("product-container") ||
                              (e(s).prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("zoomWrapper") &&
                              (e(s).parent().prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("zoomWindowContainer"))
                          ) {
                            let t = e(s)
                              .closest(".template-product")
                              .find(".product-photo-container");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (15923 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("product-single__photo-wrapper")
                          ) {
                            let t = e(s).parent();
                            t.find(".bss_pl_img").length ||
                              (t.prepend(a), (r = !0)),
                              (r = !0);
                          }
                          "products" == i &&
                            e(s).hasClass("product-single__photo") &&
                            (r = !0);
                        } else if (14860 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image--responsive") &&
                            (e(s).parent().prepend(a), (r = !0));
                        else if (18505 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("rondell-item-crop") &&
                            (e(s).prepend(a), (r = !0));
                        else if (5544 == t.storeId) e(s).prepend(a), (r = !0);
                        else if (12840 == t.storeId || 17298 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("image-wrap") &&
                            (e(s).prepend(a), (r = !0));
                        else if (1341 == t.storeId)
                          ("collections" != i &&
                            "/search" != window.location.pathname &&
                            "products" != i) ||
                            !e(s).hasClass("grid-product__content") ||
                            (e(s).prepend(a), (r = !0));
                        else if (15434 == t.storeId)
                          ("collections" != i &&
                            "/search" != window.location.pathname) ||
                            !e(s).hasClass("card") ||
                            (e(s).find(".card__wrapper").prepend(a), (r = !0)),
                            "" == i &&
                              e(s).hasClass("product-media") &&
                              (e(s).parent().prepend(a), (r = !0));
                        else if (18353 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("div-block-179")
                          ) {
                            let t = e(s)
                              .closest(".product-image-wrapper")
                              .find(".slide-3");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (15661 == t.storeId) {
                          if ("" == i && e(s).hasClass("product-item")) {
                            let t = e(s).find(".product-item__image-wrapper");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          "" == i &&
                            e(s).hasClass("product-item__info-inner") &&
                            (r = !0);
                        } else if (18524 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("image-lazysize")
                          ) {
                            let t = e(s).closest(".slick-list");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (9835 == t.storeId) {
                          if (
                            ("collections" == i ||
                              "/search" == window.location.pathname ||
                              "products" == i) &&
                            e(s).hasClass("fswatch-value")
                          ) {
                            let t = e(s)
                              .closest(".grid_product_wrapper")
                              .find(".grid-link__image-centered");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                          "products" == i &&
                            e(s).hasClass("product-single-thumbnail") &&
                            (e(s).prepend(a), (r = !0));
                        } else if (18365 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product-media-container") &&
                            (e(s).prepend(a), (r = !0));
                        else if (9400 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("product__media") &&
                            (e(s).prepend(a), (r = !0)),
                            ("collections" != i &&
                              "/search" != window.location.pathname &&
                              "" != i) ||
                              (e(s).prepend(a), (r = !0));
                        else if (19017 == t.storeId) {
                          if (
                            "products" == i &&
                            e(s).hasClass("image__style")
                          ) {
                            let t = e(s)
                              .closest(".media-main")
                              .find(".image__style");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (14553 == t.storeId)
                          "products" == i &&
                            e(s).hasClass("sf-image") &&
                            (e(s).parent().prepend(a), (r = !0)),
                            "products" == i &&
                              e(s).hasClass("justify-center") &&
                              (e(s).parent().prepend(a), (r = !0));
                        else if (19141 == t.storeId) {
                          if (
                            ("products" == i &&
                              e(s).hasClass("product__media") &&
                              (e(s).prepend(a), (r = !0)),
                            ("collections" == i ||
                              "/search" == window.location.pathname ||
                              "/" == window.location.pathname) &&
                              e(s).hasClass("card-information__text"))
                          ) {
                            let t = e(s)
                              .closest(".card-wrapper")
                              .find(".card__inner");
                            t.length &&
                              !t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          }
                        } else if (
                          19111 == t.storeId &&
                          "/pages/search-results-page" ==
                            window.location.pathname &&
                          e(s).hasClass("snize-product")
                        ) {
                          let t = e(s).find(".snize-thumbnail-wrapper");
                          t.length &&
                            !t.find(".bss_pl_img").length &&
                            (t.prepend(a), (r = !0));
                        }
                        return r;
                      })(e, BSS_PL, r, s, d)),
                      l ||
                        (l = (function (e, t, s, i, a) {
                          let r = !1;
                          if (e(s).hasClass("product-item__link-wrapper"))
                            e(s).find(".product-item__image-container").length
                              ? (e(s)
                                  .find(".product-item__image-container")
                                  .prepend(a),
                                (r = !0))
                              : (e(s)
                                  .find("img")
                                  .wrap(
                                    '<div class="product-item__image-container"></div>'
                                  ),
                                e(s)
                                  .find(".product-item__image-container")
                                  .prepend(a),
                                (r = !0));
                          else if (
                            e(s).is(
                              ".product__photo.featured-product__photo"
                            ) &&
                            "" == i &&
                            e(s).find(
                              ".featured-product__photo-wrapper .product__photo--single"
                            ).length
                          )
                            e(s)
                              .find(
                                ".featured-product__photo-wrapper .product__photo--single"
                              )
                              .prepend(a),
                              (r = !0);
                          else if (
                            e(s).is(
                              ".grid__item.product-single__meta--wrapper"
                            ) &&
                            "" == i &&
                            e(s)
                              .closest(".grid.product-single")
                              .find(
                                ".product-single__media-wrapper .product-single__media"
                              ).length
                          )
                            e(s)
                              .closest(".grid.product-single")
                              .find(
                                ".product-single__media-wrapper .product-single__media"
                              )
                              .prepend(a),
                              (r = !0);
                          else if (e(s).hasClass("grid-view-item")) {
                            let i = e(s).find(".grid-view-item__image-wrapper");
                            if (i.length)
                              3220 == t.storeId &&
                              e(i).find(".img-holder").length
                                ? e(i).find(".img-holder").after(a)
                                : i.prepend(a),
                                (r = !0);
                            else if (4163 == t.storeId) {
                              var o = e(s).find("div.reveal");
                              o.length && (o.prepend(a), (r = !0));
                            }
                          } else if (
                            e(s).hasClass("rimage-wrapper") &&
                            "products" == i
                          ) {
                            let t = e(s)
                              .closest(".product-detail__images")
                              .find(".rimage-wrapper")
                              .first();
                            0 == t.find(".bss_pl_img").length &&
                              (t.prepend(a), (r = !0));
                          } else if (
                            e(s).find(
                              ".product-card__image-with-placeholder-wrapper"
                            ).length
                          )
                            e(s)
                              .find(
                                ".product-card__image-with-placeholder-wrapper"
                              )
                              .prepend(a),
                              (r = !0);
                          else if (e(s).hasClass("product-single__media"))
                            e(s)
                              .parent()
                              .hasClass("product-single__media-wrapper") &&
                              (e(s).prepend(a), (r = !0));
                          else if (
                            e(s).hasClass("product-single__photo") &&
                            !e(s)
                              .parent()
                              .hasClass("photos__item photos__item--main")
                          ) {
                            e(s)
                              .parent()
                              .hasClass("product-single__photo-wrapper") &&
                              (e(s).prepend(a), (r = !0));
                            let t = e(s).parent().parent();
                            t.hasClass("slick-list") &&
                              !t.children().hasClass("bss_pl_img") &&
                              (t.prepend(a), (r = !0));
                          } else if (e(s).hasClass("product-single__photos"))
                            e(s)
                              .parent()
                              .hasClass(
                                "product-single__featured-image-wrapper"
                              ) && (e(s).prepend(a), (r = !0));
                          else if (e(s).hasClass("featured-product__photo"))
                            e(s).prepend(a), (r = !0);
                          else if (
                            e(s).hasClass("product__photo-wrapper") &&
                            e(s).hasClass(
                              "product__photo-wrapper-product-template"
                            )
                          )
                            e(s).prepend(a), (r = !0);
                          else if (e(s).hasClass("grid-product__image-wrapper"))
                            e(s).find(".product--wrapper").length &&
                              (e(s).find(".product--wrapper").prepend(a),
                              (r = !0));
                          else if (e(s).hasClass("product__gallery"))
                            e(s).prepend(a), (r = !0);
                          else if (e(s).hasClass("product-card--list"))
                            e(s).find(".product-card__image-wrapper").length &&
                              (e(s)
                                .find(".product-card__image-wrapper")
                                .prepend(a),
                              (r = !0));
                          else if (
                            e(s).hasClass("product-media--featured-product")
                          )
                            e(s).prepend(a), (r = !0);
                          else if (
                            e(s).hasClass("card") &&
                            e(s).hasClass("critical-clear")
                          )
                            e(s).find(".card__image-wrapper").prepend(a),
                              (r = !0);
                          else if (
                            e(s).hasClass("grid-item") &&
                            e(s).find(".product-grid-image--centered").length
                          ) {
                            let t = e(s).find(".product-grid-image--centered");
                            t.css("position", "relative"),
                              t.prepend(a),
                              (r = !0);
                          } else if ("offers" == e(s).attr("itemprop"))
                            e(".grid-item .no-js.product__image-wrapper").length
                              ? e(
                                  ".grid-item .no-js.product__image-wrapper"
                                ).prepend(a)
                              : e(
                                  ".product-single__hero .grid__item .product-single__photos"
                                ).length &&
                                e(
                                  ".product-single__hero .grid__item .product-single__photos"
                                )
                                  .css("position", "relative")
                                  .prepend(a),
                              (r = !0);
                          else if (e(s).hasClass("product__img-wrapper"))
                            e(s).prepend(a), (r = !0);
                          else if (
                            e(s).hasClass("product-single__photo-wrapper") &&
                            e(s)
                              .parent()
                              .hasClass("product-single__photo--container")
                          )
                            e(s).css("position", "relative").prepend(a),
                              (r = !0);
                          else if (
                            e(s).hasClass("product-single__photo-wrapper") &&
                            e(s).parent().hasClass("grid__item")
                          )
                            e(s).css("position", "relative").prepend(a),
                              (r = !0);
                          else if (
                            e(s).hasClass("feature-row__text") &&
                            e(s).hasClass("feature-row__item")
                          ) {
                            let t = e(s).parent();
                            t.find(".feature-row__image-wrapper").length &&
                              !t.find(".supports-js").length &&
                              t.find(".feature-row__image-wrapper").prepend(a),
                              (r = !0);
                          } else if (e(s).hasClass("slideshow__slide")) r = !0;
                          else if (e(s).hasClass("product__image-container"))
                            e(s).prepend(a), (r = !0);
                          else if (
                            e(s).hasClass(
                              "product-gallery--image-background"
                            ) &&
                            e(s).parent().hasClass("product-gallery--media")
                          )
                            e(s).parent().prepend(a), (r = !0);
                          else if (
                            e(s).hasClass("zoomGalleryActive") &&
                            e(s).parent().hasClass("slick-slide")
                          )
                            e(".pt-product-single-img").prepend(a), (r = !0);
                          else if (
                            e(s).hasClass("cbb-also-bought-product") &&
                            e(s).find("a").length
                          ) {
                            if (2241 == t.storeId)
                              (d = e(s)
                                .find(".cbb-also-bought-product-image")
                                .closest("a")).length &&
                                (d.prepend(a), (r = !0));
                            else
                              e(".pt-product-single-img").find("a").prepend(a),
                                (r = !0);
                          } else if (
                            e(s).hasClass("product-block") &&
                            e(s).has("grid__item")
                          )
                            e(s).find(".product-block__image").length &&
                              (e(s).find(".product-block__image").prepend(a),
                              (r = !0));
                          else if (e(s).hasClass("image__container"))
                            e(s).css("position", "relative"),
                              e(s).prepend(a),
                              (r = !0);
                          else if (
                            e(s).hasClass("product-item") &&
                            e(s).find(".product-item__image-wrapper").length
                          ) {
                            (l = e(s).find(".product-item__image-wrapper")).css(
                              "position",
                              "relative"
                            ),
                              l.prepend(a),
                              (r = !0);
                          } else if (
                            e(s).hasClass("product-item") &&
                            e(s).find(".product-item__thumbnail").length
                          ) {
                            var l;
                            (l = e(s).find(".product-item__thumbnail")).css(
                              "position",
                              "relative"
                            ),
                              l.prepend(a),
                              (r = !0);
                          } else if (e(s).hasClass("product__main-photos"))
                            e(s).hasClass("aos-animate")
                              ? (r = !0)
                              : (e(s).prepend(a), (r = !0));
                          else if (e(s).hasClass("product-thumb"))
                            e(s)
                              .parent()
                              .hasClass("collection-products-wrapper") &&
                              (e(s).prepend(a), (r = !0)),
                              2656 == t.storeId && (r = !0);
                          else if (
                            e(s)
                              .parent()
                              .hasClass("shopify-product-gallery__image")
                          )
                            e(s).parent().prepend(a), (r = !0);
                          else if (
                            e(s).hasClass("product-collection__image") ||
                            e(s).hasClass("tt-image-box") ||
                            !e(s).parent().parent().hasClass("slick-slide")
                          )
                            if (e(s).hasClass("productitem")) {
                              let t = e(s).find(".productitem--image-link");
                              t.length &&
                                (t.css("position", "relative"),
                                t.prepend(a),
                                (r = !0));
                            } else if (e(s).hasClass("o-layout__item")) {
                              var n = e(s).find(".product__media");
                              n.length &&
                                (n.css("position", "relative"),
                                n.prepend(a),
                                (r = !0));
                            } else if (
                              e(s).hasClass("product-single__photo__item") &&
                              e(s).hasClass("slick-slide")
                            )
                              e(s).css("position", "relative"),
                                e(s).prepend(a),
                                (r = !0);
                            else if (
                              e(s).hasClass("product-galley--image-background")
                            )
                              e(s).css("position", "relative"),
                                e(s).prepend(a),
                                (r = !0);
                            else if (e(s).hasClass("grid-product__content"))
                              if (2788 === t.storeId) {
                                let t = e(s)
                                  .find(".grid-product__link")
                                  .find(".grid-product__image-mask");
                                t.length && (t.prepend(a), (r = !0));
                              } else
                                e(s).css("position", "relative"),
                                  e(s).prepend(a),
                                  (r = !0);
                            else if (
                              e(s).hasClass("thumbnail") &&
                              e(s).hasClass("columns")
                            )
                              e(s).find(".product_image").length &&
                                (e(s).find(".product_image").prepend(a),
                                (r = !0));
                            else if (
                              e(s).hasClass("fancybox") &&
                              e("#shopify-section-product-template .flexslider")
                                .length
                            )
                              e(s).parent().prepend(a), (r = !0);
                            else if (
                              e(s).hasClass("rimage-wrapper") ||
                              e(s).hasClass("rimage-outer-wrapper")
                            )
                              e(s)
                                .parent()
                                .parent()
                                .hasClass("thumbnail--media-image") ||
                                e(s).prepend(a),
                                (r = !0);
                            else if (
                              e(s).hasClass("product-media--image") &&
                              e(s).parent().hasClass("main")
                            )
                              0 == e(s).find(".bss_pl_img").length &&
                                0 ==
                                  e(s).find(".rimage-wrapper[data-handle]")
                                    .length &&
                                (e(s).css("position", "relative"),
                                e(s).prepend(a),
                                (r = !0));
                            else if (
                              !e(s).hasClass("recomatic-product-wrap") &&
                              e(s).hasClass("swiper-slide") &&
                              e(s).parent().hasClass("swiper-wrapper")
                            )
                              e(s).css("position", "relative"),
                                e(s).prepend(a),
                                (r = !0);
                            else if (
                              e(s).hasClass("product-single__photo") &&
                              e(s)
                                .parent()
                                .hasClass("photos__item photos__item--main")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("prod-image")) {
                              var d = e(s).parent();
                              e(d).hasClass("prod-container") &&
                                (e(d).css("position", "relative"),
                                e(d).prepend(a),
                                (r = !0));
                            } else if (
                              17162 != t.storeId &&
                              e(s).hasClass("aspect-ratio") &&
                              e(
                                "#shopify-section-product-template .flickity-viewport"
                              ).length
                            ) {
                              var p = e(
                                "#shopify-section-product-template .flickity-viewport"
                              );
                              0 == e(p).find(".bss_pl_img").length &&
                                (e(p).prepend(a), (r = !0));
                            } else if (e(s).hasClass("product-single__meta")) {
                              var c = e(s)
                                .parent()
                                .parent()
                                .find(
                                  ".product-single__featured-image-wrapper"
                                );
                              c.length && (e(c).prepend(a), (r = !0));
                            } else if (e(s).hasClass("featured-img"))
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s).hasClass("c-slide-product__wrap-image") &&
                              e(s).hasClass("slick-slide")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s).hasClass("image-cont") &&
                              e(s).hasClass("with-secondary-image")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("cart-mini-item-image"))
                              r = !0;
                            else if (
                              e(s).hasClass("product-gallery--media-wrapper")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("snize-product")) {
                              if (16487 == t.storeId && "collections" == i);
                              else
                                (h = e(s).find(".snize-thumbnail")).length &&
                                  (e(h).prepend(a), (r = !0));
                            } else if (
                              e(s).hasClass("fotorama__stage__frame") ||
                              e(s)
                                .parent()
                                .hasClass("product-page-gallery__thumbnail")
                            ) {
                              (d = e(
                                ".product-page-gallery__main--single.product-page-gallery__main"
                              )).length &&
                                0 == d.find(".bss_pl_img").length &&
                                (e(d).css("position", "relative"),
                                e(d).prepend(a)),
                                (r = !0);
                            } else if (e(s).hasClass("ProductItem__Wrapper"))
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("tt-image-box"))
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("tt-layout-vertical")) {
                              (h = e(s).find(".tt-img")).length &&
                                (e(h).prepend(a), (r = !0));
                            } else if (e(s).hasClass("mediaimageholder"))
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("zoom-container")) {
                              (d = e(
                                "#shopify-section-product__main .product-gallery__main .flickity-viewport"
                              )).length
                                ? e(d).prepend(a)
                                : e(s).prepend(a),
                                (r = !0);
                            } else if (
                              e(s).hasClass("recomatic-product-wrap")
                            ) {
                              var h;
                              (h = e(s).find(".recomatic-image-wrap")).length &&
                                (e(h).prepend(a), (r = !0));
                            } else if (
                              e(s).hasClass("product-element-top") &&
                              (e(s)
                                .parent()
                                .parent()
                                .hasClass("owl-carousel-item-inner") ||
                                e(s).parent().hasClass("product-grid-item"))
                            )
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("product-collection__image"))
                              "products" === i &&
                              e(s).hasClass("product-image--hover-fade") &&
                              2350 == t.storeId
                                ? (r = !0)
                                : (e(s).prepend(a), (r = !0));
                            else if (e(s).hasClass("gf_module-center"))
                              e(s).find("a").prepend(a), (r = !0);
                            else if (e(s).hasClass("vtl-product-card__header"))
                              e(s).find(".vtl-product-card__image").prepend(a),
                                (r = !0);
                            else if (
                              e(s).parent().hasClass("product-top") &&
                              e(s).hasClass("product-image")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s).hasClass("fancybox") &&
                              e(s).parent().hasClass("thumb")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s).hasClass("proHImage") ||
                              e(s).hasClass("proFeaturedImage")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s).hasClass("vtl-pb-main-widget__product-image")
                            ) {
                              (d = e(s).find("a")).length &&
                                (d.prepend(a),
                                d.css("text-decoration", "none"));
                              var _ = e(s).find(".bss-pl-frontend");
                              _.length && _.css("position", "relative"),
                                (r = !0);
                            } else if (e(s).hasClass("photo-zoom-link ")) {
                              (d = e(s).parent().parent()).hasClass(
                                "product-image-main"
                              ) && d.prepend(a),
                                (r = !0);
                            } else if (
                              e(s).hasClass("image--container") &&
                              e(s).parent().hasClass("image--root")
                            ) {
                              (d = e(s).parent().parent().parent()).hasClass(
                                "modal--link"
                              ) &&
                                0 == d.find(".bss_pl_img").length &&
                                (d.prepend(a), (r = !0));
                            } else if (
                              e(s).hasClass("mthumb") &&
                              e(s).parent().hasClass("owl-item")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (e(s).is("#bigimage"))
                              e(s).prepend(a), (r = !0);
                            else if (e(s).hasClass("position-relative"))
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s).hasClass("image-container-position")
                            ) {
                              (d = e(s).parent().parent()).hasClass(
                                "image-container"
                              ) &&
                                !d.find(".bss_pl_img").length &&
                                ((e(s).closest("header").length ||
                                  e(s).find("img.secondary-image").length) &&
                                5068 == t.storeId
                                  ? (r = !0)
                                  : (d.prepend(a), (r = !0)));
                            } else if (
                              e(s).hasClass("gallery__image-wrapper") &&
                              e(s).hasClass("gallery__image-wrapper--scale")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s).parent().hasClass("product-form--regular") &&
                              2163 == t.storeId
                            ) {
                              var f = (u =
                                e(s).closest(".product--outer")).find(
                                ".product-gallery.hover-zoom-enabled"
                              );
                              f.length && (f.prepend(a), (r = !0));
                            } else if (
                              e(s).hasClass("product__submedia-wrapper") ||
                              e(s).hasClass("product__media-wrapper")
                            )
                              e(s).prepend(a), (r = !0);
                            else if (
                              e(s)
                                .parent()
                                .hasClass("product-single__image-wrapper")
                            ) {
                              e(s)
                                .parent()
                                .css("position", "relative")
                                .prepend(a),
                                (r = !0);
                            } else
                              e(s).hasClass("product__image-wrapper") &&
                              e(s).hasClass("no-js")
                                ? (e(s).prepend(a), (r = !0))
                                : e(s).hasClass("product__photo--single") &&
                                  (e(s).prepend(a), (r = !0));
                          else e(s).parent().prepend(a), (r = !0);
                          if (
                            (window.location.pathname.includes(
                              "/rapid-search-results"
                            ) &&
                              e(s).hasClass("rps-product-image-container") &&
                              (e(s).prepend(a), (r = !0)),
                            "products" == i &&
                              e("[appendvariant = true]") &&
                              !e("[appendvariant = true]").find(".bss_pl_img")
                                .length &&
                              (e("[appendvariant = true]").append(a), (r = !0)),
                            Shopify &&
                              Shopify.theme &&
                              Shopify.theme.name &&
                              -1 !== Shopify.theme.name.indexOf("Dawn"))
                          ) {
                            if (e(s).hasClass("card-information__text")) {
                              var g = e(s)
                                .closest(".card-wrapper")
                                .find(".media");
                              e(g).length &&
                                !e(g).find(".bss_pl_img").length &&
                                (g.prepend(a), (r = !0));
                            }
                            if (
                              (e(s).hasClass("product__media") &&
                                (e(s).prepend(a), (r = !0)),
                              e(s).hasClass("product__info-container"))
                            ) {
                              var u = e(s)
                                .closest(".featured-product")
                                .find(".product__media");
                              e(u).length &&
                                !e(u).find(".bss_pl_img").length &&
                                (u.prepend(a), (r = !0));
                            }
                          }
                          return r;
                        })(e, BSS_PL, r, s, d)));
                  }
                }),
                  (2518 == BSS_PL.storeId &&
                    "products" == s &&
                    e(r).hasClass("AspectRatio")) ||
                    (function (e, t, s, i, a, r, o) {
                      if (!t) {
                        var l = "",
                          n = p(e, BSS_PL, s, i, a, r),
                          d =
                            !e(r).hasClass("swatchProductColor") &&
                            !e(r).hasClass("hero-content");
                        if (n.length && d) {
                          var c = "absolute" == e(r).css("position"),
                            h =
                              e(r).hasClass("aspect-ratio") &&
                              e(r)
                                .parent()
                                .hasClass("product-gallery__thumbnail");
                          if (
                            (e(r).hasClass("image-slide-link") &&
                              e(".product_gallery .slides").length &&
                              (r = e(".product_gallery .slides")),
                            e(".lh-big-slide .swiper-container").length &&
                              (r = e(".lh-big-slide .swiper-container")),
                            e(r).hasClass("product-single__photo-wrapper") &&
                              e(".product-single__photos.slick-slider")
                                .length &&
                              (r = e(".product-single__photos.slick-slider")),
                            e(r).hasClass("js-product") &&
                              e(r).hasClass("product") &&
                              e(r).find(".product__media") &&
                              (r = e(r).find(".product__media")),
                            e(r).hasClass("section__title-text") &&
                              e(r).hasClass("product-featured__title-text") &&
                              (r = e(r)
                                .parent()
                                .parent()
                                .parent()
                                .parent()
                                .find(".product-featured__photo__item")),
                            e(r).hasClass("product-item--horizontal") &&
                              e(r).find(".aspect-ratio ") &&
                              (r = e(r).find(".aspect-ratio")),
                            e(r).hasClass("flex__item") &&
                              e(r).find(
                                ".product-single__photo.product__photo-container "
                              ) &&
                              (r = e(r).find(
                                ".product-single__photo.product__photo-container "
                              )),
                            h && (r = e(".product-gallery__carousel")),
                            c)
                          ) {
                            -1 !==
                              [
                                15661, 3010, 1244, 5558, 5460, 5590, 5738, 5793,
                                1393, 3341, 547, 6242, 4526, 4989, 6913, 6292,
                                5420, 5180, 8302, 8721, 11867, 10326, 12623,
                                13156, 16153, 16147, 17455,
                              ].indexOf(BSS_PL.storeId) ||
                              e(r).wrapInner(
                                "<div class='bss_pl_img_wrapper' style='position:relative' />"
                              );
                          } else {
                            -1 !==
                              [5558, 5460, 5590, 5738, 5793, 3341].indexOf(
                                BSS_PL.storeId
                              ) ||
                              (2749 == BSS_PL.storeId && "collections" == o) ||
                              e(r).css("position", "relative");
                          }
                          if (e(r).hasClass("product-fancybox")) {
                            var _ = e(r).parent().parent();
                            e(_).hasClass("product-image-container") && (r = _);
                          }
                          if (
                            ((l +=
                              '<div class="bss_pl_img" style="display: block !important;">'),
                            (l += n.join("")),
                            (l += "</div>"),
                            c)
                          )
                            3010 == BSS_PL.storeId
                              ? e(r).find(".bss_pl_img").length ||
                                e(r).prepend(l)
                              : (4526 == BSS_PL.storeId && "products" == o) ||
                                e(r).find(".bss_pl_img_wrapper").append(l);
                          else if (!e(r).find(".bss_pl_img").length) {
                            if (8172 == BSS_PL.storeId && "products" == o)
                              return;
                            if (16487 == BSS_PL.storeId && "products" == o)
                              return;
                            e(r).prepend(l);
                          }
                        }
                      }
                    })(e, l, i, t, _, r, s);
              })(l),
              d.length &&
                BSS_PL.initForBadgeProductImage(e, BSS_PL, d, a, t, _, o, s, r),
              c.length &&
                BSS_PL.initForBadgeCustomSelector(
                  e,
                  BSS_PL,
                  c,
                  a,
                  t,
                  _,
                  o,
                  s,
                  r,
                  f
                ),
              h.length &&
                BSS_PL.initForBadgePrice(e, BSS_PL, h, a, t, _, o, s, r),
              n.length &&
                BSS_PL.initForBadgeProductName(e, BSS_PL, n, a, t, _, o, s, r),
              (() => {
                if (e(".bss_pb_img").length) {
                  let t = e(".bss_pb_img");
                  e.each(t, function (t, s) {
                    "relative" !== e(s).css("position") &&
                      e(s).css("position", "relative"),
                      "25px" !== e(s).css("min-height") &&
                        e(s).css("min-height", "25px"),
                      e(s).prev(".product-item__price-list.price-list")
                        .length &&
                        5112 == BSS_PL.storeId &&
                        e(s).find(".bss-pb-frontend").length &&
                        e(s)
                          .find(".bss-pb-frontend")
                          .css("position", "relative"),
                      setTimeout(function () {
                        let t = 0;
                        e(s).find(".bss-pb-frontend").length &&
                          e.each(e(s).children(), function (i, a) {
                            let r = e(a);
                            t = r.height();
                            let o = r.css("margin-top");
                            (t = parseInt(t) + parseInt(o)),
                              parseInt(e(s).height()) < t &&
                                e(s).height(t + "px");
                          }),
                          e(s).prev().hasClass("bss_pb_img") &&
                            e(s).css("margin-top", "5px");
                      }, 700);
                  });
                }
              })();
          });
        }
      });
    }
    function f(e, t, s, i, a) {
      var r = [],
        o = [],
        l = window.location.pathname;
      l.endsWith("/") && (l = l.slice(0, -1));
      var n = l.split("/"),
        d = n[n.length - 1],
        p = n[n.length - 2];
      if (
        (1 == n.length && (p = ""),
        s.length &&
          s.each(function (s, i) {
            var a = (function (e, t, s, i) {
              if (2569 != t.storeId || !e(i).hasClass("image-element__wrap")) {
                if (e(i).hasClass("inline-item")) return !0;
                if (e(i).hasClass("breadcrumb-active")) return !1;
                if (e(i).hasClass("grid-link__title")) return !0;
                if (
                  4403 == t.storeId &&
                  e(i).parent().hasClass("cbb-frequently-bought-product")
                )
                  return !0;
                if (
                  10713 == t.storeId &&
                  e(i).parent().parent().hasClass("testimonial-content")
                )
                  return !0;
                if (5047 == t.storeId) {
                  if (e(i).parent().hasClass("box")) return;
                  if (e(i).hasClass("slide__item slide__item-image")) return;
                }
                if (
                  4654 != t.storeId ||
                  !e(i).parent().hasClass("logo__wrapper")
                ) {
                  if (e(i).hasClass("menu-navigation__item")) return !0;
                  if (e(i).hasClass("mobile-nav__link")) return !0;
                  if (e(i).hasClass("drawer__nav-link")) return !0;
                  if (e(i).closest(".menuDropdown").length && 2837 == t.storeId)
                    return !0;
                  if (e(i).parent().hasClass("product-navigation")) return !0;
                  if (e(i).hasClass("breadcrumb_link")) return !0;
                  if (e(i).hasClass("page__navigation-item")) return !0;
                  if (e(i).hasClass("mini-cart__product-vendor")) return !0;
                  if (e(i).hasClass("mini-cart__product-title")) return !0;
                  if (
                    e(i).hasClass("thumbnail") &&
                    e(i).hasClass("slick-slide")
                  )
                    return !0;
                  if (
                    e(i).hasClass("button-main2") &&
                    e(i).hasClass("animated")
                  )
                    return !0;
                  if (e(i).hasClass("banner-full-link")) return !0;
                  if (e(i).hasClass("site-nav__link")) return !0;
                  if (e(i).parent().hasClass("product-single__description"))
                    return !1;
                  if (
                    e(i)
                      .parent()
                      .parent()
                      .hasClass("product-single__description")
                  )
                    return !0;
                  if (
                    e(i).parent().hasClass("product-title") &&
                    e(i).hasClass("chp") &&
                    e(i).hasClass("cd")
                  )
                    return !0;
                  if (
                    e(i).hasClass("thumbnail") &&
                    e(i).hasClass("thumbnail--media-image")
                  )
                    return !0;
                  if (e(i).hasClass("show-gallery")) return !0;
                  if (e(i).hasClass("ssw-review-title")) return !0;
                  if (e(i).parent().hasClass("cart-mini-item-title")) return !0;
                  if (
                    e(i).parent().hasClass("product-next") ||
                    e(i).parent().hasClass("product-prev")
                  )
                    return !0;
                  if (e(i).parent().hasClass("thumbItem")) return !0;
                  if (e(i).hasClass("product-gallery__link") && e(i).is("a"))
                    return !0;
                  if (
                    e(i).hasClass("jas_bg") &&
                    e(i).parent().hasClass("hover-img")
                  )
                    return !0;
                  if (e(i).parent("#breadcrumb").length) return !1;
                  if (e(i).parent("#gallery").length) return !0;
                  if (
                    1418 !== t.storeId &&
                    (("noopener noreferrer" == e(i).attr("rel") &&
                      "_blank" == e(i).attr("target")) ||
                      e(i).parent().is("span") ||
                      e(i)
                        .parent()
                        .parent()
                        .parent()
                        .hasClass("reading-container"))
                  )
                    return !0;
                  if (e(i).hasClass("ly-languages-switcher-link")) return !0;
                  if (3232 == t.storeId && e(i).hasClass("mobile-nav__item"))
                    return !0;
                  if (e(i).closest("div.rte").find("em").length) return !0;
                  if (e(i).parent(".mini_cart_item").length) return !0;
                  if (e(i).parent("li[data-thumb]").length) return !0;
                  if (
                    e(i).hasClass("image--container") &&
                    e(i).parent().parent().hasClass("product-page--thumb")
                  )
                    return !1;
                  if (
                    e(i).hasClass("product-page--next") &&
                    e(i).hasClass("right")
                  )
                    return !0;
                  if (e(i).hasClass("clicker-thumb")) return !0;
                  if (e(i).hasClass("product-single__thumbnails-item"))
                    return !0;
                  if (e(i).parent().hasClass("breadcrumbs")) return !0;
                  if (e(i).parent().hasClass("page-navigation-arrows"))
                    return !0;
                  if (e(i).parent().parent().is("ul") && 1545 === t.storeId)
                    return !0;
                  if (
                    e(i).closest(".single-breadcrumbs-wrapper").length &&
                    2656 == t.storeId
                  )
                    return !0;
                  if (
                    e(i).parent().hasClass("single-pr-nav") &&
                    2656 == t.storeId
                  )
                    return !0;
                  if (
                    2800 == t.storeId &&
                    e(i).parent().parent().hasClass("font-size__basic")
                  )
                    return !0;
                  if (e(i).closest(".tmenu_submenu").length) return !0;
                  if (e(i).parent().hasClass("product-description__no-expand"))
                    return !0;
                  if (e(i).hasClass("bubble-product-link")) return !0;
                  if (e(i).closest(".promo_banner__content").length) return !0;
                  if (e(i).hasClass("product__thumb") && 3011 == t.storeId)
                    return !0;
                  if (e(i).closest("ul.submenu") && 3122 == t.storeId)
                    return !0;
                  if (
                    e(i).hasClass("product-page--previous") ||
                    e(i).hasClass("product-page--next")
                  )
                    return !0;
                  if (
                    3214 == t.storeId &&
                    "products" == s &&
                    e(i).parent().hasClass("slick-slide")
                  )
                    return !0;
                  if (
                    1551 == t.storeId &&
                    e(i).parent().hasClass("product-title")
                  )
                    return !0;
                  if (
                    5068 == t.storeId &&
                    e(i).find(".image-container-position").length &&
                    !e(i).closest(".primary-image-container").length &&
                    "products" == s
                  )
                    return !0;
                  var a = [5175, 5358, 5354, 5357, 5355, 5356];
                  if (
                    -1 !== a.indexOf(t.storeId) &&
                    "" == s &&
                    e(i).hasClass("ProductItem__Wrapper")
                  )
                    return !0;
                  if (
                    -1 !== a.indexOf(t.storeId) &&
                    "products" == s &&
                    e(i).hasClass("AspectRatio--withFallback")
                  )
                    return !0;
                  if (
                    1417 == t.storeId &&
                    "" == s &&
                    e(i).parent().hasClass("product-meta__title")
                  )
                    return !0;
                  if (1417 == t.storeId && e(i).hasClass("slideshow__button"))
                    return !0;
                  if (
                    1427 == t.storeId &&
                    e(i).parent().parent().hasClass("logo__image-wrapper")
                  )
                    return !0;
                  if (1858 == t.storeId && e(i).closest(".header-logo").length)
                    return !0;
                  if (
                    e(i).hasClass("standard-link") ||
                    e(i).hasClass("more-link")
                  )
                    return !0;
                  if (
                    -1 !== [5558, 5460, 5590, 5738, 5793].indexOf(t.storeId)
                  ) {
                    if (
                      e(i)
                        .parent()
                        .parent()
                        .hasClass("easytabs-content-holder") &&
                      "products" == s
                    )
                      return !0;
                    if (e(i).hasClass("shogun-image-link") && "products" == s)
                      return !0;
                    if (e(i).parent().hasClass("envyProductText")) return !0;
                  }
                  return (
                    !!(
                      e(i).hasClass("submenu-item__title") ||
                      (e(i).hasClass("product-single__thumbnail") &&
                        6193 == t.storeId)
                    ) ||
                    !(
                      5867 != t.storeId || !e(i).closest(".product-wrap").length
                    ) ||
                    !(
                      3687 != t.storeId || !e(i).closest(".tab-content").length
                    ) ||
                    !(5662 != t.storeId || !e(i).hasClass("snize-item")) ||
                    !(
                      2837 != t.storeId ||
                      !(
                        e(i).hasClass("wishlistadd") ||
                        e(i).hasClass("compare_add") ||
                        e(i).parent().hasClass("al_center")
                      )
                    ) ||
                    !(
                      6673 != t.storeId ||
                      !e(i).hasClass("prev") ||
                      !e(i).hasClass("btn")
                    ) ||
                    !(6673 != t.storeId || !e(i).hasClass("product-title")) ||
                    !(
                      8473 != t.storeId ||
                      !e(i).closest("#product-loop").parent().hasClass("row")
                    ) ||
                    !(
                      9011 != t.storeId ||
                      !e(i).parent().hasClass("product") ||
                      "products" != s
                    ) ||
                    !(
                      5970 != t.storeId ||
                      !e(i).closest(".product-description").length ||
                      "products" != s
                    ) ||
                    !(
                      1936 != t.storeId ||
                      !e(i).parent().hasClass("image-element__wrap") ||
                      "products" != s
                    ) ||
                    !(
                      10662 != t.storeId ||
                      !e(i).closest(".item-cart").length ||
                      "products" != s
                    ) ||
                    !(
                      12519 != t.storeId ||
                      !e(i).closest(".nav_arrows").length ||
                      "products" != s
                    ) ||
                    !(
                      7367 != t.storeId ||
                      "products" != s ||
                      !e(i)
                        .parent()
                        .parent()
                        .parent()
                        .hasClass("product-single__desc")
                    ) ||
                    !(
                      10147 != t.storeId ||
                      !e(i).closest("nav.breadcrumbs").length ||
                      "products" != s
                    ) ||
                    !(
                      13777 != t.storeId ||
                      (!e(i).hasClass("product-item__action-button") &&
                        !e(i).hasClass("product-item__title"))
                    ) ||
                    !(
                      14187 != t.storeId ||
                      !e(i).parent().hasClass("product-name") ||
                      "collections" != s
                    ) ||
                    !(
                      13821 != t.storeId ||
                      !e(i).hasClass("product__thumb") ||
                      "products" != s
                    ) ||
                    !(
                      13265 != t.storeId ||
                      !e(i).parent().hasClass("breadcrumbs-list__item") ||
                      "products" != s
                    ) ||
                    !(
                      15125 != t.storeId ||
                      (!e(i).parent().hasClass("link-list__item") &&
                        !e(i).parent().hasClass("pg__thumb"))
                    ) ||
                    !(
                      14136 != t.storeId ||
                      !e(i).parent().hasClass("product__nav")
                    ) ||
                    !(
                      3345 != t.storeId ||
                      !e(i).closest(".description").length ||
                      "products" != s
                    ) ||
                    !(
                      10773 != t.storeId ||
                      !e(i).closest(".main-image").length ||
                      "products" != s
                    ) ||
                    !(
                      15696 != t.storeId ||
                      (!e(i)
                        .parent()
                        .parent()
                        .parent()
                        .hasClass("mega_dropdown") &&
                        !e(i).closest(".site-nav").length)
                    ) ||
                    !(
                      15303 != t.storeId ||
                      !(
                        e(i)
                          .parent()
                          .hasClass("cbb-frequently-bought-product") ||
                        e(i).parent().parent().hasClass("p1") ||
                        e(i).closest(".cbb-frequently-bought-selector-list")
                          .length
                      )
                    ) ||
                    !(
                      15469 != t.storeId ||
                      (!e(i).parent().hasClass("snize-product") &&
                        !e(i)
                          .parent()
                          .hasClass("cbb-frequently-bought-product"))
                    ) ||
                    !(
                      16886 != t.storeId ||
                      !e(i).parent().hasClass("product-index")
                    ) ||
                    !(
                      16577 != t.storeId ||
                      !e(i).parent().hasClass("swiper-slide") ||
                      "" != s
                    ) ||
                    !(
                      16502 != t.storeId ||
                      (!e(i).closest(".product-recommendations").length &&
                        !e(i).closest(".recently-viewed").length)
                    ) ||
                    !(
                      10783 != t.storeId ||
                      "products" != s ||
                      !e(i).parent().hasClass("jcarousel-item")
                    ) ||
                    !(
                      10504 != t.storeId ||
                      !e(i).parent().hasClass("product__inline__title")
                    ) ||
                    !(
                      16272 != t.storeId ||
                      "products" != s ||
                      !e(i).parent().hasClass("isp_related_product_name")
                    ) ||
                    !(
                      17783 != t.storeId ||
                      "products" != s ||
                      !e(i).hasClass("Product__SlideshowNavImage")
                    ) ||
                    !(
                      16645 != t.storeId || !e(i).closest(".item-cart").length
                    ) ||
                    !(
                      11656 != t.storeId ||
                      !e(i).hasClass("product-item__image-wrapper")
                    )
                  );
                }
              }
            })(e, t, p, i);
            let l =
              12552 == t.storeId &&
              window.location.pathname.includes("/apps/bundles");
            if (
              (!a || l) &&
              (e(i).attr("data-bss-pl", "active"),
              !(
                e(i).closest("#slidecarthq").length ||
                e(i).closest("#CartContainer").length ||
                e(i).closest(".social-sharing").length
              ))
            ) {
              var n = e(i).attr("href");
              if (
                (10925 == t.storeId &&
                  t.checkProductPage &&
                  (n = e('meta[itemprop="url"]').attr("content")),
                3010 == t.storeId &&
                  "wearables" == pageName &&
                  (n = e(i).attr("data-href")),
                3772 == t.storeId)
              ) {
                let t = e(i).closest(".productgrid--item");
                t.length && (n = t.attr("data-product-quickshop-url"));
              }
              if (6653 == t.storeId && "" === pageName)
                var c = e(i).attr("data-product-handle");
              else c = t.getHandleByUrl(n);
              if (
                (5047 == t.storeId &&
                  e(i).parent().hasClass("MagicToolboxSlide") &&
                  (c = d),
                8281 == t.storeId &&
                  e(i).parent().hasClass("product-image-inner") &&
                  (c = d),
                7658 == t.storeId &&
                  e(i).parent().hasClass("MagicToolboxSlide") &&
                  (c = d),
                5705 == t.storeId &&
                  e(i).parent().hasClass("first-image") &&
                  (c = d),
                5728 == t.storeId &&
                  e(i).parent().hasClass("col-md-8") &&
                  (c = d),
                7363 == t.storeId &&
                  e(i).parent().hasClass("gallery-cell") &&
                  (c = d),
                6398 == t.storeId &&
                  e(i).parent().hasClass("rondell-container") &&
                  (c = d),
                e(i).hasClass("product__media-wrapper") ||
                  e(i).hasClass("product__image-wrapper"))
              ) {
                let s = e(i).parent();
                if (
                  (s.hasClass("product__media-container") ||
                    s.hasClass("product__image-container")) &&
                  e("#shopify-section-product-template").length
                ) {
                  let s = e("#shopify-section-product-template")
                    .find("meta[itemprop='url']")
                    .attr("content");
                  c = t.getHandleByUrl(s);
                }
              }
              if (
                (e(i).hasClass("product-image__link") &&
                  e(i).find(".product-media-wrapper").length &&
                  e("#shopify-section-product-template").length &&
                  (c = d),
                3248 == t.storeId &&
                  e(i).hasClass("rondell-item") &&
                  e(i).parent().hasClass("rondell-container") &&
                  (c = d),
                e(i).hasClass("fancybox-media") && (c = d),
                e(i).hasClass("nt-pr_metro-image-equal") && (c = d),
                e(i).hasClass("product__thumb"))
              ) {
                if (!e("#shopify-section-product-template").length) return;
                c = d;
              }
              if (
                (e(i).hasClass("product-single__photo-zoom") &&
                  e(".section--product-single").length &&
                  (c = d),
                e(i).hasClass("main-img-link") &&
                  e(i).parent().hasClass("product-media--image") &&
                  (c = d),
                e(i).hasClass("js-modal-open-product-modal") &&
                  e("#shopify-section-product-template").length &&
                  (c = d),
                19111 == t.storeId &&
                  "/" == window.location.pathname &&
                  e(i).hasClass("swiper-slide") &&
                  (e(i).addClass("label-item"), e(i).attr("data-handle", c)),
                1418 == t.storeId &&
                  e(i).parent().parent().parent().hasClass("rte") &&
                  (e(i).addClass("label-item"), e(i).attr("data-handle", c)),
                (4078 != t.storeId && 4085 != t.storeId && 4084 != t.storeId) ||
                  (e(i).hasClass("MagicZoomPlus") &&
                    e(i).parent().hasClass("MagicToolboxContainer") &&
                    (c = d)),
                5062 == t.storeId &&
                  e(i).closest(".clerk-sometime-search-products-2").length &&
                  (e(i).find(".clerk-sometime-search-product-image").length &&
                    e(i)
                      .find(".clerk-sometime-search-product-image")
                      .attr("data-handle", c),
                  e(i)
                    .closest(".clerk-sometime-search-products-2")
                    .attr("data-handle") &&
                    e(i)
                      .closest(".clerk-sometime-search-products-2")
                      .removeAttr("data-handle")),
                c)
              )
                if (
                  (-1 !== c.indexOf("#Reviews") &&
                    (c = c.slice(0, c.indexOf("#Reviews"))),
                  -1 == e.inArray(c, r) &&
                    (r.push(c),
                    o.push('handle:"' + decodeURIComponent(c) + '"')),
                  !window.location.href.includes("/cart") ||
                    window.location.href.includes("/collections/") ||
                    window.location.href.includes("/products/"))
                )
                  e(i).hasClass("list-view-item") &&
                  e(i).find(".list-view-item__image-wrapper").length
                    ? e(i)
                        .find(".list-view-item__image-wrapper")
                        .attr("data-handle", c)
                    : e(i).hasClass("grid-link") &&
                      e(i).find(".product__img-wrapper").length
                    ? e(i).find(".product__img-wrapper").attr("data-handle", c)
                    : e(i).hasClass("grid-link") &&
                      e(i).parent().hasClass("product-container")
                    ? e(i).parent().attr("data-handle", c)
                    : e(i).hasClass("product__thumb")
                    ? e("#shopify-section-product-template").length &&
                      e("#shopify-section-product-template").find(
                        ".product__main-photos"
                      ).length &&
                      e("#shopify-section-product-template")
                        .find(".product__main-photos")
                        .attr("data-handle", c)
                    : e(i).hasClass("ls-p-url")
                    ? e(i).find(".ls-p-img-div").attr("data-handle", c)
                    : (8473 == t.storeId
                        ? e(i)
                            .closest("#product-loop")
                            .parent()
                            .hasClass("row") ||
                          e(i).parent().attr("data-handle", c)
                        : (5062 == t.storeId &&
                            e(i).closest(".clerk-sometime-search-products-2")
                              .length) ||
                          (13424 == t.storeId &&
                            window.location.href.includes("/pages") &&
                            e(i).closest(".slider").length &&
                            e(i).find(".slide-image").length &&
                            e(i).find(".slide-image").attr("data-handle", c)),
                      window.location.pathname.includes("/rapid-search-results")
                        ? e(i).find(".rps-product-image-container").length &&
                          e(i)
                            .find(".rps-product-image-container")
                            .attr("data-handle", c)
                        : e(i).parent().attr("data-handle", c));
                else {
                  if (e(i).hasClass("cart__image"))
                    e(i).find(".rimage").attr("data-handle", c);
                  else {
                    var h = e(i).closest("td").find("img");
                    e(h)
                      .parent()
                      .css({ position: "relative", display: "block" })
                      .attr("data-handle", c);
                  }
                  if (
                    (4237 === t.storeId &&
                      e(i).parent("cart-item__image") &&
                      e(i).attr("data-handle", c),
                    12229 === t.storeId &&
                      e(i).parent().hasClass("list-view-item__title"))
                  ) {
                    let t = e(i).closest(".cart__row");
                    t.length > 0 && t.attr("data-handle", c);
                  }
                }
            }
          }),
        "products" == p &&
          -1 == e.inArray(d, r) &&
          a &&
          (r.push(d), o.push('handle:"' + decodeURIComponent(d) + '"')),
        e(".index-section--featured-product:not([data-bss-pl=active])").length
          ? e(
              ".index-section--featured-product:not([data-bss-pl=active])"
            ).each(function () {
              e(this).attr("data-bss-pl", "active");
              var t = e(this).children(":first").attr("data-section-id");
              if (t) {
                var s = !1;
                if (e("#ProductJson-" + t).length)
                  s = JSON.parse(e("#ProductJson-" + t).html());
                else if (
                  e(this).find("script").length &&
                  "application/json" === e(this).find("script").attr("type")
                )
                  try {
                    s = JSON.parse(e(this).find("script").html());
                  } catch (e) {
                    console.log("Not found featured product JSON data");
                  }
                s &&
                  (-1 == e.inArray(s.handle, r) &&
                    (r.push(s.handle),
                    o.push('handle:"' + decodeURIComponent(s.handle) + '"')),
                  e(this).find(".product__photo.featured-product__photo").length
                    ? e(this)
                        .find(".product__photo.featured-product__photo")
                        .attr("data-handle", s.handle)
                    : e(this).find(".product-single__media").length
                    ? e(this)
                        .find(".product-single__media")
                        .attr("data-handle", s.handle)
                    : e(this).find(".product-media--featured-product").length
                    ? e(this)
                        .find(".product-media--featured-product")
                        .attr("data-handle", s.handle)
                    : e(this).find(".product-single__photo-wrapper").length
                    ? e(this)
                        .find(".product-single__photo-wrapper")
                        .attr("data-handle", s.handle)
                    : e(this)
                        .find("img.product-featured-img")
                        .closest(".product-single__photo")
                        .attr("data-handle", s.handle));
              }
            })
          : e("#shopify-section-featured-product:not([data-bss-pl=active])")
              .length &&
            (e(
              "#shopify-section-featured-product:not([data-bss-pl=active])"
            ).each(function () {
              e(this).attr("data-bss-pl", "active");
              var t = e(this).children(":first").attr("data-section-id");
              if (t) {
                var s = !1;
                if (e("#ProductJson-" + t).length)
                  s = JSON.parse(e("#ProductJson-" + t).html());
                else if (
                  e(this).find("script").length &&
                  "application/ld+json" === e(this).find("script").attr("type")
                ) {
                  let t = (s = JSON.parse(
                    e(this).find("script").html()
                  )).url.split("/");
                  s.handle = t[t.length - 1];
                }
                s &&
                  (-1 == e.inArray(s.handle, r) &&
                    (r.push(s.handle),
                    o.push('handle:"' + decodeURIComponent(s.handle) + '"')),
                  e(this).find(".product-single__media").length
                    ? e(this)
                        .find(".product-single__media")
                        .attr("data-handle", s.handle)
                    : e(this).find(".product__media-wrapper .product__gallery")
                        .length
                    ? e(this)
                        .find(".product__media-wrapper .product__gallery")
                        .attr("data-handle", s.handle)
                    : e(this).find(".product__photo.featured-product__photo")
                        .length
                    ? e(this)
                        .find(".product__photo.featured-product__photo")
                        .attr("data-handle", s.handle)
                    : e(this)
                        .find("img.product-featured-img")
                        .closest(".product-single__photo")
                        .attr("data-handle", s.handle));
              }
            }),
            e("#shopify-section-featured-product")
              .parent()
              .find(
                ".shopify-section:not([data-bss-pl=active]) section.product"
              ).length &&
              e("#shopify-section-featured-product")
                .parent()
                .find(".shopify-section:not([data-bss-pl=active])")
                .each(function () {
                  e(this).attr("data-bss-pl", "active");
                  var t = e(this).children(":first").attr("data-section-id");
                  if (t) {
                    var s = !1;
                    if (e("#ProductJson-" + t).length)
                      s = JSON.parse(e("#ProductJson-" + t).html());
                    else if (
                      e(this).find("script").length &&
                      "application/ld+json" ===
                        e(this).find("script").attr("type")
                    ) {
                      let t = (s = JSON.parse(
                        e(this).find("script").html()
                      )).url.split("/");
                      s.handle = t[t.length - 1];
                    }
                    s &&
                      (-1 == e.inArray(s.handle, r) &&
                        (r.push(s.handle),
                        o.push(
                          'handle:"' + decodeURIComponent(s.handle) + '"'
                        )),
                      e(this).find(".product-single__media").length
                        ? e(this)
                            .find(".product-single__media")
                            .attr("data-handle", s.handle)
                        : e(this).find(
                            ".product__media-wrapper .product__gallery"
                          ).length
                        ? e(this)
                            .find(".product__media-wrapper .product__gallery")
                            .attr("data-handle", s.handle)
                        : e(this).find(
                            ".product__photo.featured-product__photo"
                          ).length
                        ? e(this)
                            .find(".product__photo.featured-product__photo")
                            .attr("data-handle", s.handle)
                        : e(this)
                            .find("img.product-featured-img")
                            .closest(".product-single__photo")
                            .attr("data-handle", s.handle));
                  }
                })),
        r.length)
      ) {
        var c = "/search.js?q=" + o.join(" OR ") + "&view=bss.product.labels",
          h = Math.round(o.length / 2),
          f = o.length,
          g = encodeURI(c);
        (h = Math.round(o.length / 2)), (f = o.length);
        g = (g = (g = (g = g.replace(/#product-reviews/g, "")).replace(
          /#judgeme_product_reviews/g,
          ""
        ))
          .replace(/#content/g, "")
          .replace(/#spetses-2/g, "")).replace(/#/g, "");
        if (2964 == t.storeId || 5719 == t.storeId || 4589 == t.storeId) {
          var u = encodeURI(
            "/search.js?q=" +
              o.splice(h, f - h + 1).join(" OR ") +
              "&view=bss.product.labels"
          );
          u = u
            .replace(/#product-reviews/g, "")
            .replace(/#judgeme_product_reviews/g, "");
          var m = encodeURI(
            "/search.js?q=" +
              o.splice(0, f - h + 1).join(" OR ") +
              "&view=bss.product.labels"
          );
          (m = m
            .replace(/#product-reviews/g, "")
            .replace(/#judgeme_product_reviews/g, "")),
            _(e, u, p, d, i),
            _(e, m, p, d, i);
        } else if (
          -1 !==
          [
            8473, 8645, 10772, 11377, 11741, 12501, 12870, 10504, 2502, 16882,
            10783, 6526, 17356, 16574, 18524, 18849,
          ].indexOf(t.storeId)
        ) {
          let s = [],
            a = t.divideHandlesUrl(o);
          for (let e = 0; e < a.length; e++) {
            var b = encodeURI(
              "/search.js?q=" + a[e].join(" OR ") + "&view=bss.product.labels"
            );
            (b = b
              .replace(/#product-reviews/g, "")
              .replace(/#judgeme_product_reviews/g, "")),
              s.push(b);
          }
          for (let t = 0; t < s.length; t++) _(e, s[t], p, d, i);
        } else _(e, g, p, d, i);
      }
    }
    function g(e, t, s, i, a, r, o) {
      if (!t) {
        var l = "",
          n = BSS_PL.getCollectionImageList(s, i, a, r),
          d =
            !e(r).hasClass("swatchProductColor") &&
            !e(r).hasClass("hero-content");
        if (n.length && d) {
          e(r).css("position"),
            e(r).hasClass("aspect-ratio") &&
              e(r).parent().hasClass("product-gallery__thumbnail");
          e(r).css("position", "relative"),
            (l +=
              '<div class="bss_pl_img" style="display: block !important; padding-left: inherit; padding-top: inherit ; ">'),
            (l += n.join("")),
            (l += "</div>"),
            e(r).prepend(l);
        }
      }
    }
    function u(e, t) {
      (t.initCollections = function () {
        var s = e("img:not([data-bss-pl=active]):not(.action-link)").closest(
          "a"
        );
        -1 != [11656].indexOf(t.storeId) &&
          (s = e(
            'a[href*="/collections/"]:not([data-bss-pl=active]):not(.action-link)'
          )),
          t.addLabelcollections(s);
      }),
        (t.getHandleByUrlCollections = function (e) {
          e.indexOf("?") > 0 && (e = e.substring(0, e.indexOf("?")));
          var t = "";
          e.indexOf("collections") > 0 && (t = e.split("/").pop(-1));
          return t;
        }),
        (t.addLabelcollections = function (s) {
          var i = [],
            a = window.location.pathname;
          a.endsWith("/") && (a = a.slice(0, -1));
          var r = a.split("/"),
            o = r[r.length - 1],
            l = r[r.length - 2];
          1 == r.length && (l = ""),
            s.length &&
              s.each(function (s, a) {
                var r;
                e(a).attr("data-bss-pl", "active"),
                  (r = e(a).attr("href")
                    ? t.getHandleByUrlCollections(e(a).attr("href"))
                    : e(a).find("img").first().attr("alt")) &&
                    (-1 == e.inArray(r, i) && i.push(r),
                    e(a).parent().attr("data-handle", r));
              }),
            i.length && t.getCollectionInfo(l, o);
        }),
        (t.getCollectionInfo = function (s, i) {
          try {
            var a = t.configData;
            a.sort(
              ((n = "priority"),
              function (e, t) {
                return e[n] > t[n] ? 1 : e[n] < t[n] ? -1 : 0;
              })
            );
            var r = a.filter((e) => 1 == e.label_type || null == e.label_type),
              o = {
                baseImgUrl: bssPlApiServer + "/images/" + t.storeId + "/240/",
              };
            if (t.collectionID && t.collectionHandle && t.collectionTitle) {
              let s = t.collectionID.split(","),
                i = t.collectionHandle.split(","),
                a = t.collectionTitle.split(",");
              var l = [];
              for (let e = 0; e < s.length; ++e) {
                const t = { id: s[e], handle: i[e], title: a[e] };
                l.push(t);
              }
              l.length &&
                l.map(function (s, i, a) {
                  o.collects = s.id;
                  var l = s.handle;
                  encodeURI(l) != l && (l = encodeURI(l));
                  var n = e(
                    '[data-handle="' +
                      l +
                      '"]:not(".meganav__product"):not([class$="autoketing"])'
                  );
                  0 == n.length &&
                    (n = e(
                      '[data-handle="' +
                        s.title +
                        '"]:not(".meganav__product"):not([class$="autoketing"])'
                    ));
                  n[0];
                  var d = !1;
                  r.length &&
                    (function (i) {
                      e.each(n, function (a, r) {
                        let l = !1;
                        if (!e(r).find(".bss_pl_img").length) {
                          var n = "",
                            p = t.getCollectionImageList(i, s, o, r);
                          s.margin_bottom && s.margin_bottom;
                          p.length &&
                            !d &&
                            ((n +=
                              '<div class="bss_pl_img" style="display: block !important;">'),
                            (n += p.join("")),
                            (l = (function (e, t, s, i, a) {
                              let r = !1;
                              return (
                                11656 == t.storeId &&
                                  "/collections" == window.location.pathname &&
                                  e(s).hasClass(
                                    "grid__cell 1/2--tablet 1/3--lap-and-up"
                                  ) &&
                                  (e(s).find(".aspect-ratio").prepend(a),
                                  (r = !0)),
                                r
                              );
                            })(e, t, r, 0, (n += "</div>")))),
                            g(e, l, i, s, o, r);
                        }
                      });
                    })(r);
                });
            }
          } catch (e) {
            console.log(" Error in BSS_PL.getCollectionInfo : ", e);
          }
          var n;
        }),
        (t.getCollectionImageList = function (s, i, o, p) {
          var c = JSON.parse(JSON.stringify(i));
          let h = "";
          var _ = c.format_money;
          if (null != _ && null != _)
            if ("{" != _[0]) for (var f = 0; "{" != _[f]; ) (h += _[f]), f++;
            else {
              for (f = _.length - 1; "}" != _[f]; ) (h += _[f]), f--;
              h = h.split("").reverse().join("");
            }
          var g = window.location.pathname.split("/"),
            u = g[g.length - 2],
            m = "";
          "pages" == u && (m = g[g.length - 1]);
          var b = "products" == u,
            C = "" == g[0] && "" == g[1],
            w =
              "collections" == u ||
              (-1 !== g.indexOf("collections") && !b && !C),
            I =
              ("search" == u ||
                "search-results-page" == m ||
                g.indexOf("search"),
              []),
            y = [],
            v = [],
            x = [],
            k = [],
            P = [],
            S = [],
            z = c.available;
          -1 !== [5673, 12882, 15561].indexOf(t.storeId) &&
            (z = z && c.inventory > 0);
          var O = c.compare_at_price_max,
            T = c.price,
            A = 0;
          O > 0
            ? ((A = parseFloat((((O - T) / O) * 100).toFixed(0))),
              isNaN(A) && (A = 0))
            : (A = -1);
          let j = T - O;
          return (
            e.each(s, function (s, i) {
              var h = [
                  "grid-view-item",
                  "supports-js",
                  "grid-product__image-wrapper",
                  "grid-product__wrapper",
                  "grid__item small--one-half",
                  "product-item__link-wrapper",
                ],
                f =
                  null !== i.related_product_tag &&
                  "" !== i.related_product_tag &&
                  null != i.related_product_tag
                    ? i.related_product_tag.split(",")
                    : [];
              f.length && (h = f);
              for (var g = 0; g < h.length; g++) {
                var u = h[g].trim();
                if (e(p).hasClass(u)) {
                  !0;
                  break;
                }
              }
              var m = d(0, t, i),
                b = a(0, 0, i),
                C = t.isAllowCountry(i);
              let w = t.checkVisibilityPeriod(i, c);
              if (C && m && b && w && i.pages) {
                var z = window.location.pathname.split("/"),
                  O = z[z.length - 2],
                  T = "";
                "pages" == O && (T = z[z.length - 1]);
                var R = "products" == O,
                  M = "" == z[0] && "" == z[1],
                  F =
                    "collections" == O ||
                    (-1 !== z.indexOf("collections") && !R && !M),
                  B =
                    "search" == O ||
                    "search-results" == T ||
                    "search-results-page" == T ||
                    (-1 !== z.indexOf("search") && !R && !F && !M),
                  L = !(F || R || B || M),
                  W = i.pages.split(","),
                  q =
                    (W.indexOf("2") >= 0 && F) ||
                    (W.indexOf("7") >= 0 && M) ||
                    (W.indexOf("3") >= 0 && L);
                if (
                  (0 == i.collection_image_type && (q = !1),
                  q &&
                    (i.img_url ||
                      (i.label_text_enable && i.label_text) ||
                      i.public_url_s3.length))
                ) {
                  if (
                    ("ten_usd" == t.currentPlan ||
                      "twenty_usd" == t.currentPlan) &&
                    1 == i.collection_image_type
                  ) {
                    if (!i.collection_image || !o.collects) return;
                    var D = i.collection_image.split(",");
                    if (-1 == e.inArray(o.collects.toString(), D)) return;
                  }
                  if ("twenty_usd" == t.currentPlan && 9 == i.position);
                  else if (
                    (i.priority || 0 == i.priority) &&
                    !i.label_text_enable &&
                    void 0 !== P[i.position] &&
                    P[i.position] < i.priority
                  )
                    return;
                  if (1 == i.label_type || null == i.label_type)
                    if ("twenty_usd" == t.currentPlan && 9 == i.position)
                      var $ = "",
                        N = "";
                    else {
                      ($ = "bss-pl-top-left"), (N = "");
                      var U = "";
                      switch (i.position) {
                        case 1:
                          $ = "bss-pl-top-center";
                          break;
                        case 2:
                          $ = "bss-pl-top-right";
                          break;
                        case 3:
                          $ = "bss-pl-middle-left";
                          break;
                        case 4:
                          $ = "bss-pl-middle-center";
                          break;
                        case 5:
                          $ = "bss-pl-middle-right";
                          break;
                        case 6:
                          $ = "bss-pl-bottom-left";
                          break;
                        case 7:
                          $ = "bss-pl-bottom-center";
                          break;
                        case 8:
                          $ = "bss-pl-bottom-right";
                      }
                    }
                  else if ("twenty_usd" == t.currentPlan && 9 == i.position)
                    ($ = ""), (N = "");
                  else {
                    ($ = "bss-pb-bottom-left"), (N = ""), (U = "");
                    switch (i.position) {
                      case 1:
                        $ = "bss-pb-bottom-center";
                        break;
                      case 2:
                        $ = "bss-pb-bottom-right";
                    }
                  }
                  e(p).hasClass("hide") &&
                    e(p).addClass("hide-clone").removeClass("hide");
                  var J = e(p).outerWidth();
                  e(p).find("img").outerWidth();
                  e(p).hasClass("hide-clone") &&
                    e(p).addClass("hide").removeClass("hide-clone"),
                    ("twenty_usd" == t.currentPlan && 9 == i.position) ||
                      (-1 !== e.inArray(i.position, [1, 2, 4, 5, 7, 8]) &&
                        ((N += "right: "),
                        e(p).hasClass("product-card--list") ||
                          (e(p).hasClass("cart__image-wrapper")
                            ? (N += parseFloat(J) - parseFloat(e(p).width()))
                            : (e(p).hasClass("featured-product__photo"),
                              (N += 0))),
                        (N += "px;")),
                      -1 !== e.inArray(i.position, [2, 5, 8]) &&
                        (N += "left: auto !important;"));
                  var H = o.baseImgUrl + i.img_url;
                  if (
                    (i.public_url_s3.length && (H = i.public_url_s3),
                    i.public_img_url && (H = i.public_img_url),
                    i.label_text_enable && i.label_text && "" != i.label_text)
                  )
                    if (((U = N + t.resizeLabelText(i)), 9 == i.position))
                      t.handlePositionInPlatinum(i, p), (U += r(e, t, i, p));
                  (N += t.resizeImage(i, p)),
                    9 == i.position &&
                      (t.handlePositionInPlatinum(i, p),
                      (N += `top : ${i.label_unlimited_top}% !important;\n                                                            left : ${i.label_unlimited_left}% !important; `));
                  let s = "bss-pl-frontend";
                  2 == i.label_type && (s = "bss-pb-frontend");
                  let a = "z-index: 4;";
                  Shopify &&
                    Shopify.theme &&
                    Shopify.theme.name &&
                    "Dawn" == Shopify.theme.name &&
                    (a = "z-index: 2;");
                  var V =
                    '<img src="' +
                    H +
                    '" alt="' +
                    i.name +
                    '" class="' +
                    s +
                    " " +
                    $ +
                    '" style="' +
                    N +
                    a +
                    "; position: absolute !important; background-color: transparent; display: block; min-height: auto !important; padding-left: inherit; padding-top: inherit ; transform: rotate(" +
                    i.angle +
                    'deg) ; transform-origin: top left;" />';
                  if (i.label_text_enable) {
                    var E = "";
                    if (i.label_text && "" != i.label_text) {
                      var Q = !0;
                      if (
                        (-1 !== i.label_text.indexOf("{sale}") &&
                          A <= 0 &&
                          (Q = !1),
                        Q)
                      ) {
                        S.push(i);
                        var G =
                            1 === parseInt(i.transparent_background)
                              ? "transparent"
                              : i.label_text_background_color,
                          K =
                            i.label_shadow +
                            "px " +
                            i.label_shadow +
                            "px " +
                            i.label_shadow +
                            "px " +
                            i.label_shadow_color,
                          Z = i.label_border_radius + "px",
                          X = unescape(i.label_text),
                          Y = l(e, t, i, p, O, 1),
                          ee = n(e, t, i, p, O, 1),
                          te = i.emoji ? i.emoji.split(",") : [],
                          se = i.emoji_position
                            ? i.emoji_position.split(",")
                            : [];
                        i.enable_countdown_timer &&
                          X.indexOf("{start}") > -1 &&
                          (X = X.replace(
                            "{start}",
                            `<span class="bss-text-content-start-${i.label_text_id}">{start}</span>`
                          )),
                          i.enable_countdown_timer &&
                            X.indexOf("{end}") > -1 &&
                            (X = X.replace(
                              "{end}",
                              `<span class="bss-text-content-end-${i.label_text_id}">{end}</span>`
                            ));
                        for (g = 0; g < te.length; g++)
                          if (
                            6 == te[g].length &&
                            X.indexOf(String.fromCodePoint(te[g])) > -1
                          ) {
                            let e =
                              '<span class="bss-pl-text-emoji" style="width: ' +
                              i.label_text_font_size +
                              "px; height: " +
                              i.label_text_font_size +
                              "px; display: inline-block; background-image: url(&quot;https://unpkg.com/emoji-datasource-facebook@5.0.1/img/facebook/sheets-256/64.png&quot;); background-size: 5700% 5700%; background-position: " +
                              se[g] +
                              ';"></span>';
                            var ie = X.slice(
                                0,
                                X.indexOf(String.fromCodePoint(te[g]))
                              ),
                              ae = X.slice(
                                X.indexOf(String.fromCodePoint(te[g])) + 2
                              );
                            X = ie + e + ae;
                          }
                        for (g = 127462; g < 127488; g++)
                          if (
                            X.indexOf(String.fromCodePoint(g.toString())) > -1
                          ) {
                            (ie = X.slice(
                              0,
                              X.indexOf(String.fromCodePoint(g.toString()))
                            )),
                              (ae = X.slice(
                                X.indexOf(String.fromCodePoint(g.toString())) +
                                  2
                              ));
                            X = ie + ae;
                          }
                        (X = X.replace("{inventory_quantity}", "")),
                          j < 0
                            ? X.indexOf("{sale_amount}") > -1 &&
                              (X = (_[0], X.replace("{sale_amount}", "")))
                            : (X = X.replace("{sale_amount}", ""));
                        let r = parseInt(A) + "%";
                        A <= 0 && (r = ""),
                          (X = (X = X.replace("{sale}", "")).replace(
                            "{inventory}",
                            ""
                          ));
                        (te = i.emoji ? i.emoji.split(",") : []),
                          (se = i.emoji_position
                            ? i.emoji_position.split(",")
                            : []);
                        if (
                          ((E =
                            '<div alt="' +
                            i.name +
                            '" data-bss-pl-text-id="bss-pl-text-' +
                            i.label_text_id +
                            '" class="bss-countdown-display ' +
                            s +
                            " bss_pl_label_text " +
                            $ +
                            '" style="' +
                            U +
                            `; display: ${
                              1 == i.enable_countdown_timer ? "none" : "flex"
                            }; justify-content: center; align-items: center; text-align: center;` +
                            " font-style: " +
                            (0 == i.label_text_style ? "normal" : "italic") +
                            "; color: " +
                            i.label_text_color +
                            "; border-radius: " +
                            Z +
                            "; margin-top: " +
                            Y +
                            "px; margin-left: " +
                            ee +
                            "px; box-shadow: " +
                            K +
                            "; opacity: " +
                            i.label_opacity / 100 +
                            "; font-size: " +
                            i.label_text_font_size +
                            "px;" +
                            a +
                            " position: absolute !important;  padding-left: inherit;  padding-top: inherit ;  background-clip: content-box; background-color: " +
                            G +
                            ';" ><span>' +
                            X +
                            "</span></div>"),
                          (i.mobile_config_label_enable &&
                            "ten_usd" == t.currentPlan) ||
                            (i.mobile_config_label_enable &&
                              "twenty_usd" == t.currentPlan))
                        ) {
                          let s = e(p).attr("class")
                            ? "." + e(p).attr("class").split(" ").join(".")
                            : `[data-handle="${e(p).attr("data-handle")}"]`;
                          (Y = l(e, t, i, p, O, 0)),
                            (ee = n(e, t, i, p, O, 0)),
                            (E +=
                              '<style type="text/css">@media only screen and (max-width: 768px) {' +
                              `${s} ` +
                              'div.bss-pl-frontend.bss_pl_label_text[data-bss-pl-text-id="bss-pl-text-' +
                              i.label_text_id +
                              '"] { height: ' +
                              i.mobile_height_label +
                              "px !important;width: " +
                              i.mobile_width_label +
                              "px !important;font-size: " +
                              i.mobile_font_size_label +
                              'px !important;}div.bss-pl-frontend.bss_pl_label_text[data-bss-pl-text-id="bss-pl-text-' +
                              i.label_text_id +
                              '"] .bss-pl-text-emoji { height: ' +
                              i.mobile_font_size_label +
                              "px !important;width: " +
                              i.mobile_font_size_label +
                              "px !important;}}</style>");
                        }
                      }
                    }
                    V = E;
                  }
                  t.storeId <= t.storeIdOldWIthPriority
                    ? 2 == i.label_type
                      ? 0 == k.length
                        ? ("twenty_usd" == t.currentPlan && 9 == i.position
                            ? I.push(V)
                            : i.label_text_enable
                            ? x.push(V)
                            : (I[i.position] = V),
                          k.push(i))
                        : k.map((e) => {
                            e.position !== i.position &&
                              (k.push(i),
                              "twenty_usd" == t.currentPlan && 9 == i.position
                                ? I.push(V)
                                : i.label_text_enable
                                ? x.push(V)
                                : (I[i.position] = V));
                          })
                      : "twenty_usd" == t.currentPlan
                      ? 0 == k.length
                        ? ("twenty_usd" == t.currentPlan && 9 == i.position
                            ? I.push(V)
                            : i.label_text_enable
                            ? x.push(V)
                            : (I[i.position] = V),
                          k.push(i))
                        : k.map((e) => {
                            (e.label_unlimited_left ===
                              i.label_unlimited_left &&
                              e.label_unlimited_top ===
                                i.label_unlimited_top) ||
                              ("twenty_usd" == t.currentPlan && 9 == i.position
                                ? I.push(V)
                                : i.label_text_enable
                                ? x.push(V)
                                : (I[i.position] = V),
                              k.push(i));
                          })
                      : 0 == k.length
                      ? (i.label_text_enable ? x.push(V) : (I[i.position] = V),
                        k.push(i))
                      : k.map((e) => {
                          i.label_text_enable
                            ? x.push(V)
                            : e.position !== i.position && (I[i.position] = V),
                            k.push(i);
                        })
                    : "twenty_usd" == t.currentPlan && 9 == i.position
                    ? I.push(V)
                    : 2 == i.label_type
                    ? !0 !== v[i.position] && ((v[i.position] = !0), I.push(V))
                    : i.label_text_enable
                    ? I.push(V)
                    : !0 !== y[i.position] && ((y[i.position] = !0), I.push(V));
                }
              }
            }),
            t.onClickThumbnailResizeMarginLabelText(S),
            t.storeId <= t.storeIdOldWIthPriority && (I = I.concat(x)),
            I
          );
        }),
        t.initCollections();
    }
    function m(e, t) {
      var s = !0;
      if (void 0 === i) var i = t.apiServerProduction;
      var a = ["customer-reviews", "cart", "account"];
      2092 == t.storeId && (a = ["customer-reviews"]),
        4237 === t.storeId && (a = ["customer-reviews"]),
        12229 === t.storeId && (a = ["account"]);
      var r = (p = window.location.pathname.split("/"))[p.length - 1],
        o = p[1];
      if (-1 === a.indexOf(r) && -1 === a.indexOf(o)) {
        var d = !0;
        (t.handlePositionInPlatinum = function (s, i, a) {
          let r = [];
          if (
            (9493 == t.storeId && "collections" == a && r.push("collections"),
            15322 == t.storeId && "collections" == a && r.push("collections"),
            "products" != a && -1 === r.indexOf("collections"))
          ) {
            let a = e(i)
                .find(
                  'img[src*="//cdn.shopify.com/s/files/"]:not(.bss-pl-frontend), img[srcset*="/cdn.shopify.com/s/files/"]:not(.bss-pl-frontend)'
                )
                .first()
                .width(),
              r = e(i)
                .find(
                  'img[src*="//cdn.shopify.com/s/files/"]:not(.bss-pl-frontend), img[srcset*="/cdn.shopify.com/s/files/"]:not(.bss-pl-frontend)'
                )
                .first()
                .height();
            if (a && r && 0 == s.fixed_percent) {
              let e = (s.label_unlimited_left * a) / 100;
              if (e + s.label_unlimited_width > a) {
                (e -= s.label_unlimited_width - a + e),
                  (s.label_unlimited_left = (100 * e) / a);
              }
              let i = (s.label_unlimited_top * r) / 100;
              if (i + s.label_unlimited_height > r) {
                (i -= s.label_unlimited_height - r + i),
                  (s.label_unlimited_top = (100 * i) / r);
              }
              10884 == t.storeId &&
                (s.label_unlimited_left < 0 || e < 0) &&
                (s.label_unlimited_left = 0);
            }
          }
        }),
          h(t, m),
          (t.checkProductPage = !1),
          (t.init = function () {
            var i = e(
              'a[href*="/products/"]:not([data-bss-pl=active]):not(.action-link)'
            );
            17266 == t.storeId &&
              (i = e(
                'a[href*="/products/"]:not([data-bss-pl=active]):not(.action-link):not(.promo-block)'
              )),
              t.checkProductPage &&
                10925 == t.storeId &&
                (i = e('img[src*="/products/"]')),
              13325 == t.storeId &&
                window.location.pathname.includes("/pages/") &&
                (i = e('a[data-shg-product-target="product-url"]'));
            var a = e(
              'div[data-pf-type="ProductImage2"]:not([bss-pl-product-active]),div[data-pf-type="ProductImage"]:not([bss-pl-product-active]),[data-pf-type="ProductMedia"] [data-media-type="image"]:not([bss-pl-product-active]'
            );
            3010 == t.storeId &&
              "wearables" === r &&
              (i = e(
                'picture[data-href*="/products/"]:not([data-bss-pl=active]):not(.action-link)'
              )),
              3772 == t.storeId &&
                (i = e(
                  'img[src*="/products/"]:not([data-bss-pl=active]):not(.action-link)'
                )),
              6653 == t.storeId &&
                "" === r &&
                (i = e("form.product-form:not([data-bss-pl=active])")),
              9187 == t.storeId &&
                "collections" === r &&
                (i = e("a.grid-product__link:not([data-bss-pl=active])")),
              void 0 !== t.configData &&
                t.configData.length &&
                (i.length || d) &&
                ((10914 == t.storeId &&
                  window.location.pathname.includes("/en/")) ||
                  (f(e, t, i, m, d), (d = !1))),
              void 0 !== t.configData &&
                t.configData.length &&
                (a.length || d) &&
                s &&
                (t.addLabelForPageFly(e, t), (s = !1));
          }),
          (t.getHandleByUrl = function (e) {
            e.indexOf("?") > 0 && (e = e.substring(0, e.indexOf("?")));
            var t = "";
            e.indexOf("products") > 0 && (t = e.split("/").pop(-1));
            return t;
          }),
          c(t),
          (t.divideHandlesUrl = function (e) {
            let t = [];
            var s = Math.round(e.length / 2),
              i = e.length,
              a = e.splice(s, i - s + 1),
              r = Math.round(a.length / 2),
              o = a.length,
              l = a.splice(r, a.length - r + 1),
              n = a.splice(0, o - r + 1),
              d = e.splice(0, i - s + 1),
              p = Math.round(d.length / 2),
              c = d.length,
              h = d.splice(p, d.length - p + 1),
              _ = d.splice(0, c - p + 1);
            return t.push(l, n, h, _), t;
          }),
          (t.isAllowCountry = function (e) {
            var s = !0;
            e.enable_allowed_countries &&
              e.locations &&
              (s = -1 !== e.locations.split(",").indexOf(t.countryCode));
            return s;
          }),
          (t.checkVisibilityPeriod = function (e, t) {
            try {
              if (1 === e.enable_visibility_period && t.publish_at) {
                let s = new Date(
                  t.publish_at
                    .replace(/ /g, "T")
                    .slice(0, t.publish_at.length - 6)
                );
                s.setDate(s.getDate() + e.visibility_period);
                let i = new Date();
                if (s.getTime() < i.getTime()) return 0;
              }
              return 1;
            } catch (e) {
              console.log(" checkVisibilityPeriod error : ", e);
            }
          }),
          (t.getMaxValueMarginTop = function (t) {
            let s = 0;
            return (
              e.each(t, function (e, t) {
                t.margin_top > s && (s = t.margin_top);
              }),
              s
            );
          }),
          (t.getMaxValueMarginBottom = function (t) {
            let s = 0;
            return (
              e.each(t, function (e, t) {
                t.margin_bottom > s && (s = t.margin_bottom);
              }),
              s
            );
          }),
          (t.onClickThumbnailResizeMarginLabelText = function (s) {
            var i = window.location.pathname;
            i.endsWith("/") && (i = i.slice(0, -1));
            var a = i.split("/"),
              r = a[a.length - 2],
              o = a.pop(-1),
              d = e(`[data-handle="${o}"]`),
              p = e(
                ".product-single__thumbnails-item,li.grid__item,.thumbnail.slick-slide,.rondell-item,.TabList__Item,.product-single__thumbnail-item"
              );
            p.length &&
              p.on("click", function () {
                if (
                  ((d = e(this)
                    .closest(".product-single__media-group")
                    .find(".product-single__media-wrapper")
                    .not(".hide")),
                  11088 == t.storeId &&
                    (d = e(this)
                      .closest(".product-gallery")
                      .find(".rimage-outer-wrapper")),
                  10795 == t.storeId &&
                    (d = e(this)
                      .closest(".rondell-container")
                      .find(".rondell-item.rondell-item-focused")),
                  16288 == t.storeId &&
                    (d = e(this)
                      .closest(".shopify-section")
                      .find(".ProductItem__Wrapper")),
                  2521 == t.storeId)
                ) {
                  e(this).closest(".photos").find(".product__photo-container");
                  d = e(this)
                    .closest(".photos")
                    .find(".product__photo-container")
                    .not(".hide");
                }
                s.map((s) => {
                  var i = l(e, t, s, d, r, 1),
                    a = n(e, t, s, d, r, 1);
                  e(d)
                    .find(
                      `div[data-bss-pl-text-id="bss-pl-text-${s.label_text_id}"]`
                    )
                    .css("margin-top", `${i}px`),
                    e(d)
                      .find(
                        `div[data-bss-pl-text-id="bss-pl-text-${s.label_text_id}"]`
                      )
                      .css("margin-left", `${a}px`);
                });
              });
          }),
          (t.resizeImage = function (s, i) {
            var a,
              r,
              o,
              l = "",
              n = "px !important;";
            return (
              9 == s.position
                ? ((a = s.label_unlimited_width),
                  (r = s.label_unlimited_height))
                : ((a = s.width),
                  (r = s.height),
                  (o = s.margin_top),
                  s.margin_bottom),
              s.fixed_percent &&
                ((n = "% !important;"),
                (15494 != t.storeId && 15958 != t.storeId) || (n = "%;"),
                a > 100 && (a = 100),
                r > 100 && (r = 100),
                e(window).width() > 1200 && 13744 == t.storeId && (a = 25)),
              (a || 0 == a) &&
                ((l += "width:"),
                -1 == a
                  ? (l += "auto !important;")
                  : ((l += a), 12724 == t.storeId ? (l += "%;") : (l += n))),
              (r || 0 == r) &&
                ((l += "max-height:"),
                -1 == r ? (l += "none !important;") : ((l += r), (l += n))),
              2 == s.label_type &&
                (o || 0 == o) &&
                ((l += "margin-top:"), (l += o), (l += "px !important;")),
              l
            );
          }),
          (t.resizeLabelText = function (e) {
            var s,
              i,
              a = "",
              r = "px;";
            return (
              9 == e.position
                ? ((s = e.label_unlimited_width),
                  (i = e.label_unlimited_height))
                : ((s = e.width), (i = e.height)),
              e.fixed_percent &&
                ((r = "%;"), s > 100 && (s = 100), i > 100 && (i = 100)),
              (s || 0 == s) && ((a += "width:"), (a += s), (a += r)),
              (i || 0 == i) &&
                ("twenty_usd" == t.currentPlan && 9 == e.position
                  ? (a += "min-height:")
                  : (a += "height:"),
                (a += i),
                (a += r)),
              a
            );
          });
        var p,
          _ = (function (e, t) {
            var s = window.location.pathname.split("/"),
              i = s[s.length - 2],
              a = "collections" == i;
            function r() {
              return "products" == i;
            }
            s[1];
            var o = 200;
            if (
              (-1 !== [1808, 2435, 14921, 7896, 9005].indexOf(t.storeId) &&
                (o = 1e3),
              (9301 != t.storeId && 11446 != t.storeId) || (o = 2500),
              7440 == t.storeId && (o = (e(window).width(), 6e3)),
              16272 != t.storeId ||
                (!r && "/pages/search-results" != window.location.pathname) ||
                (o = 6e3),
              (1808 != t.storeId && 2435 != t.storeId) ||
                !a ||
                e(document).on("click", ".cat-item", function () {
                  setTimeout(function () {
                    e("[data-bss-pl='active']").attr("data-bss-pl", "inactive"),
                      e(".bss_pl_img").remove(),
                      t.init();
                  }, o);
                }),
              6040 == t.storeId &&
                (e(document).on("click", ".search-bar", function () {
                  setTimeout(function () {
                    t.init();
                  }, 1e3);
                }),
                e(document).on(
                  "keydown",
                  ".input-group-field.header-search__input",
                  function () {
                    var s = setInterval(function () {
                      console.log("searching..."),
                        e(".header-search__results-wrapper").find(
                          ".search__products"
                        ).length &&
                          (setTimeout(() => {
                            t.init();
                          }, 500),
                          clearInterval(s));
                      e(window).scroll(function () {
                        clearInterval(s);
                      }),
                        t.init();
                    }, 500);
                  }
                )),
              6653 == t.storeId &&
                e(document).on("click", ".product-card__title", function () {
                  setTimeout(function () {
                    t.init();
                  }, 2e3);
                }),
              10925 == t.storeId &&
                e(document).on("click", "li.product .image", function () {
                  setTimeout(function () {
                    (t.checkProductPage = !0), t.init();
                  }, 2e3);
                }),
              11107 == t.storeId &&
                a &&
                e(document).on(
                  "click",
                  ".boost-pfs-filter-bottom-pagination li",
                  function () {
                    setTimeout(function () {
                      t.init();
                    }, 2e3);
                  }
                ),
              10783 == t.storeId && (o = 1500),
              7300 == t.storeId &&
                setTimeout(function () {
                  t.init();
                }, 200),
              3103 == t.storeId &&
                (setTimeout(() => {
                  e(
                    ".slider-nav.slick-initialized.slick-slider .slick-next.slick-arrow"
                  ).click();
                }, 3e3),
                setTimeout(() => {
                  e(
                    ".slider-nav.slick-initialized.slick-slider .slick-prev.slick-arrow"
                  ).click();
                }, 6e3)),
              3103 == t.storeId && "products" != i && (o = 1e3),
              10795 == t.storeId &&
                e(window).scroll(function () {
                  t.init();
                }),
              10299 == t.storeId && (o = 2e3),
              10170 == t.storeId && (o = 100),
              3341 == t.storeId && (o = 450),
              -1 !== [10839, 9266].indexOf(t.storeId) && (o = 2e3),
              11088 == t.storeId && (o = 500),
              5062 == t.storeId && (o = 1e3),
              13085 == t.storeId && (r ? (o = 3e3) : a && (o = 200)),
              15851 != t.storeId ||
                (!a && "/search" != window.location.pathname) ||
                e(".pagination").click(function () {
                  t.init(),
                    e(".bss-pl-frontend").css("display", "block"),
                    e(window).scroll(function () {
                      t.init(), e(".bss-pl-frontend").css("display", "block");
                    });
                }),
              15802 == t.storeId && (o = 1e3),
              5180 != t.storeId || ("collections" != i && !r) || (o = 2e3),
              16288 != t.storeId ||
                ("/" != window.location.pathname && !r) ||
                (o = 2e3),
              5798 == t.storeId && (o = 3e3),
              12969 == t.storeId &&
                "/pages/search-results-page" == window.location.pathname &&
                (o = 3e3),
              19111 == t.storeId &&
                "/pages/search-results-page" == window.location.pathname &&
                (o = 4e3),
              r)
            ) {
              -1 !==
                [3019, 7807, 10795, 5483, 9639, 4859, 15833, 9806].indexOf(
                  t.storeId
                ) && (o = 2e3),
                -1 !==
                  [5950, 15365, 12302, 10680, 11305, 16705, 19449].indexOf(
                    t.storeId
                  ) && (o = 1500),
                -1 !==
                  [7637, 15606, 7104, 9493, 15413, 13709].indexOf(t.storeId) &&
                  (o = 1e3),
                -1 !== [11457, 17606, 16443, 15649].indexOf(t.storeId) &&
                  (o = 3e3),
                13273 == t.storeId && (o = 1200),
                10751 == t.storeId && (o = 300),
                (11819 != t.storeId && 11541 != t.storeId) || (o = 4e3),
                6918 == t.storeId && (o = 1700);
            }
            if (
              a ||
              "/search" == window.location.pathname ||
              "/pages/search-results-page" == window.location.pathname ||
              "/pages/search-results" == window.location.pathname ||
              "pages" == i
            ) {
              (13906 != t.storeId && 13752 != t.storeId) ||
                e(window).scroll(function () {
                  var s = setInterval(() => {
                    t.init();
                  }, 1e3);
                  e(window).scroll(function () {
                    clearInterval(s);
                  });
                }),
                -1 !== [7832, 9518, 8645, 9614, 9306].indexOf(t.storeId) &&
                  (o = 3e3),
                -1 !== [7915, 11987, 3987].indexOf(t.storeId) && (o = 1e3),
                -1 !== [13802, 12519, 4010, 18652, 11367].indexOf(t.storeId) &&
                  (o = 2e3),
                -1 !== [16886, 10326].indexOf(t.storeId) && (o = 1500);
              -1 !== [18256, 12184, 12379, 10884].indexOf(t.storeId) &&
                (o = 500),
                13325 == t.storeId && (o = 2500),
                12847 == t.storeId && (o = 3500),
                11832 == t.storeId && (o = 700),
                13538 == t.storeId && (o = 1800),
                11986 == t.storeId && (o = 200),
                11656 == t.storeId && (o = 5e3);
            }
            return o;
          })(e, t),
          g = (p = window.location.pathname.split("/"))[1];
        setTimeout(function () {
          "blogs" !== g &&
            (t.init(),
            u(e, t),
            e(window).scroll(function () {
              -1 != [7563, 3103, 8752, 15564].indexOf(t.storeId) ||
                (t.init(), u(e, t));
            }));
        }, _);
      }
      function m(e) {
        if (3543 == t.storeId && Array.isArray(e.name.match(/\[PN] $|\[PN]$/)))
          return !0;
        if (13134 == t.storeId || 14857 == t.storeId) return !0;
        let s = document.documentElement.lang,
          i = (a = e.name).substring(a.indexOf("[") + 1, a.indexOf("]"));
        var a;
        return !i.length || s == i;
      }
    }
    s.r(t),
      (function (e) {
        if (
          (("ten_usd" != e.currentPlan && "twenty_usd" != e.currentPlan) ||
            e.configData.map((e, t) => {
              if (1 == e.enable_countdown_timer && null != e.label_text) {
                if (
                  unescape(e.label_text).indexOf("{end}") > -1 &&
                  -1 == unescape(e.label_text).indexOf("{start}") &&
                  new Date().getTime() <= new Date(e.countdown_time).getTime()
                )
                  var s = new Date(e.countdown_time).getTime(),
                    i = setInterval(function () {
                      var t = new Date().getTime(),
                        a = s - t,
                        r = Math.floor(a / 864e5),
                        o = null,
                        l = null,
                        n = null,
                        d = null;
                      0 == e.option_format_countdown
                        ? ((o = Math.floor((a % 864e5) / 36e5) + 24 * r),
                          (l = Math.floor((a % 36e5) / 6e4)),
                          (n = Math.floor((a % 6e4) / 1e3)),
                          (d = o + "h " + l + "m " + n + "s "))
                        : 1 == e.option_format_countdown
                        ? ((o = Math.floor((a % 864e5) / 36e5) + 24 * r),
                          (l = Math.floor((a % 36e5) / 6e4)),
                          (d = o + "h " + l + "m "))
                        : 2 == e.option_format_countdown
                        ? ((o = Math.floor((a % 864e5) / 36e5)),
                          (l = Math.floor((a % 36e5) / 6e4)),
                          (d = r + "d " + o + "h " + l + "m "))
                        : ((l =
                            Math.floor((a % 36e5) / 6e4) +
                            60 * (Math.floor((a % 864e5) / 36e5) + 24 * r)),
                          (n = Math.floor((a % 6e4) / 1e3)),
                          (d = l + "m " + n + "s ")),
                        document
                          .querySelectorAll(
                            `.bss-text-content-end-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = d;
                          }),
                        a <= 1e3 &&
                          (clearInterval(i),
                          1 == e.option_end_countdown &&
                            ($(`.bss-text-content-end-${e.label_text_id}`)
                              .parent()
                              .remove(),
                            $(`.bss-text-content-start-${e.label_text_id}`)
                              .parent()
                              .remove()));
                    }, 1e3);
                if (
                  unescape(e.label_text).indexOf("{start}") > -1 &&
                  -1 == unescape(e.label_text).indexOf("{end}") &&
                  new Date().getTime() <= new Date(e.countdown_time).getTime()
                )
                  (s = new Date(e.start_day_countdown).getTime()),
                    (i = setInterval(() => {
                      var t = new Date().getTime() - s,
                        a = Math.floor(t / 864e5),
                        r = null,
                        o = null,
                        l = null,
                        n = null;
                      0 == e.option_format_countdown
                        ? ((r = Math.floor((t % 864e5) / 36e5) + 24 * a),
                          (o = Math.floor((t % 36e5) / 6e4)),
                          (l = Math.floor((t % 6e4) / 1e3)),
                          (n = r + "h " + o + "m " + l + "s "))
                        : 1 == e.option_format_countdown
                        ? ((r = Math.floor((t % 864e5) / 36e5) + 24 * a),
                          (o = Math.floor((t % 36e5) / 6e4)),
                          (n = r + "h " + o + "m "))
                        : 2 == e.option_format_countdown
                        ? ((r = Math.floor((t % 864e5) / 36e5)),
                          (o = Math.floor((t % 36e5) / 6e4)),
                          (n = a + "d " + r + "h " + o + "m "))
                        : ((o =
                            Math.floor((t % 36e5) / 6e4) +
                            60 * (Math.floor((t % 864e5) / 36e5) + 24 * a)),
                          (l = Math.floor((t % 6e4) / 1e3)),
                          (n = o + "m " + l + "s ")),
                        document
                          .querySelectorAll(
                            `.bss-text-content-start-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = n;
                          }),
                        new Date().getTime() >=
                          new Date(e.countdown_time).getTime() - 1e3 &&
                          (clearInterval(i),
                          1 == e.option_end_countdown &&
                            ($(`.bss-text-content-end-${e.label_text_id}`)
                              .parent()
                              .remove(),
                            $(`.bss-text-content-start-${e.label_text_id}`)
                              .parent()
                              .remove()));
                    }, 1e3));
                if (
                  unescape(e.label_text).indexOf("{start}") > -1 &&
                  unescape(e.label_text).indexOf("{end}") > -1 &&
                  new Date().getTime() <= new Date(e.countdown_time).getTime()
                )
                  (s = new Date(e.countdown_time).getTime()),
                    (i = setInterval(function () {
                      var t = new Date().getTime(),
                        a = s - t,
                        r = Math.floor(a / 864e5),
                        o = null,
                        l = null,
                        n = null,
                        d = null;
                      0 == e.option_format_countdown
                        ? ((o = Math.floor((a % 864e5) / 36e5) + 24 * r),
                          (l = Math.floor((a % 36e5) / 6e4)),
                          (n = Math.floor((a % 6e4) / 1e3)),
                          (d = o + "h " + l + "m " + n + "s "))
                        : 1 == e.option_format_countdown
                        ? ((o = Math.floor((a % 864e5) / 36e5) + 24 * r),
                          (l = Math.floor((a % 36e5) / 6e4)),
                          (d = o + "h " + l + "m "))
                        : 2 == e.option_format_countdown
                        ? ((o = Math.floor((a % 864e5) / 36e5)),
                          (l = Math.floor((a % 36e5) / 6e4)),
                          (d = r + "d " + o + "h " + l + "m "))
                        : ((l =
                            Math.floor((a % 36e5) / 6e4) +
                            60 * (Math.floor((a % 864e5) / 36e5) + 24 * r)),
                          (n = Math.floor((a % 6e4) / 1e3)),
                          (d = l + "m " + n + "s ")),
                        document
                          .querySelectorAll(
                            `.bss-text-content-end-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = d;
                          }),
                        a <= 1e3 &&
                          (clearInterval(i),
                          1 == e.option_end_countdown &&
                            ($(`.bss-text-content-end-${e.label_text_id}`)
                              .parent()
                              .remove(),
                            $(`.bss-text-content-start-${e.label_text_id}`)
                              .parent()
                              .remove()));
                    }, 1e3));
                setTimeout(() => {
                  (0 == e.option_end_countdown ||
                    null == e.option_end_countdown) &&
                    new Date().getTime() >
                      new Date(e.countdown_time).getTime() &&
                    (0 == e.option_format_countdown
                      ? (document
                          .querySelectorAll(
                            `.bss-text-content-end-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0h 0m 0s";
                          }),
                        document
                          .querySelectorAll(
                            `.bss-text-content-start-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0h 0m 0s";
                          }))
                      : 1 == e.option_format_countdown
                      ? (document
                          .querySelectorAll(
                            `.bss-text-content-end-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0h 0m";
                          }),
                        document
                          .querySelectorAll(
                            `.bss-text-content-start-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0h 0m";
                          }))
                      : 2 == e.option_format_countdown
                      ? (document
                          .querySelectorAll(
                            `.bss-text-content-end-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0d 0h 0m";
                          }),
                        document
                          .querySelectorAll(
                            `.bss-text-content-start-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0d 0h 0m";
                          }))
                      : (document
                          .querySelectorAll(
                            `.bss-text-content-end-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0m 0s";
                          }),
                        document
                          .querySelectorAll(
                            `.bss-text-content-start-${e.label_text_id}`
                          )
                          .forEach((e) => {
                            e.innerHTML = "0m 0s";
                          })));
                }, 1500);
              }
            }),
          setTimeout(() => {
            document.querySelectorAll(".bss-countdown-display").forEach((e) => {
              e.style.display = "block";
            }),
              document
                .querySelectorAll(".bss-countdown-display")
                .forEach((e) => {
                  e.style.display = "flex";
                });
          }, 2e3),
          void 0 === t)
        )
          var t = "https://product-labels-pro.bsscommerce.com";
        var s = function (e, t) {
          var s = document.createElement("script");
          (s.type = "text/javascript"),
            s.readyState
              ? (s.onreadystatechange = function () {
                  ("loaded" != s.readyState && "complete" != s.readyState) ||
                    ((s.onreadystatechange = null), t());
                })
              : (s.onload = function () {
                  t();
                }),
            (s.src = e),
            document.getElementsByTagName("head")[0].appendChild(s);
        };
        function i(e) {
          let t = !1;
          if (e && e.length)
            for (let s = 0; s < e.length; s++)
              if (1 == e[s].enable_allowed_countries) return (t = !0), t;
          return t;
        }
        if (
          "undefined" == typeof jQuery ||
          -1 ==
            (function (e, t) {
              if ("string" != typeof e) return !1;
              if ("string" != typeof t) return !1;
              (e = e.split(".")), (t = t.split("."));
              const s = Math.min(e.length, t.length);
              for (let i = 0; i < s; ++i) {
                if (
                  ((e[i] = parseInt(e[i], 10)),
                  (t[i] = parseInt(t[i], 10)),
                  e[i] > t[i])
                )
                  return 1;
                if (e[i] < t[i]) return -1;
              }
              return e.length == t.length ? 0 : e.length < t.length ? -1 : 1;
            })(jQuery.fn.jquery, "1.7")
        ) {
          if (void 0 === e) e = {};
          -1 != [].indexOf(e.storeId)
            ? "/" != window.location.pathname
              ? s(
                  "//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
                  function () {
                    m(jQuery.noConflict(!0), e);
                  }
                )
              : m(jQuery, e)
            : s(
                "//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
                function () {
                  var t = jQuery.noConflict(!0);
                  let s = i(e.configData);
                  if (
                    (e.currentPlan && "ten_usd" == e.currentPlan && s) ||
                    (e.currentPlan && "twenty_usd" == e.currentPlan && s)
                  ) {
                    let s = "";
                    "undefined" != typeof Storage &&
                      sessionStorage.countryCode &&
                      "NA" != sessionStorage.countryCode &&
                      "undefined" != sessionStorage.countryCode &&
                      (s = sessionStorage.countryCode),
                      "" == s
                        ? t.ajax({
                            url: "https://geo-ip-service.bsscommerce.com/geoip/getCountryByIP",
                            data: { shopId: e.storeId },
                            method: "POST",
                            success: function (s) {
                              s.success
                                ? ((e.countryCode = s.countryCode),
                                  "undefined" != typeof Storage
                                    ? ((sessionStorage.countryCode =
                                        s.countryCode),
                                      console.log(
                                        "sr:",
                                        sessionStorage.countryCode
                                      ))
                                    : console.log(e.countryCode))
                                : console.log("Could not get country by IP"),
                                m(t, e);
                            },
                            error: function (s) {
                              console.log("Could not get country by IP"),
                                m(t, e);
                            },
                          })
                        : ((e.countryCode = s), m(t, e));
                  } else (e.countryCode = "UNDEFINED"), m(t, e);
                }
              );
        } else {
          if (void 0 === e) e = {};
          let t = i(e.configData);
          if (
            (e.currentPlan && "ten_usd" == e.currentPlan && t) ||
            (e.currentPlan && "twenty_usd" == e.currentPlan && t)
          ) {
            let t = "";
            "undefined" != typeof Storage &&
              sessionStorage.countryCode &&
              "NA" != sessionStorage.countryCode &&
              "undefined" != sessionStorage.countryCode &&
              (t = sessionStorage.countryCode),
              "" == t
                ? jQuery.ajax({
                    url: "https://geo-ip-service.bsscommerce.com/geoip/getCountryByIP",
                    data: { shopId: e.storeId },
                    method: "POST",
                    success: function (t) {
                      t.success
                        ? ((e.countryCode = t.countryCode),
                          "undefined" != typeof Storage
                            ? ((sessionStorage.countryCode = t.countryCode),
                              console.log("sr:", sessionStorage.countryCode))
                            : console.log(e.countryCode))
                        : console.log("Could not get country by IP"),
                        m(jQuery, e);
                    },
                    error: function (t) {
                      console.log("Could not get country by IP"), m(jQuery, e);
                    },
                  })
                : ((e.countryCode = t), m(jQuery, e));
          } else (e.countryCode = "UNDEFINED"), m(jQuery, e);
        }
      })(BSS_PL);
  },
]);
