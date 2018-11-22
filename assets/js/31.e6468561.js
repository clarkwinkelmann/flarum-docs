(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{197:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Before you install Flarum, it's important to check that your server meets the requirements. To run Flarum, you will need:")]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Shared Hosting")]),t._v(" "),s("p",[t._v("At this stage, it's not possible to install Flarum by downloading a ZIP file and uploading the files to your web server. This is because Flarum uses a dependency-management system called "),s("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(" which needs to run on the command line.")]),t._v(" "),s("p",[t._v("This doesn't necessarily mean you need a VPS. Some shared hosts give you SSH access, through which you should be able to install Composer and Flarum just fine. For other hosts without SSH, you can try workarounds such as "),s("a",{attrs:{href:"https://github.com/andreherberth/pockethold",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pockethold"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Flarum uses "),s("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(" to manage its dependencies and extensions. Before installing Flarum, you will need to "),s("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("install Composer"),s("OutboundLink")],1),t._v(" on your machine. Afterwards, run this command in an empty location that you want Flarum to be installed in:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("When everything is ready, navigate to your forum in a web browser and follow the instructions to complete the installation.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("Add the following lines to your server's configuration block:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("If you have an existing community and don't want to start from scratch, you may be able to import your existing data into Flarum. While there are no official importers yet, the community has made several unofficial importers:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://discuss.flarum.org/d/3867-fluxbb-to-flarum-migration-tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("FluxBB"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://discuss.flarum.org/d/5506-mybb-migrate-script",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyBB"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://discuss.flarum.org/d/1117-phpbb-migrate-script-updated-for-beta-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpBB"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ItalianSpaceAstronauticsAssociation/smf2_to_flarum",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMF2"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("These can be used for other forum software as well by migrating to phpBB first, then to Flarum. Be aware that we can't guarantee that these will work nor can we offer support for them.")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Flarum is "),s("strong",[t._v("beta software")]),t._v(". That means it still has some incomplete features and bugs 🐛🐞, and at some point – sooner or later – it will probably break! 💥")]),t._v(" "),s("p",[t._v("Beta is all about fixing these issues and improving Flarum. "),s("strong",[t._v("Please don't use Flarum in production unless you know what you're doing")]),t._v(". We can’t support you if things go awry. Upgrading to subsequent versions will be possible, but might involve getting your hands dirty.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"server-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Server Requirements")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("strong",[t._v("Apache")]),t._v(" (with mod_rewrite enabled) or "),s("strong",[t._v("Nginx")])]),t._v(" "),s("li",[s("strong",[t._v("PHP 5.6+")]),t._v(" with the following extensions: mbstring, pdo_mysql, openssl, json, gd, dom, fileinfo, tokenizer")]),t._v(" "),s("li",[s("strong",[t._v("MySQL 5.5+")])]),t._v(" "),s("li",[s("strong",[t._v("SSH (command-line) access")]),t._v(" to run Composer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("composer create-project flarum/flarum "),a("span",{attrs:{class:"token keyword"}},[this._v(".")]),this._v(" --stability"),a("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("beta\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("While this command is running, you can set up "),a("a",{attrs:{href:"#url-rewriting"}},[this._v("URL Rewriting")]),this._v(" as per the instructions below.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"url-rewriting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-rewriting","aria-hidden":"true"}},[this._v("#")]),this._v(" URL Rewriting")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[this._v("#")]),this._v(" Apache")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Flarum includes a "),s("code",[t._v(".htaccess")]),t._v(" file in the "),s("code",[t._v("public")]),t._v(" directory – make sure it has been uploaded correctly. If you're using shared hosting, confirm with your provider that "),s("code",[t._v("mod_rewrite")]),t._v(" is enabled and "),s("code",[t._v(".htaccess")]),t._v(" files are allowed. If you're managing your own server, you may need to add the following to your site configuration:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-apache extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('    <Directory "/path/to/flarum">\n        AllowOverride All\n    </Directory>\n')])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token keyword"}},[t._v("index")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token variable"}},[t._v("$query_string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token variable"}},[t._v("$query_string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("admin "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token variable"}},[t._v("$query_string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("~")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("^")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("composer\\"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("lock"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("config\\"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("flarum"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("storage"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("vendor"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("deny")]),t._v(" all"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("404")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("~")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" \\"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("css"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("jpe"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("g"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("expires")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("M"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Pragma public"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Cache"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Control "),s("span",{attrs:{class:"token string"}},[t._v('"public, must-revalidate, proxy-revalidate"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip")]),t._v(" on"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip_http_version")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1.1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip_vary")]),t._v(" on"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip_comp_level")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("6")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip_proxied")]),t._v(" any"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip_types")]),t._v(" application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("atom"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("xml\n               application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("javascript\n               application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("json\n               application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("vnd"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ms"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("fontobject\n               application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("font"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("ttf\n               application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("app"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("manifest"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("json\n               application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("xhtml"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("xml\n               application"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("xml\n               font"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("opentype\n               image"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("svg"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("xml\n               image"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("icon\n               text"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("css\n               "),s("span",{attrs:{class:"token comment"}},[t._v("#text/html -- text/html is gzipped by default by nginx")]),t._v("\n               text"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("plain\n               text"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip_buffers")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("8")]),t._v("k"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("gzip_disable")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"MSIE [1-6]\\.(?!.*SV1)"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"importing-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Importing Data")])}],!1,null,null,null);e.options.__file="install.md";a.default=e.exports}}]);