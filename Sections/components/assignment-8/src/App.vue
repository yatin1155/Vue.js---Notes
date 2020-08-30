<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="isSelected='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="isSelected='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="isSelected='appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                <component :is='isSelected'>
                    <h3>This is my my content</h3>
                </component>
                </keep-alive>

                <!-- <app-blue>
                    <h3>This is my my content</h3>
                </app-blue>
                <app-green></app-green>
                <app-red></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data(){
            return{
                isSelected:'appBlue'
            }
        },        
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
