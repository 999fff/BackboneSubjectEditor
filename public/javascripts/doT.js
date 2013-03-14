  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>doT/doT.js at master · olado/doT</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="x/FhrGeuu8feSC6+EyizgtpRG91XvssrX2pyw8LaC1s=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-d33eb81436ca2351c68875227f5e9dfc8887af25.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-e3e37414633a585c09a62c420509fd4959ab0774.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-ad1b87fda705d87118448f87fb6a20bdb15bd841.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-e00f74145f7fc86fe4638ce73d17145192820927.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="28f095836ee1734f5a63a9b0f93c569e">

        <link data-pjax-transient rel='permalink' href='/olado/doT/blob/e513c5ca0fcdbb6a275a0bdf238162604a583178/doT.js'>
    <meta property="og:title" content="doT"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/olado/doT"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/e06299f27e89e9e0de43bcbb72bf5bab?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="doT - The fastest + concise javascript template engine for nodejs and browsers. Partials, custom delimiters and more. "/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="olado/doT"/>

    <meta name="description" content="doT - The fastest + concise javascript template engine for nodejs and browsers. Partials, custom delimiters and more. " />

  <link href="https://github.com/olado/doT/commits/master.atom" rel="alternate" title="Recent Commits to doT:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              <div class="command-bar js-command-bar  ">
      <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="micaelAlastor" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
  <ul class="top-nav">
      <li class="explore"><a href="https://github.com/explore">Explore</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
    <li><a href="http://help.github.com">Help</a></li>
  </ul>
