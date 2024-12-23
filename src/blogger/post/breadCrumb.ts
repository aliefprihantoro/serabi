export default html`
  <b:if cond="data:view.isPost">
    <b:loop values="data:posts" var="post">
        <li
          itemprop="itemListElement"
          itemscope="itemscope"
          itemtype="https://schema.org/ListItem">
          <meta content="1" itemprop="position" />
          <a
            class="no-underline"
            expr:href="data:blog.homepageUrl.canonical"
            title="Home"
            itemprop="item">
            <span itemprop="name">Home</span>
          </a>
        </li>
        <b:if cond="data:post.labels">
          <b:loop index="num" values="data:post.labels" var="label">
            <li
              itemprop="itemListElement"
              itemscope="itemscope"
              itemtype="https://schema.org/ListItem">
              <meta expr:content="data:num+2" itemprop="position" />
              <a
                expr:href="data:label.url.canonical"
                expr:title="data:label.name"
                itemprop="item">
                <span itemprop="name"><data:label.name /></span>
              </a>
            </li>
          </b:loop>
            <li
              itemprop="itemListElement"
              itemscope="itemscope"
              itemtype="https://schema.org/ListItem">
              <meta expr:content="data:num+2" itemprop="position" />
              <a
                expr:href="data:post.url"
                expr:title="data:post.title"
                itemprop="item">
                <span itemprop="name"><data:post.title /></span>
              </a>
            </li>
          <b:else />
          &amp;nbsp;&#8250;&amp;nbsp; Tidak Ada Kategori
        </b:if>
    </b:loop>
  </b:if>
`