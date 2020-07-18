
DG.then(function() {
    var map,
        myIcon,
        myDivIcon;

    map = DG.map('map', {
        center: [46.46029948360797, 30.751671195030216],
        zoom: 17
    });
    DG.control.location({position: 'bottomright'},
    ).addTo(map);
    myIcon = DG.icon({
        iconUrl: 'img/logo-ics.png',
        iconSize: [30, 33]
    });
    DG.marker([46.45950878001669, 30.752054882083286], {
        icon: myIcon
    }).addTo(map);

    $('.loc').click(function(){
        map.locate({setView: true, watch: true})
        .on('locationfound', function(e) {
            DG.marker([e.latitude, e.longitude]).addTo(map);
        })
        .on('locationerror', function(e) {
            DG.popup()
            .setLatLng(map.getCenter())
            .setContent('Доступ к определению местоположения отключён')
            .openOn(map);
        });
    });

        DG.polygon(
            [[46.46068749051558, 30.750584900379184], [46.46066901405885, 30.750804841518406],
            [46.46059880346618, 30.750804841518406],[46.46058771757485, 30.750874578952793],
            [46.46063945171509, 30.750890672206882],[46.46060619405914, 30.751378834247593],
            [46.460661623474415, 30.751394927501682],[46.46064684230252, 30.751620233058933],
            [46.46021818657221, 30.751550495624546],[46.46023296786046, 30.751325190067295],
            [46.46045099139618, 30.751357376575474],[46.460495335059335, 30.750794112682346],
            [46.46024405382403, 30.750751197338108],[46.46023666318191, 30.750858485698704],
            [46.45992995064908, 30.750815570354465],[46.45993734133285, 30.7507136464119],
            [46.45980061352097, 30.75068682432175],[46.45975626929203, 30.751250088214878],
            [46.459966904057836, 30.751287639141086],[46.45995212269735, 30.751512944698337],
            [46.45950868001669, 30.75144320726395],[46.459523461497575, 30.7512179017067],
            [46.459504984645875, 30.75144320726395],[46.45951976612773, 30.7512179017067],
            [46.45959367347691, 30.75122863054276],[46.45964910392299, 30.750268399715427],
            [46.45980800422229, 30.750289857387546],[46.45979691816995, 30.75044542551041],
            [46.45995581803786, 30.75046688318253],[46.459963208718094, 30.750375688076023],
            [46.46026622574439, 30.75042396783829],[46.46026253042495, 30.750509798526767],
            [46.46068749051558, 30.750584900379184]    
            ],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Институт бизнеса, экономики и информационных технологий'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973595/30.750587%2C46.460091?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
            .bindLabel('Главный Корпус')
            .addTo(map);

        DG.polygon(
            [[46.45978213676331, 30.752006471157078], [46.45976735535264, 30.75219422578812],
            [46.45926848039008, 30.7521191239357],[46.45928326193616, 30.75192600488663],
            [46.45978213676331, 30.752006471157078],[46.459150227876954, 30.75192600488663],
            [46.45928326193616, 30.75192600488663],[46.45926848039008, 30.752113759517673],
            [46.4591391416907, 30.7521191239357],[46.45914653248179, 30.75192600488663]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Институт компьютерных систем'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973599/30.752048%2C46.459363?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
            .bindLabel('ИКС')
            .addTo(map);

        DG.polygon(
            [[46.44898694314906, 30.749613940715793], [46.44875626591051, 30.749748051166538],
            [46.44914217848762, 30.750997960567478],[46.449201315643066, 30.750992596149448],
            [46.44881692298492, 30.749764144420624],[46.44903868831106, 30.749613940715793],
            [46.44942677545926, 30.750842392444614],[46.449201315643066, 30.750992596149448],
            [46.44881692298492, 30.749764144420624],[46.44875626591051, 30.749748051166538],
            [46.44898694314906, 30.749613940715793],[46.44903868831106, 30.749613940715793],
            [46.44898694314906, 30.749613940715793]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Спортзал ОНПУ'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/directions/points/30.75065%2C46.460912%3B1970853118149554%7C30.75032%2C46.449104%3B1970960492145610?m=30.753234%2C46.45524%2F15.22">Открыть в 2ГИС</a>')
            .bindLabel('Спортзал ОНПУ')
            .addTo(map);
           
        DG.polygon(
            [[46.46087595001587, 30.750820934772495], [46.460942464977855, 30.750831663608555],
            [46.4609313791565, 30.751030147075657],[46.46109397097686, 30.751051604747776],
            [46.46110136150262, 30.75096040964127],[46.46150044840344, 30.751014053821567],
            [46.461507838874034, 30.750981867313385], [46.46160761012863, 30.750992596149448],
            [46.461615000584644, 30.750901401042942],[46.46164456239875, 30.75089603662491],
            [46.461648257624354, 30.750810205936432],[46.46119004773339, 30.75073510408402],
            [46.461193742989856, 30.75067073106766],[46.46087595001587, 30.750620934772495]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Административный корпус'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853118149554/30.750834%2C46.461281?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
            .bindLabel('Админ')
            .addTo(map);

        DG.polygon(
            [[46.461544791211864, 30.751529037952427], [46.461555876908314, 30.751335918903354],
            [46.461600219671574, 30.751335918903354],[46.461633476720344, 30.750901401042942],
            [46.46165934329974, 30.75090676546097],[46.4616778194204, 30.75067073106766],
            [46.46186258028192, 30.75070291757584],[46.46181823773234, 30.751373469829563],
            [46.46178867601255, 30.751373469829563],[46.461770199929525, 30.75156390666962]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Дворец Культуры студентов ОНПУ'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117964812/30.750952%2C46.461723?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
            .bindLabel('ДК-Политех')
            .addTo(map);

        DG.polygon(
            [[46.461079189922344, 30.751051604747776], [46.4610422372685, 30.751577317714695],
            [46.46080943497259, 30.751545131206516],[46.46086116890214, 30.750820934772495],
            [46.46093876970431, 30.750831663608555],[46.4609313791565, 30.751024782657627]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Кафе-столовая Bait-Almandi'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970934722330648/30.751604%2C46.459954?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
            .bindLabel('Bait-Almandi')
            .addTo(map);
                
        DG.polygon(
            [[46.46181454251824, 30.751743614673618], [46.46173694296429, 30.752795040607456],
            [46.46157804829448, 30.752773582935337],[46.461655648074874, 30.75171142816544]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Химико-технологический факультет'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973603/30.752288%2C46.461638?m=30.751843%2C46.460873%2F17.12">Открыть в 2ГИС</a>')
            .bindLabel('Корпус Х')
            .addTo(map);

        DG.polygon(
            [[46.461844104224, 30.752821862697605], [46.46182932337312, 30.753052532672886],
            [46.4610422372685, 30.75292378664017],[46.46105701833304, 30.75269848108292]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Институт энергетики и компьютерно-интегрированных систем управления'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973598/30.75292%2C46.461427?m=30.752236%2C46.459746%2F16.71">Открыть в 2ГИС</a>')
            .bindLabel('Корпус Т')
            .addTo(map);
        
        DG.polygon(
            [[46.46106440886381, 30.751807987689975], [46.46090551223121, 30.751781165599827],
            [46.46082052081878, 30.752891600131992],[46.460983112970204, 30.75291842222214]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Институт радиоэлектроники и телекомуникаций'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973602/30.752328%2C46.46089?m=30.752236%2C46.459746%2F16.71">Открыть в 2ГИС</a>')
            .bindLabel('Радиокорпус')
            .addTo(map);
        
        DG.polygon(
            [[46.461581743524604, 30.752129852771763], [46.461448715081346, 30.752108395099643],
            [46.461452410320256, 30.752070844173435], [46.461130923595576, 30.752017199993137],
            [46.46112722833483, 30.752060115337375], [46.46105332306728, 30.752049386501316],
            [46.461045932535015, 30.752113759517673], [46.461164180931, 30.752135217189792],
            [46.46114939989554, 30.752365887165073], [46.461382200737816, 30.752398073673252],
            [46.46140437219468, 30.75216740369797],[46.46157435306409, 30.75218886137009]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Корпус В'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492176776/30.752202%2C46.461263?m=30.752242%2C46.459675%2F17.11">Открыть в 2ГИС</a>')
            .bindLabel('Корпус В')
            .addTo(map);

        DG.polygon(
            [[46.459394123403875, 30.750322043895725], [46.459375646508256, 30.750590264797214],
            [46.45873634205858, 30.750493705272678], [46.45875481917114, 30.75022011995316],
            [46.45882133672441, 30.75023084878922], [46.45882133672441, 30.750268399715427],
            [46.45892850372266, 30.750284492969513], [46.45893589454235, 30.750246942043308],
            [46.45921674494719, 30.750295221805576], [46.45921674494719, 30.750332772731785],
            [46.459323911167196, 30.750343501567844],[46.459327606550325, 30.750311315059665]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Институт электромеханики и Энергоменеджемента'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973597/30.750404%2C46.458994?m=30.752242%2C46.459675%2F17.11">Открыть в 2ГИС</a>')
            .bindLabel('Корпус У')
            .addTo(map);
        
        DG.polygon(
            [[46.45926478500293, 30.751110613346103], [46.458813945889176, 30.751040875911716],
            [46.45883242297538, 30.750804841518406], [46.45927956655, 30.750874578952793],
            [46.45926478500293, 30.751110613346103], [46.459209354165615, 30.751105248928074],
            [46.459201963383045, 30.75116962194443], [46.45878438253817, 30.751105248928074],
            [46.458773296277414, 30.75119107961655], [46.45866982440147, 30.75118035078049],
            [46.45872156036403, 30.750493705272678],[46.45876221001439, 30.750499069690708], 
            [46.45876221001439, 30.750563442707065],[46.45881764130691, 30.750574171543125],
            [46.45878438253817, 30.751105248928074],[46.45878807795794, 30.751035511493686]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Кафедра физики'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158235/30.750921%2C46.458966?m=30.752242%2C46.459675%2F17.11">Открыть в 2ГИС</a>')
            .bindLabel('Кафедра физики')
            .addTo(map);

        DG.polygon(
            [[46.460443600782156, 30.752092301845554], [46.460399257076894, 30.75265020132065],
            [46.46041403831598, 30.75266093015671], [46.460399257076894, 30.752811133861545],
            [46.460059287469996, 30.752752125263218], [46.460074068801376, 30.752612650394443],
            [46.460059287469996, 30.752607285976413], [46.460099936121686, 30.752033293247226],
            [46.460059287469996, 30.752033293247226],[46.46000755277851, 30.752757489681247],
            [46.460059287469996, 30.752752125263218],[46.460074068801376, 30.752612650394443],
            [46.460059287469996, 30.752607285976413],[46.460099936121686, 30.752033293247226]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Корпус ТТЛ'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158187/30.752371%2C46.460225?m=30.752242%2C46.459675%2F17.11">Открыть в 2ГИС</a>')
            .bindLabel('Корпус ТТЛ')
            .addTo(map);
        
        DG.polygon(
            [[46.4586328701124, 30.751647055149082], [46.45865134726008, 30.751389563083652],
            [46.4590984923217, 30.75145930051804], [46.45910588311832, 30.751394927501682],
            [46.45921304955653, 30.75141102075577], [46.45918718181488, 30.751770436763763],
            [46.459076319925856, 30.751754343509678], [46.45908371072547, 30.75165778398514],
            [46.458747428326866, 30.751604139804844],[46.45873634205858, 30.75166314840317],
            [46.458595915798284, 30.75165241956711],[46.45861069752695, 30.751389563083652],
            [46.45865134726008, 30.751389563083652],[46.459061538323574, 30.75145393610001],
            [46.459065233724516, 30.751394927501682], [46.45910588311832, 30.751394927501682],
            [46.45921304955653, 30.75141102075577], [46.45918718181488, 30.751770436763763],
            [46.45904306131511, 30.751754343509678], [46.45904306131511, 30.75165241956711],
            [46.45875112374913, 30.751609504222873],[46.45874003748158, 30.75166314840317]],
            {color: 'rgb(0, 153, 255, 0.15)'})
            .bindPopup('Цех по обработке металла'+'<br>'+
            '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158243/30.751507%2C46.458884?m=30.752242%2C46.459675%2F17.11">Открыть в 2ГИС</a>')
            .bindLabel('Литейная кафедра')
            .addTo(map);

            DG.polygon(
                [[46.45812659382687, 30.752076208591465], [46.458012034306236, 30.752172768116],
                [46.4582300667351, 30.752741396427158], [46.45828180311548, 30.752741396427158],
                [46.458067466362444, 30.75217813253403], [46.45818202576643, 30.752081573009495],
                [46.45839636206855, 30.75265020132065], [46.45828180311548, 30.752741396427158],
                [46.458067466362444, 30.75217813253403], [46.45800833883383, 30.752172768116],
                [46.45818202576643, 30.752081573009495]],
                {color: 'rgb(0, 153, 255, 0.15)'})
                .bindPopup('ГУМ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158171/30.752404%2C46.458146?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .bindLabel('ГУМ')
                .addTo(map);

            $("#map").one('click', function(){
                var offer = confirm('На сайте используется карта с поиском объектов, относящихся к ОНПУ.'+
                "\n\Для поиска других адресов - воспользуйтесь приложением 2ГИС.\n\ \n\Для перехода в 2ГИС нажмите ОК");
                if(offer==true){
                    window.open('https://2gis.ua/odessa/geo/1970934722330648/30.751632%2C46.459956?m=30.752811%2C46.460176%2F16.78');
                }
                else{}
              });

            $('.icsloc').click(function(){
                DG.popup()
                .setLatLng([46.459538242974446, 30.752054750919346])
                .setContent('ИКС'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973599/30.752083%2C46.45937?m=30.752242%2C46.459675%2F17.11">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.459538242974446, 30.752054750919346]);                        
            });
            $('.guk').click(function(){
                DG.popup(   )
                .setLatLng([46.46012210810073, 30.750630497932438])
                .setContent('ГУК'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973595/30.750587%2C46.460091?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.46012210810073, 30.750630497932438]);
            });
            $('.admin').click(function(){
                DG.popup()
                .setLatLng([46.461252867059436, 30.75083434581757])
                .setContent('Админ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853118149554/30.750834%2C46.461281?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.461252867059436, 30.75083434581757]);
            });
            $('.radio').click(function(){
                DG.popup()
                .setLatLng([46.46093876970431, 30.752349793910984])
                .setContent('Радиокорпус'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973602/30.752371%2C46.460889?m=30.752202%2C46.4599%2F17.11">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.46093876970431, 30.752349793910984]);
            });
            $('.chem').click(function(){
                DG.popup()
                .setLatLng([46.46172216208435, 30.752253234386448])
                .setContent('Хим-Корпус'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973603/30.752222%2C46.461669?m=30.752202%2C46.4599%2F17.11">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.46172216208435, 30.752253234386448]);
            });
            $('.iee').click(function(){
                DG.popup()
                .setLatLng([46.459065233724516, 30.75041860342026])
                .setContent('ИЭЭ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973597/30.750394%2C46.459007?m=30.752202%2C46.4599%2F17.11">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.459065233724516, 30.75041860342026]);
            });
            $('.tcorp').click(function(){
                DG.popup()
                .setLatLng([46.461430238882954, 30.752886235713962])
                .setContent('Корпус Т'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117973598/30.752888%2C46.461389?m=30.752202%2C46.4599%2F17.11">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.461430238882954, 30.752886235713962]);
            });
            $('.libr').click(function(){
                DG.popup()
                .setLatLng([46.46043251485922, 30.75145930051804])
                .setContent('Библиотека ОНПУ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853118470284/30.751408%2C46.460444?m=30.752202%2C46.4599%2F17.11">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.46043251485922, 30.75145930051804]);
            });
            $('.gym').click(function(){
                DG.popup()
                .setLatLng([46.44912739418873, 30.750305950641636])
                .setContent('Спортзал ОНПУ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/directions/points/30.75065%2C46.460912%3B1970853118149554%7C30.75032%2C46.449104%3B1970960492145610?m=30.753234%2C46.45524%2F15.22">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.44912739418873, 30.750305950641636]);
            });
            $('.stadium').click(function(){
                DG.popup()
                .setLatLng([46.448521234478854, 30.75072973966599])
                .setContent('Стадион ОНПУ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/directions/points/%7C30.75073%2C46.44852%3B1970934722330648?m=30.795979%2C46.571479%2F14.59">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.448521234478854, 30.75072973966599]);
            });
            $('.phys').click(function(){
                DG.popup()
                .setLatLng([46.45901719349273, 30.75095504522324])
                .setContent('Кафедра физики'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158235/30.750903%2C46.458975?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.45901719349273, 30.75095504522324]);
            });
            $('.dk').click(function(){
                DG.popup()
                .setLatLng([46.46173324774467, 30.751110613346103])
                .setContent('ДК Политех'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853117964812/30.750992%2C46.461743?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.46173324774467, 30.751110613346103]);
            });
            $('.ttl').click(function(){
                DG.popup()
                .setLatLng([46.46025883510528, 30.752371251583103])
                .setContent('Корпус ТТЛ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158187/30.752394%2C46.460233?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.46025883510528, 30.752371251583103]);
            });
            $('.met').click(function(){
                DG.popup()
                .setLatLng([46.45892480831243, 30.751529037952427])
                .setContent('Литейная кафедра'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158243/30.751515%2C46.45888?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.45892480831243, 30.751529037952427]);
            });
            $('.gum').click(function(){
                DG.popup()
                .setLatLng([46.458237457649595, 30.75240343809128])
                .setContent('ГУМ'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158171/30.752404%2C46.458146?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.458237457649595, 30.75240343809128]);
            });
            $('.auto').click(function(){
                DG.popup()
                .setLatLng([46.45896545781107, 30.75248390436173])
                .setContent('Автокафедра'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492158190/30.752493%2C46.458934?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.45896545781107, 30.75248390436173]);
            });
            $('.bcorp').click(function(){
                DG.popup()
                .setLatLng([46.46127873381969, 30.752204954624176])
                .setContent('Корпус В'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/geo/1970960492176776/30.752177%2C46.461294?m=30.752147%2C46.459788%2F17.12">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.46127873381969, 30.752204954624176]);
            });
            $('.alma').click(function(){
                DG.popup()
                .setLatLng([46.460953550796944, 30.75122863054276])
                .setContent('Столовая'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/inside/1970960492158255/firm/1970853118470270/30.750948%2C46.460818?m=30.752023%2C46.459771%2F17.16">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.460953550796944, 30.75122863054276]);
            });
            $('.h4').click(function(){
                DG.popup()
                .setLatLng([46.446946666152776, 30.749318897724155])
                .setContent('Общежитие №4'+'<br>'+
                '<a target="_blank" class="pops" href="https://2gis.ua/odessa/firm/1970853118126153/30.749235%2C46.446889?m=30.749664%2C46.446584%2F17.91">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.446946666152776, 30.749318897724155]);
            });
            $('.h5').click(function(){
                DG.popup()
                .setLatLng([46.448048129530456, 30.74915796518326])
                .setContent('Общежитие №5'+'<br>'+
    '<a target="_blank" class="pops" href="https://2gis.ua/odessa/directions/points/%7C30.749117%2C46.447947%3B1970853118126154?m=30.756245%2C46.512094%2F11.97">Открыть в 2ГИС</a>')
                .openOn(map);
                map.setView([46.448048129530456, 30.74915796518326]);
            });
});