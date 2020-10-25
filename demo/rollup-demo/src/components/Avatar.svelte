<style>
.avatar {
    position: relative;
    width: 30px;
    height: 30px;
    background: #ddd;
    border-radius: 50%;
    overflow: hidden;
}
.avatar:before {
    position: absolute;
    content:'';
    top: 4px;
    left: 7px;
    width: 16px;
    height: 16px;
    background: #999;
    border-radius: 50%;
}
.avatar:after {
    position: absolute;
    content:'';
    top: 19px;
    left: -5px;
    width: 40px;
    height: 40px;
    background: #999;
    border-radius: 50%;
}
</style>

<div class="avatar" />