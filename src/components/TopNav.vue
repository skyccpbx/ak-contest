<template>
    <v-app-bar app dark>
        <v-container class="d-flex align-center">
            <a @click="$router.push('/')"><v-img alt="Logo" class="shrink mr-2" contain src="../assets/images/top-logo.png" transition="scale-transition" width="101" /></a>
            <v-spacer></v-spacer>
            <v-menu class="top-menu" offset-y open-on-hover transition="scroll-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mr-10" text v-bind="attrs" v-on="on">
                        活動辦法
                    </v-btn>
                </template>
                <v-list class="top-bar-list">
                    <v-list-item router-link to="/illustration">
                        <span>同人二創比賽</span>
                    </v-list-item>
                    <v-list-item router-link to="/cosplay">
                        <span>COSPLAY選拔大賽</span>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn router-link to="/works" class="mr-10" text>
                作品票選
            </v-btn>
            <v-btn text>
                <a class="white--text text-decoration-none" href="https://ak.txwy.tw/" target="_blank">
                    回到官網
                </a>
            </v-btn>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
    name: 'TopNav',
}
</script>

<style lang="scss">
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background: #1c1c1c !important;
}
.v-toolbar__content {
    a,
    .v-btn {
        color: #fff;
        font-size: 20px !important;
        font-weight: 400;
    }
    .v-btn:hover {
        border-bottom: 2px solid #0050f2;
    }
}
.top-bar-list {
    margin-top: 5px;
}
.v-list a span {
    text-align: center;
    width: 100%;
    padding: 15px 8px;
    font-size: 17px;
}
.top-bar-list .v-list-item--link:before {
    background: #0050f2 !important;
    border-bottom: 2px solid #fff;
}
.top-bar-list .v-list-item--active,
.top-bar-list .v-list-item:hover {
    color: #fff;
    background: #0050f2 !important;
    opacity: 1;
}
</style>
