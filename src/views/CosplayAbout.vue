<template>
    <div class="conta">
        <TopNavM class="top-navm" />
        <v-main class="about-container">
            <header class="top-banner">
                <img src="../assets/images/top-banner.jpg" />
            </header>
            <v-container class="mt-5 mm-6">
                <v-row class="flex-column" justify="center">
                    <h1><img src="../assets/images/title-01.png" /></h1>
                    <p>歡迎投稿《明日方舟》當前繁中版版本中登場角色的COSPLAY作品</p>
                    <h1><img src="../assets/images/title-02.png" /></h1>
                    <p>
                        1.投稿日期：即日起至 2020/12/17。
                        <br />
                        2.評審評選與人氣投票：2020/12/25-2021/1/10。
                        <br />
                        公布得獎作品：於2021台北國際電玩展期間(2021/1/28-2021/1/31)與《明日方舟》粉絲專頁、活動網站公佈獲獎名單。
                        <br />
                        <span>
                            ※本活動中所提及的一切時間基礎為(GMT+8 )
                        </span>
                    </p>
                    <h1>
                        <v-img src="../assets/images/title-03.png" max-width="328px" width="60vw" contain transition="scale-transition" />
                    </h1>
                    <p class="my-7 mt-0 transition-swing text-body-1">
                        <img class="jlzu-pc" src="../assets/images/jlzu.png" />
                        <img class="jlzu-m" src="../assets/images/jlzum.png" />
                    </p>
                    <h1 class="mt-6"><img src="../assets/images/title-04.png" /></h1>
                    <p class="transition-swing text-body-1">
                        ※請各位參賽者
                        <span>務必</span>
                        先完成步驟１的分享後再寄信，兩個參與步驟都完成，並收到主辦方的確認回信後即算完成報名。
                    </p>
                    <h1><img src="../assets/images/title-0401.png" /></h1>
                    <p class="transition-swing text-h6">
                        於參賽者本人Facebook帳號(或管理之粉絲團)動態
                        <span>「公開」</span>
                        發佈作品，貼文須包含參賽者名稱或暱稱加上指定HashTag
                        <br />
                        <span>「#明日方舟_同人二創作戰企劃」</span>
                    </p>
                    <h1><img src="../assets/images/title-0402.png" /></h1>
                    <p class="transition-swing text-h6">
                        請於2020/12/17 23:59前（電子郵件送達時間為憑）將參賽作品以附件的形式夾帶於郵件中，Email至明日方舟活動專用收件信箱：
                        <br />
                        <span><a href="mailto:arknightstw@gmail.com">ArknightsTW@gmail.com</a></span>
                    </p>
                    <p>
                        ※請確保您所來信的郵件信箱可正常收信，若因玩家個人因素導致確認信件無法正常送達，其影響由參賽者自行承擔。
                        <br />
                        ※來信主旨請統一複製以下格式，並將參賽者名稱修改為參賽者資料。
                    </p>
                    <p class="transition-swing text-h6">
                        標題主旨：
                        <span>「《明日方舟》同人二創作戰企劃〔COSPLAY〕參賽者名稱」</span>
                        <br />
                        範例：《明日方舟》同人二創作戰企劃〔COSPLAY〕－陳SIR
                    </p>
                    <p>
                        郵件內除需
                        <span>「以附檔形式夾帶參賽作品」</span>
                        外，信件內文須包含以下：
                        <v-btn class="copybtn" color="#2196F3" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">
                            <v-icon dark left>mdi-clipboard-multiple-outline</v-icon>
                            (複製內文文字)
                        </v-btn>
                        <br />
                        <input class="copy-input" type="text" v-model="message" />
                        <br />
                        <v-snackbar v-model="snackbar" :timeout="timeout" :multi-line="multiLine">
                            {{ text }}

                            <template v-slot:action="{ attrs }">
                                <v-btn color="#03A9F4關閉" text v-bind="attrs" @click="snackbar = false">
                                    關閉
                                </v-btn>
                            </template>
                        </v-snackbar>
                        ● 參賽者名稱或暱稱
                        <br />
                        ● 作品於Facebook個人動態(或管理之粉絲團)公開分享的貼文連結
                        <br />
                        ● Coser名稱
                        <br />
                        ● 攝影名稱
                        <br />
                        ● 後製名稱
                        <br />
                        ● 其他補充
                        <br />
                        ※寄出的投稿作品將由官方人員進行初步繳件審查，不符合指定步驟參賽稿件將退回，確認完成以上兩步驟並且符合報名資格的作品，將於寄出投稿郵件後約5個工作天內，收到官方人員確認的回信通知，即視為完成報名程序。
                    </p>
                    <h1><img src="../assets/images/title-05.png" /></h1>
                    <p>
                        基於《明日方舟》當前繁中版版本中已登場角色進行同人創作，風格、內容、主題不限，必要時建議參賽者（於郵件中）註明角色名稱。
                        <br />
                        <span>參賽者可自行設計角色的造型，唯評選時，若角色造型為《明日方舟》繁中版本當前既有內容者，將可獲得「致敬原作」特別分。</span>
                    </p>
                    <p>
                        每件作品同一角色須提供至少3張（最多6張）cos參賽照片
                        <br />
                        <span>
                            尺寸：最少1024 X 768像素(PX) /長寬比例不拘
                            <br />
                            解析度：72dpi
                            <br />
                            檔案格式：JPEG/PNG
                        </span>
                        <br />
                        （競賽結果發佈之前，請參賽者務必自行保留解析度為300dpi之圖像原檔，主辦單位將於作品入圍時通知繳件，以利頒獎流程進行。）
                    </p>
                    <p>
                        ※為保障個人權益並尊重被拍攝者，建議攝影師投稿參賽需先徵求被拍攝者同意 。
                        <br />
                        ※以多人、團隊形式參賽需徵求合照者同意，並由一人代表投稿參賽，不得重複投稿，獎勵亦只能領一份。
                        <br />
                        ※每位參賽者COS的每個遊戲角色視為一個參賽作品，若同一角色不同背景亦視為同組照片不得重複投稿；不同遊戲角色請分開投稿參賽。
                        <br />
                        ※若單一參賽作品投稿時繳交張數＞６張，將隨機取６張上傳於票選頁面，不受理更換照片申請；每個稿件投稿時可選定一張作為主要畫面，並請於檔名及信件內文中註記。
                        <br />
                        ※本活動皆建議使用真實素材與道具，所有加工合成的素材不可侵犯任何第三者權益，或將失去參賽資格。
                    </p>
                    <h1 class="mt-7"><img src="../assets/images/title-06.png" /></h1>
                    <p>
                        官方收到作品後將依據以下指標（詳見下方說明）進行初選，
                        <br />
                        <span>初選評級為總投稿量之前1/3的作品</span>
                        將於投票活動期間（2020/12/25-2021/1/10）
                        <span>展示於「cosplay-競賽組」</span>
                        作品票選頁面。
                        <br />
                        後續將從中評選出前三名開放玩家們進行投票，並將參考投票結果選出最佳人氣獎。
                        <br />
                        競賽組以外的其餘投稿作品將會同步展示於「綜合同好組」，並從中抽選參賽獎得主。
                        <br />
                        <br />
                        <span class="transition-swing text-h6">[Cosplay]初選評級標準如下：</span>
                        <br />
                        角色造型(包含道具)：30點
                        <br />
                        角色傳神度：20點
                        <br />
                        場景主題：30點
                        <br />
                        情境創意：20點
                        <br />
                        致敬原作：10點
                        <br />
                        <br />

                        <span class="transition-swing text-h6">[Cosplay]競賽評選標準如下：</span>
                        <br />
                        初審結果：50%
                        <br />
                        致敬原作：10％
                        <br />
                        人氣票選：40%
                        <br />
                        <br />
                        （投票數據統計截止時間至2021/1/10 23:59止，具體時間以官方公告統計時間為準）
                        <br />
                        ※本活動中所提及的一切時間基礎為(GMT+8 ) 。
                        <br />
                        <span>凡參與投票並完成指定任務者將有機會參與「遊戲周邊銅賞」抽獎活動，詳情將於投票活動開跑時公告。</span>
                    </p>
                    <h1 class="mt-7"><img src="../assets/images/title-07.png" /></h1>
                    <p>
                        1.參賽作品須以《明日方舟》手遊中的世界觀等設定作為靈感，其主題、風格不限，但不應違背或跨越《明日方舟》世界觀；
                        <br />
                        作品上不得含有其他商業行為(包含廣告logo、 贊助商)。
                        <br />
                        2.參賽作品必須為
                        <span>原創作品，不得盜用、剽竊他人作品或頂替冒充他人參賽。</span>
                        <br />
                        3.參賽作品必須
                        <span>未經出售、出版或參與任何其他同性質比賽，</span>
                        及不會侵犯任何第三者權益（包括知識產權、保密權或私隱權）經查證違反以上規定屬實將取消參賽資格。
                        <br />
                        4.參賽作品
                        <span>不應帶有引戰、族群糾紛或限制級素材</span>
                        （宣揚色情、暴力、血腥等不良或敏感內容）。
                        <br />
                        5、每位參賽者
                        <span>投稿件數不限，</span>
                        同類別內之所有評選擇優領取，
                        <span>不得重複獲獎。</span>

                        <br />
                        6.參賽作品經投稿後，等同於同意授權主辦方將參賽作品進行線上線下傳播的權利，主辦方將不排除在活動相關專題，如官網、粉絲團主頁等官方平台展出。得獎作品版權歸參賽者（繪師／Coser/Cosplay)團隊與《明日方舟》手遊官方共同所有，或將被使用於《明日方舟》相關印刷品、贈品等製作物。
                        <br />
                        7.獲獎者有機會收到主辦方聯繫其他《明日方舟》相關工作委託。
                        <br />
                        8.參賽作品若
                        <span>涉及侵權等問題則由參賽者全權負責，</span>
                        與主辦方無關；若領獎後經查違反上述規定，除取消參賽資格之外，所發出之獎項予以追回。
                    </p>
                    <h1><img src="../assets/images/title-08.png" /></h1>
                    <p class="transition-swing text-body-1 mb-15">
                        1.凡報名參加比賽者，推定已充分瞭解本活動規則中各條款，並願意遵守各條款所述之各項規定。
                        <br />
                        2.報名截止後恕不接受參賽作品退件與修改。
                        <br />
                        3.主辦單位將對所有投稿作品進行初步審查後回覆報名結果，並於截稿後統一進行評級。其後，報名成功之作品皆將於評選期間，同步公開在本活動網站。
                        <br />
                        4.若作品未能滿足該獎項的評審標準，獲獎者有可能從缺。
                        <br />
                        5.參賽作品使用非本人作品或其他違反相關法律或政策規定的，經舉報後查證屬實者，將會立即喪失參賽資格。
                        <br />
                        6.如對本活動有相關疑問可私訊粉絲團聯繫小編，如需舉報請附帶截圖或其他證據。
                        <br />
                        7.所有獎項之給付，將依據相關所得稅法規定，扣繳相關所得稅額。
                        <br />
                        8.獎金為新台幣，如得獎者非台灣境內居民，將以當時的匯率換算獎金金額。
                        <br />
                        9.參賽者如未滿十八歲，須獲家長或監護人同意下參與比賽，並遵從主辦單位的比賽規則。
                        <br />
                        10.如有違反本活動注意事項及規範之行為，經查證屬實，主辦單位得取消其參賽或得獎資格，並對任何破壞本活動之行為保留相關權利。
                        <br />
                        11.主辦單位龍成網路保留本活動修正與更動之權利，本活動未盡之事宜，請依最新公告為準。
                    </p>
                    <ShareBtn />
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import TopNavM from '@/components/TopNavM'
import ShareBtn from '@/components/ShareBtn'