</div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/micaelAlastor" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/bcfb424e7c50d9ddfdafc4d92711543c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> micaelAlastor
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="x/FhrGeuu8feSC6+EyizgtpRG91XvssrX2pyw8LaC1s=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1239398" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container js-select-menu-pane">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/olado/doT/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/olado/doT/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/olado/doT/stargazers">822</a>
    </li>

        <li>
          <a href="/olado/doT/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/olado/doT/network" class="social-count">128</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/olado" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">olado</span>
                  </a></span> /
                <strong><a href="/olado/doT" class="js-current-repository">doT</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/olado/doT" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/olado/doT/network" highlight="repo_network">Network</a></li>
    <li><a href="/olado/doT/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>11</span></a></li>

      <li><a href="/olado/doT/issues" highlight="repo_issues">Issues <span class='counter'>24</span></a></li>

      <li><a href="/olado/doT/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/olado/doT/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/olado/doT/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">1</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/olado/doT/blob/master/doT.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/olado/doT/blob/0.2.0/doT.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.0" rel="nofollow" title="0.2.0">0.2.0</a>
              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/olado/doT" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/olado/doT/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/olado/doT/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:7caaeb090ff582c917c555912912d88d -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:7caaeb090ff582c917c555912912d88d -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/olado/doT" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">doT</span></a></span></span><span class="separator"> / </span><strong class="final-path">doT.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="doT.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/olado/doT/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/e06299f27e89e9e0de43bcbb72bf5bab?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/olado" rel="author">olado</a></span>
    <time class="js-relative-date" datetime="2012-12-23T21:29:40-08:00" title="2012-12-23 21:29:40">December 23, 2012</time>
    <div class="commit-title">
        <a href="/olado/doT/commit/b655ae064686f312dd2db0fc3079c058af6d2386" class="message">new version 1.0.0: defines with parameters, compile tools</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="olado" href="/olado/doT/commits/master/doT.js?author=olado"><img height="20" src="https://secure.gravatar.com/avatar/e06299f27e89e9e0de43bcbb72bf5bab?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kitcambridge" href="/olado/doT/commits/master/doT.js?author=kitcambridge"><img height="20" src="https://secure.gravatar.com/avatar/bb3a685a3b48e5332aeb4cc0a01380c5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/e06299f27e89e9e0de43bcbb72bf5bab?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/olado">olado</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bb3a685a3b48e5332aeb4cc0a01380c5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kitcambridge">kitcambridge</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/olado/doT/blob/e513c5ca0fcdbb6a275a0bdf238162604a583178/doT.js" data-title="doT/doT.js at master · olado/doT · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>136 lines (124 sloc)</span>
                <span>4.909 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/olado/doT/edit/master/doT.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/olado/doT/raw/master/doT.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/olado/doT/blame/master/doT.js" class="button minibutton ">Blame</a>
                  <a href="/olado/doT/commits/master/doT.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// doT.js</span></div><div class='line' id='LC2'><span class="c1">// 2011, Laura Doktorova, https://github.com/olado/doT</span></div><div class='line' id='LC3'><span class="c1">// Licensed under the MIT license.</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC6'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'>	<span class="kd">var</span> <span class="nx">doT</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC9'>		<span class="nx">version</span><span class="o">:</span> <span class="s1">&#39;1.0.0&#39;</span><span class="p">,</span></div><div class='line' id='LC10'>		<span class="nx">templateSettings</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC11'>			<span class="nx">evaluate</span><span class="o">:</span>    <span class="sr">/\{\{([\s\S]+?\}?)\}\}/g</span><span class="p">,</span></div><div class='line' id='LC12'>			<span class="nx">interpolate</span><span class="o">:</span> <span class="sr">/\{\{=([\s\S]+?)\}\}/g</span><span class="p">,</span></div><div class='line' id='LC13'>			<span class="nx">encode</span><span class="o">:</span>      <span class="sr">/\{\{!([\s\S]+?)\}\}/g</span><span class="p">,</span></div><div class='line' id='LC14'>			<span class="nx">use</span><span class="o">:</span>         <span class="sr">/\{\{#([\s\S]+?)\}\}/g</span><span class="p">,</span></div><div class='line' id='LC15'>			<span class="nx">useParams</span><span class="o">:</span>   <span class="sr">/(^|[^\w$])def(?:\.|\[[\&#39;\&quot;])([\w$\.]+)(?:[\&#39;\&quot;]\])?\s*\:\s*([\w$\.]+|\&quot;[^\&quot;]+\&quot;|\&#39;[^\&#39;]+\&#39;|\{[^\}]+\})/g</span><span class="p">,</span></div><div class='line' id='LC16'>			<span class="nx">define</span><span class="o">:</span>      <span class="sr">/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g</span><span class="p">,</span></div><div class='line' id='LC17'>			<span class="nx">defineParams</span><span class="o">:</span><span class="sr">/^\s*([\w$]+):([\s\S]+)/</span><span class="p">,</span></div><div class='line' id='LC18'>			<span class="nx">conditional</span><span class="o">:</span> <span class="sr">/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g</span><span class="p">,</span></div><div class='line' id='LC19'>			<span class="nx">iterate</span><span class="o">:</span>     <span class="sr">/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g</span><span class="p">,</span></div><div class='line' id='LC20'>			<span class="nx">varname</span><span class="o">:</span>	<span class="s1">&#39;it&#39;</span><span class="p">,</span></div><div class='line' id='LC21'>			<span class="nx">strip</span><span class="o">:</span>		<span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC22'>			<span class="nx">append</span><span class="o">:</span>		<span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC23'>			<span class="nx">selfcontained</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC24'>		<span class="p">},</span></div><div class='line' id='LC25'>		<span class="nx">template</span><span class="o">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="c1">//fn, compile template</span></div><div class='line' id='LC26'>		<span class="nx">compile</span><span class="o">:</span>  <span class="kc">undefined</span>  <span class="c1">//fn, for express</span></div><div class='line' id='LC27'>	<span class="p">};</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>		<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">doT</span><span class="p">;</span></div><div class='line' id='LC31'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>		<span class="nx">define</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">doT</span><span class="p">;});</span></div><div class='line' id='LC33'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC34'>		<span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="k">this</span> <span class="o">||</span> <span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nb">eval</span><span class="p">)(</span><span class="s1">&#39;this&#39;</span><span class="p">);</span> <span class="p">}()).</span><span class="nx">doT</span> <span class="o">=</span> <span class="nx">doT</span><span class="p">;</span></div><div class='line' id='LC35'>	<span class="p">}</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>	<span class="kd">function</span> <span class="nx">encodeHTMLSource</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC38'>		<span class="kd">var</span> <span class="nx">encodeHTMLRules</span> <span class="o">=</span> <span class="p">{</span> <span class="s2">&quot;&amp;&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;#38;&quot;</span><span class="p">,</span> <span class="s2">&quot;&lt;&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;#60;&quot;</span><span class="p">,</span> <span class="s2">&quot;&gt;&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;#62;&quot;</span><span class="p">,</span> <span class="s1">&#39;&quot;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;#34;&#39;</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="o">:</span> <span class="s1">&#39;&amp;#39;&#39;</span><span class="p">,</span> <span class="s2">&quot;/&quot;</span><span class="o">:</span> <span class="s1">&#39;&amp;#47;&#39;</span> <span class="p">},</span></div><div class='line' id='LC39'>			<span class="nx">matchHTML</span> <span class="o">=</span> <span class="sr">/&amp;(?!#?\w+;)|&lt;|&gt;|&quot;|&#39;|\//g</span><span class="p">;</span></div><div class='line' id='LC40'>		<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC41'>			<span class="k">return</span> <span class="k">this</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">matchHTML</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span> <span class="nx">encodeHTMLRules</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span> <span class="o">||</span> <span class="nx">m</span><span class="p">;})</span> <span class="o">:</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC42'>		<span class="p">};</span></div><div class='line' id='LC43'>	<span class="p">}</span></div><div class='line' id='LC44'>	<span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">encodeHTML</span> <span class="o">=</span> <span class="nx">encodeHTMLSource</span><span class="p">();</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>	<span class="kd">var</span> <span class="nx">startend</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC47'>		<span class="nx">append</span><span class="o">:</span> <span class="p">{</span> <span class="nx">start</span><span class="o">:</span> <span class="s2">&quot;&#39;+(&quot;</span><span class="p">,</span>      <span class="nx">end</span><span class="o">:</span> <span class="s2">&quot;)+&#39;&quot;</span><span class="p">,</span>      <span class="nx">endencode</span><span class="o">:</span> <span class="s2">&quot;||&#39;&#39;).toString().encodeHTML()+&#39;&quot;</span> <span class="p">},</span></div><div class='line' id='LC48'>		<span class="nx">split</span><span class="o">:</span>  <span class="p">{</span> <span class="nx">start</span><span class="o">:</span> <span class="s2">&quot;&#39;;out+=(&quot;</span><span class="p">,</span> <span class="nx">end</span><span class="o">:</span> <span class="s2">&quot;);out+=&#39;&quot;</span><span class="p">,</span> <span class="nx">endencode</span><span class="o">:</span> <span class="s2">&quot;||&#39;&#39;).toString().encodeHTML();out+=&#39;&quot;</span><span class="p">}</span></div><div class='line' id='LC49'>	<span class="p">},</span> <span class="nx">skip</span> <span class="o">=</span> <span class="sr">/$^/</span><span class="p">;</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>	<span class="kd">function</span> <span class="nx">resolveDefs</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">block</span><span class="p">,</span> <span class="nx">def</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC52'>		<span class="k">return</span> <span class="p">((</span><span class="k">typeof</span> <span class="nx">block</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">block</span> <span class="o">:</span> <span class="nx">block</span><span class="p">.</span><span class="nx">toString</span><span class="p">())</span></div><div class='line' id='LC53'>		<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">define</span> <span class="o">||</span> <span class="nx">skip</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">code</span><span class="p">,</span> <span class="nx">assign</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>			<span class="k">if</span> <span class="p">(</span><span class="nx">code</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;def.&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>				<span class="nx">code</span> <span class="o">=</span> <span class="nx">code</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC56'>			<span class="p">}</span></div><div class='line' id='LC57'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">code</span> <span class="k">in</span> <span class="nx">def</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC58'>				<span class="k">if</span> <span class="p">(</span><span class="nx">assign</span> <span class="o">===</span> <span class="s1">&#39;:&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>					<span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">defineParams</span><span class="p">)</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">defineParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">param</span><span class="p">,</span> <span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>						<span class="nx">def</span><span class="p">[</span><span class="nx">code</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span><span class="nx">arg</span><span class="o">:</span> <span class="nx">param</span><span class="p">,</span> <span class="nx">text</span><span class="o">:</span> <span class="nx">v</span><span class="p">};</span></div><div class='line' id='LC61'>					<span class="p">});</span></div><div class='line' id='LC62'>					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">code</span> <span class="k">in</span> <span class="nx">def</span><span class="p">))</span> <span class="nx">def</span><span class="p">[</span><span class="nx">code</span><span class="p">]</span><span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC63'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC64'>					<span class="k">new</span> <span class="nb">Function</span><span class="p">(</span><span class="s2">&quot;def&quot;</span><span class="p">,</span> <span class="s2">&quot;def[&#39;&quot;</span><span class="o">+</span><span class="nx">code</span><span class="o">+</span><span class="s2">&quot;&#39;]=&quot;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">)(</span><span class="nx">def</span><span class="p">);</span></div><div class='line' id='LC65'>				<span class="p">}</span></div><div class='line' id='LC66'>			<span class="p">}</span></div><div class='line' id='LC67'>			<span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC68'>		<span class="p">})</span></div><div class='line' id='LC69'>		<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">use</span> <span class="o">||</span> <span class="nx">skip</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'>			<span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">useParams</span><span class="p">)</span> <span class="nx">code</span> <span class="o">=</span> <span class="nx">code</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">useParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>				<span class="k">if</span> <span class="p">(</span><span class="nx">def</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">def</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">arg</span> <span class="o">&amp;&amp;</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'>					<span class="kd">var</span> <span class="nx">rw</span> <span class="o">=</span> <span class="p">(</span><span class="nx">d</span><span class="o">+</span><span class="s2">&quot;:&quot;</span><span class="o">+</span><span class="nx">param</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;|\\/g</span><span class="p">,</span> <span class="s1">&#39;_&#39;</span><span class="p">);</span></div><div class='line' id='LC73'>					<span class="nx">def</span><span class="p">.</span><span class="nx">__exp</span> <span class="o">=</span> <span class="nx">def</span><span class="p">.</span><span class="nx">__exp</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC74'>					<span class="nx">def</span><span class="p">.</span><span class="nx">__exp</span><span class="p">[</span><span class="nx">rw</span><span class="p">]</span> <span class="o">=</span> <span class="nx">def</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|[^\\w$])&quot;</span> <span class="o">+</span> <span class="nx">def</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">arg</span> <span class="o">+</span> <span class="s2">&quot;([^\\w$])&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="s2">&quot;$1&quot;</span> <span class="o">+</span> <span class="nx">param</span> <span class="o">+</span> <span class="s2">&quot;$2&quot;</span><span class="p">);</span></div><div class='line' id='LC75'>					<span class="k">return</span> <span class="nx">s</span> <span class="o">+</span> <span class="s2">&quot;def.__exp[&#39;&quot;</span><span class="o">+</span><span class="nx">rw</span><span class="o">+</span><span class="s2">&quot;&#39;]&quot;</span><span class="p">;</span></div><div class='line' id='LC76'>				<span class="p">}</span></div><div class='line' id='LC77'>			<span class="p">});</span></div><div class='line' id='LC78'>			<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Function</span><span class="p">(</span><span class="s2">&quot;def&quot;</span><span class="p">,</span> <span class="s2">&quot;return &quot;</span> <span class="o">+</span> <span class="nx">code</span><span class="p">)(</span><span class="nx">def</span><span class="p">);</span></div><div class='line' id='LC79'>			<span class="k">return</span> <span class="nx">v</span> <span class="o">?</span> <span class="nx">resolveDefs</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">def</span><span class="p">)</span> <span class="o">:</span> <span class="nx">v</span><span class="p">;</span></div><div class='line' id='LC80'>		<span class="p">});</span></div><div class='line' id='LC81'>	<span class="p">}</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>	<span class="kd">function</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC84'>		<span class="k">return</span> <span class="nx">code</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\(&#39;|\\)/g</span><span class="p">,</span> <span class="s2">&quot;$1&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\r\t\n]/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">);</span></div><div class='line' id='LC85'>	<span class="p">}</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>	<span class="nx">doT</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tmpl</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">def</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>		<span class="nx">c</span> <span class="o">=</span> <span class="nx">c</span> <span class="o">||</span> <span class="nx">doT</span><span class="p">.</span><span class="nx">templateSettings</span><span class="p">;</span></div><div class='line' id='LC89'>		<span class="kd">var</span> <span class="nx">cse</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">append</span> <span class="o">?</span> <span class="nx">startend</span><span class="p">.</span><span class="nx">append</span> <span class="o">:</span> <span class="nx">startend</span><span class="p">.</span><span class="nx">split</span><span class="p">,</span> <span class="nx">needhtmlencode</span><span class="p">,</span> <span class="nx">sid</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">indv</span><span class="p">,</span></div><div class='line' id='LC90'>			<span class="nx">str</span>  <span class="o">=</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">use</span> <span class="o">||</span> <span class="nx">c</span><span class="p">.</span><span class="nx">define</span><span class="p">)</span> <span class="o">?</span> <span class="nx">resolveDefs</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">tmpl</span><span class="p">,</span> <span class="nx">def</span> <span class="o">||</span> <span class="p">{})</span> <span class="o">:</span> <span class="nx">tmpl</span><span class="p">;</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>		<span class="nx">str</span> <span class="o">=</span> <span class="p">(</span><span class="s2">&quot;var out=&#39;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">strip</span> <span class="o">?</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g</span><span class="p">,</span><span class="s1">&#39; &#39;</span><span class="p">)</span></div><div class='line' id='LC93'>					<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r|\n|\t|\/\*[\s\S]*?\*\//g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">)</span><span class="o">:</span> <span class="nx">str</span><span class="p">)</span></div><div class='line' id='LC94'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;|\\/g</span><span class="p">,</span> <span class="s1">&#39;\\$&amp;&#39;</span><span class="p">)</span></div><div class='line' id='LC95'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">interpolate</span> <span class="o">||</span> <span class="nx">skip</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>				<span class="k">return</span> <span class="nx">cse</span><span class="p">.</span><span class="nx">start</span> <span class="o">+</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="o">+</span> <span class="nx">cse</span><span class="p">.</span><span class="nx">end</span><span class="p">;</span></div><div class='line' id='LC97'>			<span class="p">})</span></div><div class='line' id='LC98'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">encode</span> <span class="o">||</span> <span class="nx">skip</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>				<span class="nx">needhtmlencode</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC100'>				<span class="k">return</span> <span class="nx">cse</span><span class="p">.</span><span class="nx">start</span> <span class="o">+</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="o">+</span> <span class="nx">cse</span><span class="p">.</span><span class="nx">endencode</span><span class="p">;</span></div><div class='line' id='LC101'>			<span class="p">})</span></div><div class='line' id='LC102'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">conditional</span> <span class="o">||</span> <span class="nx">skip</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">elsecase</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>				<span class="k">return</span> <span class="nx">elsecase</span> <span class="o">?</span></div><div class='line' id='LC104'>					<span class="p">(</span><span class="nx">code</span> <span class="o">?</span> <span class="s2">&quot;&#39;;}else if(&quot;</span> <span class="o">+</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;){out+=&#39;&quot;</span> <span class="o">:</span> <span class="s2">&quot;&#39;;}else{out+=&#39;&quot;</span><span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC105'>					<span class="p">(</span><span class="nx">code</span> <span class="o">?</span> <span class="s2">&quot;&#39;;if(&quot;</span> <span class="o">+</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;){out+=&#39;&quot;</span> <span class="o">:</span> <span class="s2">&quot;&#39;;}out+=&#39;&quot;</span><span class="p">);</span></div><div class='line' id='LC106'>			<span class="p">})</span></div><div class='line' id='LC107'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">iterate</span> <span class="o">||</span> <span class="nx">skip</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">iterate</span><span class="p">,</span> <span class="nx">vname</span><span class="p">,</span> <span class="nx">iname</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterate</span><span class="p">)</span> <span class="k">return</span> <span class="s2">&quot;&#39;;} } out+=&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC109'>				<span class="nx">sid</span><span class="o">+=</span><span class="mi">1</span><span class="p">;</span> <span class="nx">indv</span><span class="o">=</span><span class="nx">iname</span> <span class="o">||</span> <span class="s2">&quot;i&quot;</span><span class="o">+</span><span class="nx">sid</span><span class="p">;</span> <span class="nx">iterate</span><span class="o">=</span><span class="nx">unescape</span><span class="p">(</span><span class="nx">iterate</span><span class="p">);</span></div><div class='line' id='LC110'>				<span class="k">return</span> <span class="s2">&quot;&#39;;var arr&quot;</span><span class="o">+</span><span class="nx">sid</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">iterate</span><span class="o">+</span><span class="s2">&quot;;if(arr&quot;</span><span class="o">+</span><span class="nx">sid</span><span class="o">+</span><span class="s2">&quot;){var &quot;</span><span class="o">+</span><span class="nx">vname</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">indv</span><span class="o">+</span><span class="s2">&quot;=-1,l&quot;</span><span class="o">+</span><span class="nx">sid</span><span class="o">+</span><span class="s2">&quot;=arr&quot;</span><span class="o">+</span><span class="nx">sid</span><span class="o">+</span><span class="s2">&quot;.length-1;while(&quot;</span><span class="o">+</span><span class="nx">indv</span><span class="o">+</span><span class="s2">&quot;&lt;l&quot;</span><span class="o">+</span><span class="nx">sid</span><span class="o">+</span><span class="s2">&quot;){&quot;</span></div><div class='line' id='LC111'>					<span class="o">+</span><span class="nx">vname</span><span class="o">+</span><span class="s2">&quot;=arr&quot;</span><span class="o">+</span><span class="nx">sid</span><span class="o">+</span><span class="s2">&quot;[&quot;</span><span class="o">+</span><span class="nx">indv</span><span class="o">+</span><span class="s2">&quot;+=1];out+=&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC112'>			<span class="p">})</span></div><div class='line' id='LC113'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">evaluate</span> <span class="o">||</span> <span class="nx">skip</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'>				<span class="k">return</span> <span class="s2">&quot;&#39;;&quot;</span> <span class="o">+</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;out+=&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC115'>			<span class="p">})</span></div><div class='line' id='LC116'>			<span class="o">+</span> <span class="s2">&quot;&#39;;return out;&quot;</span><span class="p">)</span></div><div class='line' id='LC117'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n/g</span><span class="p">,</span> <span class="s1">&#39;\\n&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t/g</span><span class="p">,</span> <span class="s1">&#39;\\t&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r/g</span><span class="p">,</span> <span class="s1">&#39;\\r&#39;</span><span class="p">)</span></div><div class='line' id='LC118'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\s|;|\}|^|\{)out\+=&#39;&#39;;/g</span><span class="p">,</span> <span class="s1">&#39;$1&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\+&#39;&#39;/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC119'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\s|;|\}|^|\{)out\+=&#39;&#39;\+/g</span><span class="p">,</span><span class="s1">&#39;$1out+=&#39;</span><span class="p">);</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>		<span class="k">if</span> <span class="p">(</span><span class="nx">needhtmlencode</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span><span class="p">.</span><span class="nx">selfcontained</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>			<span class="nx">str</span> <span class="o">=</span> <span class="s2">&quot;String.prototype.encodeHTML=(&quot;</span> <span class="o">+</span> <span class="nx">encodeHTMLSource</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;());&quot;</span> <span class="o">+</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC123'>		<span class="p">}</span></div><div class='line' id='LC124'>		<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC125'>			<span class="k">return</span> <span class="k">new</span> <span class="nb">Function</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">varname</span><span class="p">,</span> <span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC126'>		<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC127'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">console</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Could not create a template function: &quot;</span> <span class="o">+</span> <span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC128'>			<span class="k">throw</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC129'>		<span class="p">}</span></div><div class='line' id='LC130'>	<span class="p">};</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>	<span class="nx">doT</span><span class="p">.</span><span class="nx">compile</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tmpl</span><span class="p">,</span> <span class="nx">def</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC133'>		<span class="k">return</span> <span class="nx">doT</span><span class="p">.</span><span class="nx">template</span><span class="p">(</span><span class="nx">tmpl</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">def</span><span class="p">);</span></div><div class='line' id='LC134'>	<span class="p">};</span></div><div class='line' id='LC135'><span class="p">}());</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543525" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06598s from fe17.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/olado/doT/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06646' data-host='fe17'></span>
    
  </body>
</html>

