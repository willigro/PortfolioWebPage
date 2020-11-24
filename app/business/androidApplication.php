<?php
include "./app/consts.php";
include "./app/data/androidApplication.php";

class AndroidApplicationBusiness
{

    function getOwnAndroidApplications()
    {
        $diabetesDaily = new AndroidApplication(
            "Diário da Diabetes",
            "To control the register from the diabetes. Designed from a Diabestes types 1 carrier to Diabetes type 1 carriers, type 
            2 and people responsable from carries
            <br>Register expense or earning
            <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            "https://play.google.com/store/apps/details?id=com.rgames.meusgastos"
        );

        $order = new AndroidApplication(
            "Pedidos",
            "Simple register of the cash flows
            <br>Register expense or earning
            <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            "https://play.google.com/store/apps/details?id=com.rgames.meusgastos"
        );

        $myPocket = new AndroidApplication(
            "Meu Bolso",
            "Simple register of the cash flows
        <br>Register expense or earning
        <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            "https://play.google.com/store/apps/details?id=com.rgames.meusgastos"
        );

        return array(
            $diabetesDaily,
            $order,
            $myPocket
        );
    }

    function getAndroidLibsApplications()
    {
        $olimpo = new AndroidApplication(
            "Olimpo",
            "Simple register of the cash flows
            <br>Register expense or earning
            <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            null
        );

        $robbie  = new AndroidApplication(
            "Robbie",
            "Simple register of the cash flows
            <br>Register expense or earning
            <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            null
        );

        return array(
            $olimpo,
            $robbie
        );
    }

    function getColaboratedAndroidApplications(){
        $roadcard = new AndroidApplication(
            "Roadcard",
            "Simple register of the cash flows
            <br>Register expense or earning
            <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            null
        );

        $neoEnergia  = new AndroidApplication(
            "NeoEnergia",
            "Simple register of the cash flows
            <br>Register expense or earning
            <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            null
        );

        return array(
            $roadcard,
            $neoEnergia
        );
    }
}
