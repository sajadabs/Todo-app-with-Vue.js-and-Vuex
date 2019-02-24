<template>
    <div id="date">
        <b-alert show variant="light" class="has-shadow text-right mt-3" >
            تاریخ امروز :
            <span>{{ new Date() | moment("jYYYY/jMM/jDD") }}</span>
            <line-icon
                    icon="calendar"
                    size="small"
                    color="#e56d54"
                    no-svg
            />
        </b-alert>
    </div>
</template>