<template>
  <div class="page-sidebar-wrapper">
    <div class="page-sidebar navbar-collapse collapse">
      <ul class="page-sidebar-menu  page-header-fixed" data-keep-expanded="false" data-auto-scroll="true"
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
                 ref="nav"
                 :class="{active: $route.path.indexOf(cate.category) > -1}">

          <subMenu v-for="(item,j) in cate.children"
                   :key="item.router"
                   :title="item.title"
                   :href="item.router"
                   :active="{active :$route.path == item.router}">
          </subMenu>
        </navItem>
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
            title: 'UI Features',
            icon: 'icon-diamond',
            category: 'ui',
            children: [
              {title: 'General', router: '/ui/general', icon: 'icon-grid'},
              {title: 'Buttons', router: '/ui/buttons', icon: 'icon-grid'},
            ]
          },
          {
            title: 'Component',
            icon: 'icon-puzzle',
            category: 'component',
            children: [
              {title: 'DatePicker', router: '/component/datepicker', icon: 'icon-film'},
            ]
          }
        ]
      }
    },
    methods: {
      handleOpen(index) {
        this.$refs.nav.forEach(function (item, i) {
          item.isOpen = index === i
        })
      }
    },
    mounted(){
      this.sidebar.forEach((menu, i) => {
        if (this.$route.path.indexOf(menu.category) > -1) {
          this.handleOpen(i)
        }
      })
    }

  }

</script>

<style>

</style>
