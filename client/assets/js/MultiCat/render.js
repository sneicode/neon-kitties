// Append each Cat card as a catalog entry


function appendCat(dna, generation, id, onclick) {
    //1 return DNA cat into readable string
    var NeonCatDna = catDna(dna)
    //2 build the catBox into HTML
    catBox(id, onclick)
    //3 Render the cats CSS style dpeending on DNA string
    renderCat(NeonCatDna, id)
    $('#catIdNumber' + id).html(`
        <div align="center">
            <span class="text-center badge badge-light">
            <h4 class="tsp-2 m-0"><b>ID: </b>`+ id +`</h4></span>
        </div>
        <br><br>
    `)
    $('#catDNA' + id).html(`
        <span class="badge badge-light mb-2">
        <h4 class="tsp-2 m-0"><b>GEN:</b>`+ generation +`</h4></span>
        <span class="badge badge-light mb-3">
        <h4 class="tsp-2 m-0"><b>DNA: </b>`+ dna +`</h4></span>
    `) 
}   

// Apply cat CSS Styles from buildCat.js
function renderCat(dna, id){
    headColor(dna.headColor, id)
    mouthColor(dna.mouthColor, id)
    eyeVariation(dna.eyesShape, id)
    pupilColor(dna.pupilColor, id)
    earsColor(dna.earsColor, id)
    decorationVariation(dna.decorationPattern, id)
    decorationColorMid(dna.decorationMidColor, id)
    decorationColorSides(dna.decorationSidesColor, id)
    animationVariation(dna.animation, id)
}

// renders the html code of the relevant catId into the catBox container for the pages: 
// catalogue.html, marketplace.html
function catBox(id, onclick) {

    var catDiv = `<div class="col cat-container pointer" onclick="` + onclick + `" id="`+ id + `">
                <div class="cat-owner badge badge-danger" id="catOwner`+ id + `"></div>            
                <div class="featureBox catDiv pb-2">
                <div class="idDiv" id="catIdNumber`+ id + `"></div>
                    <div id="ears`+ id + `" class="cat__ear">
                        <div id="leftEar`+ id + `" class="cat__ear--left">
                            <div class="ear-whisker1left"></div>
                            <div class="ear-whisker2left"></div>
                            <div class="cat__ear--left-inside"></div>
                        </div>
                        <div id="rightEar`+ id + `" class="cat__ear--right">
                            <div class="ear-whisker1right"></div>
                            <div class="ear-whisker2right"></div>
                            <div class="cat__ear--right-inside"></div>
                        </div>   
                    </div>
                    <div id="head`+ id + `" class="cat__head">
                        <div class="cat__head-zoneBlur"></div>
                        <div id="midDot`+ id + `" class="cat__head-dots">
                            <div id="leftDot`+ id + `" class="cat__head-dots_first"></div>
                            <div id="rightDot`+ id + `" class="cat__head-dots_second"></div> 
                        </div>

                        <div class="cat__eye-left-zoneblur"></div>
                        <div class="cat__eye-right-zoneblur"></div>

                        <div class="cat__eye">
                            <div name="eye-left`+ id + `" id="leftTwinkle`+ id + `" class="cat__eye--left"></div>
                            <div name="eye-right`+ id + `" id="rightTwinkle`+ id + `" class="cat__eye--right"></div>
                        </div>
                        
                        <div id="pupL-off`+ id + `" class="pupil-left"></div>
                        <div id="refL-off`+ id + `" class="reflex-left"></div>
                        
                        <div id="pupR-off`+ id + `" class="pupil-right"></div>
                        <div id="refR-off`+ id + `" class="reflex-right"></div>
                        
                        
                        <div class="cat__nose"></div>
                        

                        <div class="cat__mouth-contour" id="mouth-contour`+ id + `">

                            <div class="mouth-container">
                                <div id="MouthLimit`+ id + `" class="square">

                                </div>
                                <div class="ellipse">
                                    <div class="tongue"></div>
                                    <div class="tooth tooth1"></div>
                                    <div class="tooth tooth2"></div>
                                    </div>
                                </div>  
                            <div class="whisker__1left"></div>
                            <div class="whisker__2left"></div>
                            <div class="whisker__3left"></div>

                            <div class="whisker__1right"></div>
                            <div class="whisker__2right"></div>
                            <div class="whisker__3right"></div>
                        </div>
                    </div>
                    <div class="cat__body">
                        <div class="cat__chest" id="chest`+ id + `"></div>
                        <div class="cat__chest_inner" id="chest_inner`+ id + `"></div>

                        <div id="cat__pawL`+ id + `" class="cat__paw-left">
                            <div class="cat__paw-shadowL">
                                <div name="claw`+ id + `" class="claw claw_pl1"></div>
                                <div name="claw`+ id + `" class="claw claw_pl2"></div>
                                <div name="claw`+ id + `" class="claw claw_pl3"></div>
                            </div>
                        </div>

                        <div id="cat__stompL`+ id + `" class="cat__paw-left_inner">
                            <div id="clawsInnerL`+ id + `" class="cat__paw-shadowInnerL">
                                <div name="clawsL`+ id + `" class="clawsL claws__left1"></div>
                                <div name="clawsL`+ id + `" class="clawsL claws__left2"></div>
                                <div name="clawsL`+ id + `" class="clawsL claws__left3"></div>
                            </div>
                        </div>

                        <div id="cat__pawR`+ id + `" class="cat__paw-right">
                            <div class="cat__paw-shadowR">
                                <div name="claw`+ id + `" class="claw claw_pr1"></div>
                                <div name="claw`+ id + `" class="claw claw_pr2"></div>
                                <div name="claw`+ id + `" class="claw claw_pr3"></div>
                            </div>
                        </div>
                        
                        <div id="cat__stompR`+ id + `" class="cat__paw-right_inner">
                            <div id="clawsInnerR`+ id + `" class="cat__paw-shadowInnerR">
                                <div name="clawsR`+ id + `" class="clawsR claws__right1"></div>
                                <div name="clawsR`+ id + `" class="clawsR claws__right2"></div>
                                <div name="clawsR`+ id + `" class="clawsR claws__right3"></div>
                            </div>
                        </div>
                            
                        <div id="tail`+ id + `" class="cat__tail">
                            <div class="tail__arrow">
                                <div class="tail__whisker tail__whiskerLeft"></div>
                                <div class="tail__whisker tail__whiskerRight"></div>
                            </div>
                        </div> <br><br><br><br><br>
                            <div class="dnaDiv" id="catDNA`+ id + `"></div>

                        <ul class="ml-5 cattributes" id="listAlign">
                            <li><span id="eyeName`+ id + `"></span> eyes</li>
                            <li><span id="decoName`+ id + `"></span> decoration</li>
                            <li><span id="animationName`+ id + `"></span> animation </li>
                        </ul>
                        
                    </div>
                </div>
            </div>`

    $('#catsDiv').append(catDiv)

}



