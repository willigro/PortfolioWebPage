<?php
include "./app/consts.php";
include "./app/data/androidApplication.php";

class AndroidApplicationBusiness
{

    private $imageRoot = IMAGE_ROOT . "androidtemp/";

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
            $this->imageRoot . "d_d_test_shot_1.png",
            array(
                $this->imageRoot . "d_d_test_shot_2.png",
                $this->imageRoot . "d_d_test_shot_3.png",
                $this->imageRoot . "d_d_test_shot_4.png",
                $this->imageRoot . "d_d_test_shot_5.png"
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
            $this->imageRoot . "pedidos_test_shot_1.png",
            array(
                $this->imageRoot . "pedidos_test_shot_2.png",
                $this->imageRoot . "pedidos_test_shot_3.png"
            ),
            "https://play.google.com/store/apps/details?id=com.rgames.appvendabar"
        );

        $myPocket = new AndroidApplication(
            "Meu Bolso",
            "Simple register of the cash flows
            <br>Register expense or earning.
            <br>Register pattern flows to easily regiter of the current flows.",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            $this->imageRoot . "my_pocket_test_shot_1.png",
            array(
                $this->imageRoot . "my_pocket_test_shot_2.png",
                $this->imageRoot . "my_pocket_test_shot_3.png",
                $this->imageRoot . "my_pocket_test_shot_4.png"
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
            "My first lib created
            <br>DateFormat, StringFormat, PriceFormat, Keyboard, Fragment nav, RecyclerView initialization and functions, 
            base to BottomSheet, base to PopUp, Spinner initialization, and Toolbar functions.
            <br>Created when I was learning about modularization and some utils.",
            "Java, Fragment, Recycler, Views.",
            null,
            null,
            null,
            "https://github.com/willigro/Olimpo"
        );

        $robbie  = new AndroidApplication(
            "Robbie",
            "My actual lib in building
            <br>Dynamic Progress using Dialog, control to progress by priority, Widget Utils, base to dynamic Dialogs with handler for string or HTML, 
            ScrollView resizable, WebView resizable, File Utils based in Blankj, crash util also based in Blankj (handle any crash, 
            as executing a function to 'send log to server'), simple Log Util",
            "Kotlin, AndroidX, Canvas, Views, File.",
            null,
            null,
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
            $this->imageRoot . "my_pocket_test_shot_1.png",
            array(
                $this->imageRoot . "my_pocket_test_shot_1.png",
                $this->imageRoot . "my_pocket_test_shot_1.png"
            ),
            "https://play.google.com/store/apps/details?id=br.com.mmcafe.roadcardapp"
        );

        $neoEnergia  = new AndroidApplication(
            "NeoEnergia",
            "Simple register of the cash flows
            <br>Register expense or earning
            <br>Register pattern flows to easily regiter of the current flows",
            "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
            $this->imageRoot . "my_pocket_test_shot_1.png",
            array(
                $this->imageRoot . "my_pocket_test_shot_1.png",
                $this->imageRoot . "my_pocket_test_shot_1.png"
            ),
            null,
            null,
            true
        );

        return array(
            $roadcard,
            $neoEnergia
        );
    }
}
