import { IMG_SERABI_MIN } from '../../configs/images'

const FB_ID = 'alifprihantoro'
const IMG_URL = IMG_SERABI_MIN
export default html`
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- tittle -->
  <b:if cond="data:view.isSingleItem">
    <b:elseif cond="data:view.isHomepage" />
    <title><data:blog.title/> | <data:blog.metaDescription/></title>
    <b:elseif cond="data:view.search.label" />
    <title><data:blog.pageTitle/> | <data:blog.metaDescription/></title>
    <b:elseif cond="data:view.search.query" />
    <title>
      <data:view.search.resultsMessage/> | <data:blog.metaDescription/>
    </title>
    <b:elseif
      cond="data:view.search and !data:view.search.label and !data:view.search.query" />
    <title><data:blog.pageTitle/> | <data:blog.metaDescription/></title>
    <b:elseif cond="data:view.isArchive" />
    <title>
      <data:view.archive.rangeMessage/> | <data:blog.metaDescription/>
    </title>
    <b:elseif cond="data:view.isError" />
    <title>404 - URL Tidak Ditemukan</title>
  </b:if>
  <!-- description -->
  <b:if cond='data:blog.metaDescription != ""'>
    <meta expr:content="data:blog.metaDescription" name="description" />
  </b:if>
  <link rel="icon" href="/favicon.ico" />
  <!-- Facebook Open Graph Meta Tag -->
  <b:if cond="data:view.isHomepage">
    <b:if cond="data:view.isPost">
      <b:if cond="data:view.isPage">
        <b:if cond="data:blog.url">
          <meta expr:content="data:blog.url" property="og:url" />
        </b:if>
        <meta expr:content="data:blog.title" property="og:site_name" />
        <b:if cond="data:blog.pageName">
          <meta
            expr:content="data:blog.pageName"
            property="og:title" /> </b:if></b:if></b:if
  ></b:if>
  <meta content="blog" property="og:type" />
  <b:if cond="data:blog.postImageUrl">
    <meta expr:content="data:blog.postImageUrl" property="og:image" />
    <b:else />
    <b:if cond="data:blog.postImageThumbnailUrl">
      <meta expr:content="data:blog.postThumbnailUrl" property="og:image" />
      <b:else />
      <meta content="${IMG_URL}" property="og:image" /> </b:if
  ></b:if>
  <b:if cond="data:blog.metaDescription">
    <meta expr:content="data:blog.metaDescription" property="og:description" />
    <b:else />
    <meta expr:content="data:post.snippet" property="og:description" />
  </b:if>
  <meta expr:content="data:blog.title" property="og:site_name" />
  <meta content="https://www.facebook.com/${FB_ID}" property="article:author" />
  <meta
    content="https://www.facebook.com/${FB_ID}"
    property="article:publisher" />
  <meta content="${FB_ID}" property="fb:admins" />
  <meta content="${FB_ID}" property="fb:app_id" />
  <meta content="id_ID" property="og:locale" />
  <meta content="en_US" property="og:locale:alternate" />
`