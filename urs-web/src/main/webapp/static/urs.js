/**
 * Created by xubiao on 2017/5/31.
 */
$( function() {
    
    
    $(".addFloor").button();
    $("#datepicker").datepicker();

    $(".addFloor").click(function(){
        newFloor = " \
            <div class = \"floor\"> \
                <span>Floor Name </span><input type = \"text\" class = \"text\" name = \"floorName\" class = \"floorName\"/> \
                <div class = \"roomList\"> \
                    <table class = \"room\"> \
                        <tr> \
                            <th>Room Name</th> \
                            <th>Valve Catalog #</th> \
                            <th>Operation</th> \
                        </tr> \
                    </table> \
                    <input type = \"button\" class = \"button addRoom\" value = \"Add New Room\"/> \
                </div> \
            </div>"
        $("#floorList").append(newFloor)
        $(".addRoom").button();
    })
    
    $("#floorList").on('click', '.addRoom',  function(){
            var newRoom = "<div class = \"roomDiv\">\
        <table>\
            <tr>\
                <td>\
                    <span>Valve Series <span class = \"star\">*</span></span>\
                </td>\
                <td>\
                    <div class = \"radioSet\">\
                        <label for=\"radio-1\">Celeris 2</label>\
                        <input type=\"radio\" name=\"radio-1\" id=\"radio-1\" class = \"valveSeries\">\
                        <label for=\"radio-2\">Traccel</label>\
                        <input type=\"radio\" name=\"radio-1\" id=\"radio-2\" class = \"valveSeries\">\
                        <label for=\"radio-3\">CAV</label>\
                        <input type=\"radio\" name=\"radio-1\" id=\"radio-3\" class = \"valveSeries\">\
                    </div>\
                </td>\
            </tr>\
            <tr>\
               <td>\
                   <span>Valve Tag. #</span>\
               </td>\
               <td>\
                   <input type = \"text\" class = \"text\"/>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Valve Type<span class = \"star\">*</span></span>\
                </td>\
                <td>\
                    <select name = \"valveType\" class = \"selectMenu\"> \
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Valve Coating</span>\
                </td>\
                <td>\
                    <select name = \"valveCoating\" class = \"valveCoating selectMenu\">\
                        <option selected=\"selected\">A</option>\
                        <option>B</option>\
                        <option>C</option>\
                        <option>D</option>\
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Design Airflow Range<span class = \"star\">*</span></span>\
                </td>\
                <td>\
                    <input type = \"text\" class = \"text\" style = \"width: 100px\"/> to <input type = \"text\" class = \"text\" style = \"width: 100px\"/> CMH\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Pressure Operating Range</span>\
                </td>\
                <td>\
                    <select name = \"optRange\" class = \"selectMenu\">\
                        <option>L</option>\
                        <option selected = \"selected\">M</option>\
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Control Type</span>\
                </td>\
                <td>\
                    <select name = \"optRange\" class = \"selectMenu\">\
                        <option>L</option>\
                        <option selected = \"selected\">M</option>\
                        <option>N</option>\
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Valve Controller Designation</span>\
                </td>\
                <td>\
                    <select name = \"optRange\" class = \"selectMenu\">\
                        <option>H</option>\
                        <option selected = \"selected\">E</option>\
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Installation Orientation</span>\
                </td>\
                <td>\
                    <select name = \"optRange\" class = \"selectMenu\">\
                        <option>U</option>\
                        <option>D</option>\
                        <option selected = \"selected\">H</option>\
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Fail-safe Position</span>\
                </td>\
                <td>\
                    <select name = \"optRange\" class = \"selectMenu\">\
                        <option>C</option>\
                        <option>O</option>\
                        <option>Z</option>\
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Options</span>\
                </td>\
                <td>\
                    <select name = \"optRange\" class = \"selectMenu\">\
                        <option>EVI 排风阀带保温隔离块和保温</option>\
                        <option>IBO 仅带保温隔离块，不带保温</option>\
                        <option>PSL 压力开关，低限（中压系统75Pa，低压系统50Pa）</option>\
                        <option>REI 远程电子线路，用于室内</option>\
                        <option>REO 远程电子线路，用于室外</option>\
                        <option>WRE 耐候性电子线路-用于室外，仅适用于电动阀</option>\
                        <option>SFB 单阀两端安装方形法兰</option>\
                        <option>SFX 排风单阀入口或送风单阀出口安装方形法兰</option>\
                    </select>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <span>Valve Catalog #</span>\
                </td>\
                <td>\
                    <span class = valveCatalog></span>\
                </td>\
            </tr>\
        </table>\
    </div>";
        $(this).prev().append("<tr><td>12</td><td></td><td><input value = \"Edit\" type = \"button\" class = \"editRoom\"/><input value = \"Delete\" type = \"button\" class = \"deleteRoom\"/>" + newRoom + "</td></tr>")
        $(".radioSet").buttonset();
        $(".selectMenu").selectmenu();

    });
    
    $("#floorList").on('click', '.deleteRoom', function(){
        var roomName = $(this).parent().prev().prev().text();
        var del = confirm("Delete Room: " + roomName + "?");
        if(del == true) {
            $(this).parent().parent().remove();
        }
    });
} );
