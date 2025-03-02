/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import type { FontAsset, ImageAsset } from "@webstudio-is/sdk";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Image as Image, Box as Box, Slot as Slot, Button as Button, Text as Text, Heading as Heading, Paragraph as Paragraph, List as List, ListItem as ListItem, Time as Time } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = undefined;

      export const favIconAsset: ImageAsset | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: FontAsset[] =
        []

      export const pageBackgroundImageAssets: ImageAsset[] =
        []

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-body`}>
<Slot>
<Fragment_1>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n    /* So we don't need to add a token to every paragraph to remove margin. */\n    p {\n        margin: 0;\n    }\n\n    * {\n        /* Make links scroll to their sections smoothly. */\n        scroll-behavior: smooth;\n    }\n\n    /* Nav Trigger show active when submenu is open. */\n    nav button[data-state=\"open\"] {\n        --navigation-menu-trigger-icon-transform: 180deg;\n        color: var(--foreground-muted);\n    }\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
<Box
tag={"header"}
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1fc00l cdb7l7w c1m0iipv c1h2j5hn c1n704d cl8tvtt c1tjxjp9 c1adqny3 cg6f78n c11az9g3 c1a4sexm c1tcpxlr c173xgzn cv7dw1t c1ru812e cta8nvm c1pmywsz`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh c1f3y4 c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/temp-logo_VoLGlBi1qX_cywG1xnlrv.svg"}
width={169}
height={40}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<Box
tag={"nav"}
aria-label={"main"}
className={`w-box c1udybau c1m0iipv c1g8nvc5 c9yfzrn c15fo2rq c1ohl2ak`}>
<NavigationMenu
className={`w-navigation-menu c12g22pm`}>
<NavigationMenuList
className={`w-menu-list c1udybau c9yfzrn ckhzizd c1omflmd codh9pd c1m0iipv c1g8nvc5 c1y8hsq3 c16w7v2z czjsvn5 c1w2mhee`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
<Text
className={`w-text`}>
{"About"}
</Text>
<Box
className={`w-box cuzccmy crzrrd3 c15fo2rq c7u74f5 c3lu1uc cgpcm6b c1a7yb1 c1rq8sjk c6rh7z8 c87374d`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="0"
className={`w-menu-content cmh16e5 c16occov c5zlccm c96x9a9 c1udybau c1n704d cl8tvtt c17p0rlk`}>
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<Box
className={`w-box cj3kd7x cafowf1 cvtfhg1 c1vl81c6 c1y7zlic ccp12hx c6rh7z8 c87374d c1chvrhg`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cvtfhg1`} />
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c151fxgw cefss6g`}>
<Text
tag={"span"}
className={`w-text c9gb9mb`}>
{"Link text you can edit"}
</Text>
<Text
tag={"span"}
className={`w-text c1tu0ls4`}>
{"Link text you can edit"}
</Text>
</Box>
</Link>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<Box
className={`w-box cj3kd7x cafowf1 cvtfhg1 c1vl81c6 c1y7zlic ccp12hx c6rh7z8 c87374d c1chvrhg`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cvtfhg1`} />
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c151fxgw cefss6g`}>
<Text
tag={"span"}
className={`w-text c9gb9mb`}>
{"Link text you can edit"}
</Text>
<Text
tag={"span"}
className={`w-text c1tu0ls4`}>
{"Link text you can edit"}
</Text>
</Box>
</Link>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<Box
className={`w-box cj3kd7x cafowf1 cvtfhg1 c1vl81c6 c1y7zlic ccp12hx c6rh7z8 c87374d c1chvrhg`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cvtfhg1`} />
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c151fxgw cefss6g`}>
<Text
tag={"span"}
className={`w-text c9gb9mb`}>
{"Link text you can edit"}
</Text>
<Text
tag={"span"}
className={`w-text c1tu0ls4`}>
{"Link text you can edit"}
</Text>
</Box>
</Link>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c1i86v51 c89xe4o c17pjzch c178c260 c8n0zg7 c67do6v c1q0c9a6 c2xr64q c1kdxer3 c1bxqqjg c1lamv12 cq9g8kk c1f2xltx`}>
<Box
className={`w-box c1udybau c1wmewxe c1h2j5hn cdb7l7w cgf5tfr c1e7wbyz`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o`}>
{"Heading text you can edit"}
</Heading>
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c1h2j5hn cgf5tfr c1e7wbyz`}>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
<Box
className={`w-box c1udybau cdb7l7w cgf5tfr c1e7wbyz c1wmewxe c1h2j5hn`}>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<Link
href={"/about"}
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"About"}
</Link>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box c5zlccm cmh16e5 c1rfe2xs c1udybau c1g8nvc5 c1ynzq67 coipb23 c12nmjco`}>
<NavigationMenuViewport
data-ani={"zoom"}
className={`w-menu-viewport c173xgzn c4elmpc cgswr4a c1ibc57p c100yuk6 c3mcuba cpokqwt c1rj2al4 c1f12hhz cvy6s17 c4e00ut cmnq8po c1454brp c67do6v c1q0c9a6 c19db9fa`} />
</Box>
</NavigationMenu>
</Box>
<Box
className={`w-box c133d7eb`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1kqo2c4`}>
<Link
className={`w-link cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s`}>
{"Lorem"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box cr44u0a ckjiuoi`}>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s c1clw8ur c19h13bs c1l8viig c1akzw89 c1do4smn c1c0mf86 cfapqxy c131nso8 c19fv0we c1rmams5 c19ws7q`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ani={"fade"}
className={`w-dialog-overlay cdb7l7w c1oetcv7 cz4qkvw csh5qlw c1qvqkbl c138o39y c1cnpxxy c11b36fz c15q5gn9 cv7dw1t c1iutj8u ctkomec`}>
<DialogContent
className={`w-dialog-content c9yfzrn cv7dw1t c1eivms7 c8uq6m6 c1iutj8u ce1hk9r c161vlbh cyt0ldx cgbsof4 cvlv4hp clid8v8`}>
<Box
className={`w-box cv7dw1t c1pmywsz cta8nvm`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh c1f3y4 c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/temp-logo_VoLGlBi1qX_cywG1xnlrv.svg"}
width={169}
height={40}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
className={`w-close-button cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s c1clw8ur c19h13bs c1l8viig c1akzw89 c1do4smn c1c0mf86 cfapqxy c131nso8 c19fv0we c1rmams5 c19ws7q`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box cv7dw1t cta8nvm cij2vpw c9n5525 c1iutj8u`}>
<List
className={`w-list cv7dw1t c1iutj8u c1x8968j c3nmkew c1jk4pdt ca62g9q c19gfsua`}>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
</List>
</Box>
<Box
className={`w-box c1m2utyf`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1kqo2c4`}>
<Link
className={`w-link cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s`}>
{"Lorem"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"section"}
className={`w-box c7xrg0i c1lghw34 c1gpmptk c1kqan5s c11nl2r1 c1f0lm1w ce1wmm1 cntqco9 c1s6vntr`}>
<Box
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1udybau cdb7l7w c157lt0s c1h2j5hn c12t8dnv c1lia5n c1tjxjp9 c1adqny3`}>
<Box
className={`w-box c1udybau cdb7l7w cl8tvtt c1n704d c1m0iipv c1h2j5hn c1u1vn1i`}>
<Box
className={`w-box cgw9x5s c4l51sq c1xctwwi cnsc4l2 creqky2 c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1udybau c1m0iipv c1g8nvc5 c1y8hsq3 c16w7v2z c1i86v51 c89xe4o c1u1vn1i`}>
<Text
className={`w-text c11opg9y c14ae7l1 c1kigl97 cgmr904 c1t04coc c1bou1pr ccvoiu8 cr85xpi c117gidx cafy245 ctlcokz cji2ks6 c1tu0ls4 c19262pr`}>
{"New"}
</Text>
<Text
className={`w-text`}>
{"Lorem ipsum"}
</Text>
</Box>
<Heading
tag={"h1"}
className={`w-heading ct1qyrv c1kigl97 c1t63v45 c100q1g9 c12cvy4e cmuga36 c15yuch0`}>
{"Webstudio Demo"}
</Heading>
<Paragraph
className={`w-paragraph ciws6gk cl4ieyv c1tu0ls4 c15yuch0`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fugiat nulla suspendisse tortor aenean dis placerat."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" viewBox=\"0 0 685 385\" width=\"100%\" height=\"100%\"><path d=\"M678.317 384H6.683A5.689 5.689 0 0 1 1 378.317V6.683A5.689 5.689 0 0 1 6.683 1h671.634A5.689 5.689 0 0 1 684 6.683v371.634a5.689 5.689 0 0 1-5.683 5.683Z\" fill=\"var(--background-primary, #ffffff)\"/><path d=\"M678.317 384H6.683A5.689 5.689 0 0 1 1 378.317V6.683A5.689 5.689 0 0 1 6.683 1h671.634A5.689 5.689 0 0 1 684 6.683v371.634a5.689 5.689 0 0 1-5.683 5.683Z\" fill=\"none\" stroke=\"var(--foreground-border, #d4d4d4)\" stroke-miterlimit=\"10\" stroke-width=\"2\"/><path d=\"M55.568 40H29.432A6.438 6.438 0 0 1 23 33.568v-3.136A6.438 6.438 0 0 1 29.432 24h26.136A6.438 6.438 0 0 1 62 30.432v3.136A6.438 6.438 0 0 1 55.568 40ZM591.5 38h-14c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5h14c3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5ZM623.5 38h-14c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5h14c3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5ZM655.5 38h-14c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5h14c3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5Z\" fill=\"var(--foreground-border, #d4d4d4)\"/><path d=\"M653.988 292H252.012c-4.418 0-8.012-3.594-8.012-8.012V66.012c0-4.418 3.594-8.012 8.012-8.012h401.976c4.418 0 8.012 3.594 8.012 8.012v217.976c0 4.418-3.594 8.012-8.012 8.012Z\" fill=\"var(--background-accent, #6c63ff)\"/><path d=\"M120 148H31c-3.86 0-7-3.14-7-7s3.14-7 7-7h89c3.86 0 7 3.14 7 7s-3.14 7-7 7ZM172 170H28c-2.757 0-5-2.243-5-5s2.243-5 5-5h144c2.757 0 5 2.243 5 5s-2.243 5-5 5ZM172 192H28c-2.757 0-5-2.243-5-5s2.243-5 5-5h144c2.757 0 5 2.243 5 5s-2.243 5-5 5ZM121.5 338c-7.444 0-13.5-6.056-13.5-13.5s6.056-13.5 13.5-13.5 13.5 6.056 13.5 13.5-6.056 13.5-13.5 13.5ZM217 357.5H26.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5H217c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5ZM217 370.5H26.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5H217c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5ZM342.5 338c-7.444 0-13.5-6.056-13.5-13.5s6.056-13.5 13.5-13.5 13.5 6.056 13.5 13.5-6.056 13.5-13.5 13.5ZM438 357.5H247.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5H438c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5ZM438 370.5H247.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5H438c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5ZM562.5 338c-7.444 0-13.5-6.056-13.5-13.5s6.056-13.5 13.5-13.5 13.5 6.056 13.5 13.5-6.056 13.5-13.5 13.5ZM658 357.5H467.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5H658c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5ZM658 370.5H467.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5H658c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5ZM58.5 219h-26c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5h26c3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5Z\" fill=\"var(--foreground-border, #d4d4d4)\"/></svg>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c7xrg0i c1lghw34`}>
<Box
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1udybau cdb7l7w c1m0iipv c1g8nvc5 c12t8dnv c1lia5n c1tjxjp9 c1adqny3`}>
<Box
className={`w-box c1udybau cdb7l7w cl8tvtt c1n704d c1m0iipv c1h2j5hn c1u1vn1i cuota3w cij2vpw ccyc9v5`}>
<Heading
tag={"h2"}
className={`w-heading c1e63t0d c1kigl97 c1t63v45 c100q1g9 c89xe4o cmuga36 c15yuch0`}>
{"Features"}
</Heading>
<Paragraph
className={`w-paragraph ciws6gk cl4ieyv c1tu0ls4 c15yuch0`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
<Box
className={`w-box c1fc00l c12t8dnv c1lia5n cn9ofg9 c11az9g3 c1ciau3r cv7dw1t c1iutj8u`}>
<Box
className={`w-box c1l16b5h c1dn2r4z cdnt313 c7nn81g c1d1wgtw c13r406y cdltse c1epycyn c1m2zde0 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 c1udybau cdb7l7w c1y8hsq3 c16w7v2z c17p0rlk`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o c1udybau c1m0iipv c1h2j5hn cfy7o5s c1fgwgmi`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg data-slot=\"icon\" fill=\"currentColor\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z\"></path>\n</svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={`w-text`}>
{"Lorem Ipsum"}
</Text>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
<Box
className={`w-box c1l16b5h c1dn2r4z cdnt313 c7nn81g c1d1wgtw c13r406y cdltse c1epycyn c1m2zde0 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 c1udybau cdb7l7w c1y8hsq3 c16w7v2z c17p0rlk`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o c1udybau c1m0iipv c1h2j5hn cfy7o5s c1fgwgmi`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg data-slot=\"icon\" fill=\"currentColor\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z\"></path>\n</svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={`w-text`}>
{"Lorem Ipsum"}
</Text>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
<Box
className={`w-box c1l16b5h c1dn2r4z cdnt313 c7nn81g c1d1wgtw c13r406y cdltse c1epycyn c1m2zde0 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 c1udybau cdb7l7w c1y8hsq3 c16w7v2z c17p0rlk`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o c1udybau c1m0iipv c1h2j5hn cfy7o5s c1fgwgmi`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg data-slot=\"icon\" fill=\"currentColor\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z\"></path>\n</svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={`w-text`}>
{"Lorem Ipsum"}
</Text>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
<Box
className={`w-box c1l16b5h c1dn2r4z cdnt313 c7nn81g c1d1wgtw c13r406y cdltse c1epycyn c1m2zde0 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 c1udybau cdb7l7w c1y8hsq3 c16w7v2z c17p0rlk`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o c1udybau c1m0iipv c1h2j5hn cfy7o5s c1fgwgmi`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg data-slot=\"icon\" fill=\"currentColor\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z\"></path>\n</svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={`w-text`}>
{"Lorem Ipsum"}
</Text>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
<Box
className={`w-box c1l16b5h c1dn2r4z cdnt313 c7nn81g c1d1wgtw c13r406y cdltse c1epycyn c1m2zde0 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 c1udybau cdb7l7w c1y8hsq3 c16w7v2z c17p0rlk`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o c1udybau c1m0iipv c1h2j5hn cfy7o5s c1fgwgmi`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg data-slot=\"icon\" fill=\"currentColor\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z\"></path>\n</svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={`w-text`}>
{"Lorem Ipsum"}
</Text>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
<Box
className={`w-box c1l16b5h c1dn2r4z cdnt313 c7nn81g c1d1wgtw c13r406y cdltse c1epycyn c1m2zde0 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 c1udybau cdb7l7w c1y8hsq3 c16w7v2z c17p0rlk`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o c1udybau c1m0iipv c1h2j5hn cfy7o5s c1fgwgmi`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg data-slot=\"icon\" fill=\"currentColor\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z\"></path>\n</svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={`w-text`}>
{"Lorem Ipsum"}
</Text>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c7xrg0i c1lghw34`}>
<Box
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1udybau cdb7l7w c157lt0s c1h2j5hn c12t8dnv c1lia5n c1tjxjp9 c1adqny3`}>
<Box
className={`w-box c1udybau cdb7l7w cl8tvtt c1n704d c1m0iipv c1h2j5hn c1u1vn1i`}>
<Heading
tag={"h2"}
className={`w-heading c1e63t0d c1kigl97 c1t63v45 c100q1g9 c89xe4o cmuga36 c15yuch0`}>
{"Articles"}
</Heading>
<Paragraph
className={`w-paragraph ciws6gk cl4ieyv c1tu0ls4 c15yuch0`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
<Box
className={`w-box c1fc00l c1n704d cl8tvtt cn9ofg9 c11az9g3 c1ciau3r cv7dw1t c1iutj8u`}>
{undefined?.data?.products?.map?.((articleItem: any, index: number) =>
<Fragment key={index}>
<Box
tag={"article"}
className={`w-box`}>
<Link
href={`/blogs/${articleItem?.slug}`}
className={`w-link c1udybau cdb7l7w c1h2j5hn cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c1i86v51 c89xe4o c17pjzch c178c260 c8n0zg7 c67do6v c1q0c9a6 civdyaj c2xr64q c1kdxer3 c1bxqqjg c1lamv12 cq9g8kk c1f2xltx`}>
<Box
className={`w-box c1udybau c1wmewxe c1g8nvc5 cdb7l7w c1y8hsq3 c16w7v2z`}>
<Image
src={articleItem?.images?.[0]}
alt={articleItem?.imageAlt}
width={700}
height={500}
className={`w-image cr8q1yd c1gr8wku c176pu3l cf0hq4b c12g22pm c812a4g`} />
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c1h2j5hn cgf5tfr c1e7wbyz`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o`}>
{articleItem?.title}
</Heading>
</Box>
<Box
className={`w-box c1udybau cdb7l7w cgf5tfr c1e7wbyz c1wmewxe c1h2j5hn c9remts`}>
<Time
datetime={articleItem?.datePublished}
country={"US"}
className={`w-time c1tu0ls4`} />
</Box>
</Link>
</Box>
</Fragment>
)}
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box c7xrg0i c1lghw34 c2hb15h`}>
<Box
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1udybau cdb7l7w c157lt0s c1h2j5hn c12t8dnv c1lia5n c1tjxjp9 c1adqny3`}>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q ciyg0wb`}>
<Box
className={`w-box c1fc00l c12t8dnv cl8tvtt ceo9xve c11az9g3 c1ciau3r cv7dw1t c1iutj8u cvlv4hp clid8v8`}>
<Box
className={`w-box c1udybau cdb7l7w c1n704d cl8tvtt`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh c1f3y4 c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/temp-logo_VoLGlBi1qX_cywG1xnlrv.svg"}
width={169}
height={40}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
</Paragraph>
<Slot>
<Fragment_1>
<Box
className={`w-box c1udybau cfy7o5s c1fgwgmi cjdoc0u cg0hnqo`}>
<Link
aria-label={"LinkedIn"}
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 432 432\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z\"/></svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Link>
<Link
aria-label={"YouTube"}
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 432 384\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M422 107q5 35 5 69v32l-5 69q-4 29-17 42q-14 14-42 18q-27 2-64.5 3t-61.5 1h-24q-111-1-145-4l-8-1l-13-2l-12.5-5l-13-10l-10-16.5L6 284l-2-7q-4-35-4-69v-32l4-69q4-29 17-42q14-15 43-18q27-2 64-3t61-1h24q90 0 150 4q28 3 42 18q4 4 7 9.5t5 11t3 10.5t2 8v3zm-151 88l14-7l-115-60v120z\"/></svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Link>
<Link
aria-label={"Facebook"}
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 224 432\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z\"/></svg>"}
className={`w-html-embed c13l6j6w c7u74f5 c3lu1uc c1m0iipv c1g8nvc5`} />
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box c1udybau cjdoc0u c12t8dnv c1lia5n c1sj04ag c1elzv81 cuota3w c9o3wb2`}>
<Box
tag={"nav"}
aria-labelledby={"menu1Title"}
className={`w-box c1udybau cgf5tfr c1e7wbyz cdb7l7w crzrrd3 c15fo2rq`}>
<Heading
tag={"h2"}
id={"menu1Title"}
className={`w-heading c1jrsorq c1kigl97 c1t63v45 c100q1g9 c1tu0ls4`}>
{"Menu"}
</Heading>
<List
className={`w-list codh9pd c1awhk92 c1kng01v c1udybau cgf5tfr c1e7wbyz cdb7l7w`}>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu2Title"}
className={`w-box c1udybau cgf5tfr c1e7wbyz cdb7l7w crzrrd3 c15fo2rq`}>
<Heading
tag={"h2"}
id={"menu2Title"}
className={`w-heading c1jrsorq c1kigl97 c1t63v45 c100q1g9 c1tu0ls4`}>
{"Resources"}
</Heading>
<List
className={`w-list codh9pd c1awhk92 c1kng01v c1udybau cgf5tfr c1e7wbyz cdb7l7w`}>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu3Title"}
className={`w-box c1udybau cgf5tfr c1e7wbyz cdb7l7w`}>
<Heading
tag={"h2"}
id={"menu3Title"}
className={`w-heading c1jrsorq c1kigl97 c1t63v45 c100q1g9 c1tu0ls4`}>
{"Contact"}
</Heading>
<List
className={`w-list codh9pd c1awhk92 c1kng01v c1udybau cgf5tfr c1e7wbyz cdb7l7w`}>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"lorem@example.com"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"000-000-000"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Lorem"}
</Link>
</ListItem>
</List>
</Box>
</Box>
</Box>
<Box
className={`w-box c1udybau cw06hvq cjdoc0u c1wmewxe c1twzs6g c1t0r8uo cpcxhgd`}>
<Box
className={`w-box c1udybau c1m0iipv c1h2j5hn cfy7o5s c1fgwgmi c1tzt3ky c1elzv81`}>
<Text
className={`w-text`}>
{"© 2025 Your Company, Inc."}
</Text>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"Privacy"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Body>
}


      export { Page }
    