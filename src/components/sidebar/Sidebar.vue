<template>
  <div class="page-sidebar-wrapper">
    <div class="page-sidebar navbar-collapse collapse">
      <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true"
          data-slide-speed="200" style="padding-top: 20px">
        <li class="sidebar-toggler-wrapper hide">
          <div class="sidebar-toggler">
            <span></span>
          </div>
        </li>
        <li class="sidebar-search-wrapper">
          <form class="sidebar-search">
            <a href="javascript:;" class="remove">
              <i class="icon-close"></i>
            </a>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
               <a href="javascript:;" class="btn submit">
               <i class="icon-magnifier"></i>
               </a>
              </span>
            </div>
          </form>
        </li>

        <!--<menugroup v-for="(cate,index) in sidebar"
                   :key="cate.category"
                   :title="cate.title">
        </menugroup>-->

        <navItem v-for="(cate,i) in sidebar"
                 :key="cate.category"
                 :title="cate.title"
                 :icon="cate.icon"
                 :active=false
                 :navIndex=i
                 @itemOpen=handleOpen
        >
          <!--:active="$route.path.indexOf(cate.category) > -1 ? 'active open' : ''">-->

          <subMenu v-for="(item,j) in cate.children"
                   :key="item.router"
                   :title="item.title"
                   :href="item.router">
          </subMenu>
        </navItem>

        <!--<li class="heading">
          <h3 class="uppercase">Features</h3>
        </li>
        <li class="nav-item active open">
          <a href="javascript:;" class="nav-link nav-toggle">
            <i class="icon-diamond"></i>
            <span class="title">UI Features</span>
            <span class="selected"></span>
            <span class="arrow open"></span>
          </a>
          <ul class="sub-menu">
            <li class="nav-item  ">
              <a href="ui_tree.html" class="nav-link ">
                <span class="title">Tree View</span>
              </a>
            </li>
            <li class="nav-item  ">
              <a href="javascript:;" class="nav-link nav-toggle">
                <span class="title">Page Progress Bar</span>
                <span class="arrow"></span>
              </a>
              <ul class="sub-menu">
                <li class="nav-item ">
                  <a href="ui_page_progress_style_1.html" class="nav-link "> Flash </a>
                </li>
                <li class="nav-item ">
                  <a href="ui_page_progress_style_2.html" class="nav-link "> Big Counter </a>
                </li>
              </ul>
            </li>
            <li class="nav-item  ">
              <a href="ui_blockui.html" class="nav-link ">
                <span class="title">Block UI</span>
              </a>
            </li>
          </ul>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>

  //  import menugroup from '@/components/sidebar/MenuGroup'
  import navItem from '@/components/sidebar/NavItem'
  import subMenu from '@/components/sidebar/SubMenu'

  export default {
    name: 'sidebar',
//    components: {menugroup},
    components: {navItem, subMenu},
    data() {
      return {
        sidebar: [
          {
            title: '管理员控制台',
            icon: 'icon-home',
            category: 'admin',
            children: [
              {title: '系统控制台风格1', router: '/systemControl', icon: 'icon-grid'},
              {title: '系统控制台风格2', router: '/systemControlNew', icon: 'icon-grid'},
              {title: '项目列表', router: '/projectList', icon: 'icon-list'},
              {title: '项目详情风格1', router: '/admin/projectDetail', icon: 'icon-briefcase'},
              {title: '项目详情风格2', router: '/admin/projectDetailNew', icon: 'icon-briefcase'},
              {title: '认证信息', router: '/authInfo', icon: 'icon-user-following'},
              {title: '企业认证', router: '/checkInfo', icon: 'icon-people'},
              {title: 'button with icon', router: '/buttons', icon: 'icon-star'},
              {title: 'test', router: '/test', icon: 'icon-star'},
              {title: 'tab', router: '/tabdemo', icon: 'icon-star'}
            ]
          },
          {
            title: '系统设置',
            icon: 'icon-settings',
            category: 'settings',
            children: [
              {title: '系统日志', router: '/log', icon: 'icon-film'},
              {title: '设置内容', router: '/settings/setting', icon: 'icon-settings'}
            ]
          }
        ]
      }
    },
    methods: {
      handleOpen(index) {
        console.log(index + ' is opend')
      }
    }

  }

</script>

<style>

</style>
