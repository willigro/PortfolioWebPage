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
            <br>Register glucose fees, insulin applications, meals, favorite meals, weight historic.
            <br>Insulin to application calculator, carboohydrates calculator and suggestions based in the actual glucose fee.
            <br>Can be used to notify when the insulin action is started or finish (standard hours).
            <br>The registers generate a historic of the fees, insulins and meals.",
            "Java, Kotlin, Async Task, SQLite, JUnit, MVP, MVVM (refactoring), ViewModel (refactoring), WorkManager, AndroidX, Material Design",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            "https://play.google.com/store/apps/details?id=com.rgames.diariodadiabetes"
        );

        $order = new AndroidApplication(
            "Pedidos",
            "Control small business
            <br>Perfect to small business that have few services or products, like restaurants, bars, small stores.
            <br>Register the cashier, create orders, fast pay, parceled pay or pay with change.
            <br>Register items, services, investiments, exists, and know how much you gain, and how much you spend with investiments or exists.",
            "Java, Async Task, SQLite, JUnit, MVP, AndroidX, Material Design",
            IMAGE_ROOT . "my_pocket_test_shot_1.png",
            array(
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png",
                IMAGE_ROOT . "my_pocket_test_shot_1.png"
            ),
            "https://play.google.com/store/apps/details?id=com.rgames.appvendabar"
        );

        $myPocket = new AndroidApplication(
            "Meu Bolso",
            "Simple register of the cash flows
            <br>Register expense or earning.
            <br>Register pattern flows to easily regiter of the current flows.",
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
            $myPocket,
            $order
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
            null,
            "https://github.com/willigro/Olimpo"
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
            null,
            "https://github.com/willigro/RobbieAndroidUtil"
        );

        return array(
            $olimpo,
            $robbie
        );
    }

    function getColaboratedAndroidApplications()
    {
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
