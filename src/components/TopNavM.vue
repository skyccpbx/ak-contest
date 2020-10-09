<template>
    <v-container class="align-center">
        <a @click="$router.back(-1)" class="ff-btn">❮ 返回</a>
        <v-menu offset-y transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
                <a class="top-m" v-bind="attrs" v-on="on"><img src="../assets/images/m-menu.png" /></a>
            </template>
            <v-list class="top-bar-list menu-mlist">
                <v-list-item router-link to="/illustration">
                    <span>同人二創比賽</span>
                </v-list-item>
                <v-list-item router-link to="/cosplay">
                    <span>COSPLAY選拔大賽</span>
                </v-list-item>
                <v-list-item router-link to="/works">
                    <span>作品票選</span>
                </v-list-item>
                <v-list-item href="https://ak.txwy.tw/" target="_blank">
                    <span>回到官網</span>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-container>
</template>

<script>
export default {
    name: 'TopNavM',
    data: () => ({
        drawer: null,
    }),
}
</script>

<style lang="scss">
.top-navm {
    background: #1a1b1b;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    display: none;
}
.top-m {
    position: absolute;
    right: 1%;
    z-index: 100;
    background: none;
    max-width: 52px;
    top: 8%;
}

.menu-mlist {
    border: 1px solid #fff !important;
    box-shadow: 0 !important;
}
.ff-btn {
    position: relative;
    z-index: 10;
    font-size: 22px;
    color: #ffffff !important;
    top: 16px;
    left: 20px;
    text-decoration: none;
    display: none;
}
@media (max-width: 750px) {
    .top-navm {
        display: block;
    }
    .v-sheet.v-list {
        border-radius: 0;
        padding: 0;
    }
    .ff-btn {
        display: inline-block;
    }
    .v-list-item--link {
        border: 1px solid #fff;
        width: 220px;
    }
}
</style>
