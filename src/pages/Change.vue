<template>
  <div>
    施工中
    <ul>
    <li :class="{active:scrollPos == 0}">
        <a @click="$scrollTo(0)">Menu 1</a>
    </li>
    <li :class="{active:scrollPos == 1}">
        <a @click="$scrollTo(1)">Menu 2</a>
    </li>
</ul>

<div v-scroll-spy="scrollPos">
    <div>
        <h1>Header 1</h1>
        <p>Content
        cwpnwoincoinepc
        cwcwecnwecw
        wecnweocinwepcnpwwc
        wcpnwpcnpwenic
        wcpwnpiwencp
        wepcpknwpecnwp
        cwencpwicnpwienc
        wpcnwpcinwepc
        cwpicnwepcw9gc8wy
        odcugowucboihcpiwjcg
        woeghoghvwgw[cw
        weoge8f0we0g</p>
        <p>Content
        cwpnwoincoinepc
        cwcwecnwecw
        wecnweocinwepcnpwwc
        wcpnwpcnpwenic
        wcpwnpiwencp
        wepcpknwpecnwp
        cwencpwicnpwienc
        wpcnwpcinwepc
        cwpicnwepcw9gc8wy
        odcugowucboihcpiwjcg
        woeghoghvwgw[cw
        weoge8f0we0g</p>
        <p>Content
        cwpnwoincoinepc
        cwcwecnwecw
        wecnweocinwepcnpwwc
        wcpnwpcnpwenic
        wcpwnpiwencp
        wepcpknwpecnwp
        cwencpwicnpwienc
        wpcnwpcinwepc
        cwpicnwepcw9gc8wy
        odcugowucboihcpiwjcg
        woeghoghvwgw[cw
        weoge8f0we0g</p>
        <p>Content
        cwpnwoincoinepc
        cwcwecnwecw
        wecnweocinwepcnpwwc
        wcpnwpcnpwenic
        wcpwnpiwencp
        wepcpknwpecnwp
        cwencpwicnpwienc
        wpcnwpcinwepc
        cwpicnwepcw9gc8wy
        odcugowucboihcpiwjcg
        woeghoghvwgw[cw
        weoge8f0we0g</p>
        <p>Content
        cwpnwoincoinepc
        cwcwecnwecw
        wecnweocinwepcnpwwc
        wcpnwpcnpwenic
        wcpwnpiwencp
        wepcpknwpecnwp
        cwencpwicnpwienc
        wpcnwpcinwepc
        cwpicnwepcw9gc8wy
        odcugowucboihcpiwjcg
        woeghoghvwgw[cw
        weoge8f0we0g</p>
        <p>Content
        cwpnwoincoinepc
        cwcwecnwecw
        wecnweocinwepcnpwwc
        wcpnwpcnpwenic
        wcpwnpiwencp
        wepcpknwpecnwp
        cwencpwicnpwienc
        wpcnwpcinwepc
        cwpicnwepcw9gc8wy
        odcugowucboihcpiwjcg
        woeghoghvwgw[cw
        weoge8f0we0g</p>
    </div>
    <div>
        <h1>Header 2</h1>
        <p>Content
        cwpnwoincoinepc
        cwcwecnwecw
        wecnweocinwepcnpwwc
        wcpnwpcnpwenic
        wcpwnpiwencp
        wepcpknwpecnwp
        cwencpwicnpwienc
        wpcnwpcinwepc
        cwpicnwepcw9gc8wy
        odcugowucboihcpiwjcg
        woeghoghvwgw[cw
        weoge8f0we0g</p>

    </div>
</div>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '@/components/Footer';

export default {
  name: 'change',
  components: {
    Foot,
  },
  extends: {
    data() {
      return {
        scrollPos: 0,
      };
    },
  },
};
</script>

<style lang="sass" scoped>
p
  width: 300px
</style>