export default {
    name: 'CosplayAbout',
    components: {
        TopNavM,
        ShareBtn,
    },
    data: () => ({
        multiLine: true,
        snackbar: false,
        text: '內文複製成功！',
        timeout: 3000,
        message: '參賽者名稱或暱稱 ● 作品於Facebook個人動態(或管理之粉絲團)公開分享的貼文連結 ● Coser名稱 ● 攝影名稱 ● 後製名稱 ● 其他補充',
    }),
    methods: {
        onCopy(e) {
            this.snackbar = true
        },
        onError(e) {
            ;(this.snackbar = true), (this.text = '內文複製失败，請手動復制！')
        },
    },
}
</script>

<style lang="scss">
.about-container {
    position: relative;
    .top-banner img {
        width: 100%;
    }
    .copy-input {
        height: 0;
    }
    .mm-6 {
        margin-top: 75px !important;
    }
    .jlzu-m {
        display: none;
    }
    p {
        font-size: 17px;
        margin-left: 42px;
        span {
            color: #00deff;
        }
    }
    .v-speed-dial {
        padding: 4px;
        border-radius: 50%;
        background: #fff;
        z-index: 10;
    }
    .copybtn span {
        color: #fff !important;
        font-size: 16px;
    }
}
@media (max-width: 750px) {
    .about-container {
        h1 img {
            zoom: 72%;
        }
        .row {
            margin: 0;
        }
        p {
            font-size: 12px;
            margin-left: 2px;
            letter-spacing: 0em !important;
            span {
                color: #00deff;
            }
        }
        .text-body-1 {
            font-size: 12px !important;
            font-weight: 400;
            line-height: 1.2rem;
            letter-spacing: 0em !important;
            font-family: 'Roboto', sans-serif !important;
        }
        .text-h6 {
            font-size: 13px !important;
            font-weight: 500;
            line-height: 1.3rem;
            letter-spacing: 0em !important;
            font-family: 'Roboto', sans-serif !important;
        }
        .jlzu-pc {
            display: none;
        }
        .jlzu-m {
            display: block;
        }
        .copybtn span {
            color: #fff !important;
            font-size: 12px;
        }
        .v-btn:not(.v-btn--round).v-size--default {
            height: 28px;
            min-width: 64px;
            padding: 0 16px;
            margin-top: 5px;
        }
        .v-snack--multi-line .v-snack__wrapper {
            min-height: 48px;
        }
    }
}
</style>
