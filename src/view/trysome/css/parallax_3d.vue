<template>
    <div class="parallax-3d-wrapper">
        <h1>三维视差效果</h1>
        <div class="parallax-box">
            <img class="parallax-item section-one" src="http://hotdot.pro/img/mainPage/intro/4.png" alt="">
            <img class="parallax-item section-two" src="http://hotdot.pro/img/mainPage/intro/3.png" alt="">
            <img class="parallax-item section-three" src="http://hotdot.pro/img/mainPage/intro/2.png" alt="">
            <img class="parallax-item section-four" src="http://hotdot.pro/img/mainPage/intro/1.png" alt="">
        </div>
       <p style="color:aliceblue">说明：我自己不会切图，所以图片是从网上找的，侵删。来源：http://hotdot.pro/#</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.parallax-3d-wrapper{
    height: calc(100% - 50px);
    width: 100%;
}
.parallax-3d-wrapper h1{
    color: aliceblue;
}
.parallax-box{
    perspective: 1px;
    transform-style: preserve-3d;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 80%;
    position: relative;
    float: left;
    width: 1920px;
}
.parallax-item{
    display: inline;
    position: absolute;
    left: 0px;
    height: 350%;
}
.parallax-item img{
    display: inline;
}
.section-one {
    transform: translateZ(-1px);
}
.section-two {
    transform: translateZ(-2px);
}
.section-three {
    transform: translateZ(-3px);
}
.section-four {
    transform: translateZ(-4px);
}
</style>
