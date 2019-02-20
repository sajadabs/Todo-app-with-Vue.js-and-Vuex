<template>
    <div id="date" class="container">
        <span>{{ new Date() | moment("jDD/jMM/jYYYY") }}</span>
        <i class="la la-user"></i>
        <button class="btn btn-danger"></button>
    </div>
</template>