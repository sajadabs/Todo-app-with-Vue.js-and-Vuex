<template>
    <div id="date" class="container">
        تاریخ امروز :
        <span>{{ new Date() | moment("jDD/jMM/jYYYY") }}</span>
        <line-icon
                icon="plus"
                :rotate="90"
                size="small"
                color="mediumseagreen"
                no-svg
        />
        <button class="btn btn-danger"></button>
    </div>
</template>