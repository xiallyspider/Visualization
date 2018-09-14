<template>
    <div class="table-to-chart-wrapper">
        <el-card>
            <div class="top-chart">
                <div class="chart-content"></div>
                <div class="toolbox-content"></div>
            </div>
            <div class="bottom-table">
                <div class="table-content"></div>
            </div>
        </el-card>
    </div>
</template>

<script>
</script>

<style scoped>
.table-to-chart-wrapper {
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    padding: 20px;
}
.el-card {
    background-color: #f7f7f7;
}
.el-card__body {
    padding: 0px;
    height: 100%;
}
.top-chart {
    height: 50%;
    width: 100%
}
.bottom-table {
    height: calc(50% - 2px);
    width: 100%
}
.table-content {
    height: 100%;
    width: 100%;
    padding: 10px;
}
</style>
