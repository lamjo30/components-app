<script setup>
    import Header from '~~/components/Header.vue';
    import Form from '~~/components/Form.vue';
    import Tables from '~~/components/Tables.vue';
    import TablesFilter from '~~/components/TablesFilter.vue';
    import HeadResumen from '~~/components/HeadResumen.vue';
    import Modal from '~~/components/Modal.vue';
    import Card from '~~/components/Card.vue';
    import Detalle from '~~/components/Detalle.vue';
    import Login from '~~/components/Login.vue';
</script>
<template>
    <!-- Header-Start -->
        <Header/>
    <!-- Header-End -->

    <!-- Dashboard-Start -->
        <Form/>
    <!-- Dashboard-End -->

    <!-- Tables-Filter Start -->
        <TablesFilter/>
    <!-- Tables-Filter End -->

    <!--Modal Start -->
        <Modal/>
    <!--Modal End -->

    <!--Head Resumen Start -->
        <HeadResumen/>
    <!--Head Resumen End -->

    <!-- Card Start -->
        <Card/>
    <!-- Card End -->

    <!-- Detalle Start-->
        <Detalle/>
    <!-- Detalle End-->

    <!-- Login Start -->
        <Login/>
    <!-- Login End -->

    <!-- Footer-Start -->
    <!-- Footer-end -->

</template>