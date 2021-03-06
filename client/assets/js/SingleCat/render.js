
var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 48,
    "mouthColor" : 83,
    "eyesShape" : 1,
    "pupilColor" : 11,
    "earsColor" : 20,
    //Cattributes
    "decorationPattern" : 1,
    "decorationMidColor" : 30,
    "decorationSidesColor" : 17,
    "animation" : 1
    }

// when page load
window.addEventListener('DOMContentLoaded', async (event) => {
    setTimeout(()=> {
        var params = get_variables();
        var catId = params.catId;
        if(empty(catId)){
        renderCat(defaultDNA)
        $('#createButton').attr("onclick", "createNewCat()")
        } else {
            loadCat(catId)
            $('#createButton').attr("onclick", "updateCat(" + catId +") ")
        }
    }, 1000);
    
});
async function updateCat(catId){
    var dnaStr = getDna().toString();
    try{
        await contract.methods.updateCat(catId, dnaStr).send()
        .on('receipt', function (receipt) {
            alert_msg("Cat updated successfully", "success")
        })
    }
    catch(err){
        console.log(err)
    }
    console.log("cat updated")
}

function randomDna(){
    // create a random DNA number with a fixed amount of 16 digits, remove decimals
    //var dnaStr = String(Math.floor(Math.random() * 1E16));
    //console.log(randomDNA);
    var dna = {
        "headColor" : Math.floor(Math.random() * 88) + 10,
        "mouthColor" : Math.floor(Math.random() * 88) + 10,
        "eyesShape" : Math.floor(Math.random() * 8) + 1,
        "pupilColor" : Math.floor(Math.random() * 88) + 10,
        "earsColor" : Math.floor(Math.random() * 88) + 10,
        "decorationPattern" : Math.floor(Math.random() * 4) + 1,
        "decorationMidColor" : Math.floor(Math.random() * 88) + 10,
        "decorationSidesColor" : Math.floor(Math.random() * 88) + 10,
        "animation" : Math.floor(Math.random() * 7) + 1
        }
        return dna
    }

function randomCat(){
    var dna = randomDna()
    renderCat(dna)
}

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnashape').html()
    dna += $('#dnapupils').html()
    dna += $('#dnaears').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headColor],dna.headColor)
    $('#bodycolor').val(dna.headColor)

    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)

    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)

    pupilColor(colors[dna.pupilColor],dna.pupilColor)
    $('#pupilcolor').val(dna.pupilColor)

    earColor(colors[dna.earsColor],dna.earsColor)
    $('#earcolor').val(dna.earsColor)

    decorationVariation(dna.decorationPattern)
    $('#decoshape').val(dna.decorationPattern)

    decorationColorSides(colors[dna.decorationSidesColor],dna.decorationSidesColor)
    $('#decosidecolors').val(dna.decorationSidesColor)

    decorationColorMid(colors[dna.decorationMidColor],dna.decorationMidColor)
    $('#decomidcolor').val(dna.decorationMidColor)

    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
}

// Listeners - Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})
$('#mouthcolor').change(()=>{
    var colorVal = $('#mouthcolor').val()
    mouthColor(colors[colorVal],colorVal)
})
$('#eyeshape').change(()=>{
    var shape = parseInt($('#eyeshape').val())
    eyeVariation(shape)
})
$('#pupilcolor').change(()=>{
    var colorVal = $('#pupilcolor').val()
    pupilColor(colors[colorVal],colorVal)
})
$('#earcolor').change(()=>{
    var colorVal = $('#earcolor').val()
    earColor(colors[colorVal],colorVal)
})
// Changing cattributes
$('#decoshape').change(()=>{
    var shape = parseInt( $('#decoshape').val() )
    decorationVariation(shape)
})
$('#decosidecolors').change(()=>{
    var colorVal = $('#decosidecolors').val()
    decorationColorSides(colors[colorVal],colorVal)
})
$('#decomidcolor').change(()=>{
    var colorVal = $('#decomidcolor').val()
    decorationColorMid(colors[colorVal],colorVal)
})
$('#animation').change(()=>{
    var animationVal = parseInt( $('#animation').val() )
    animationVariation(animationVal)
})

async function loadCat(id){
    var neonCat = await contract.methods.getCat(id).call();
    var dna = catDna(neonCat.genes);
    renderCat(dna);

}

/*
// CLICK LISTENERS FOR HTML BUTTONS

// 1. create Cat Gen 0 
--> as it interacts with the blockchain, this function was moved to index.js file
$('#createButton').click(()=>{
    createCat();
})    */

async function createNewCat(){

    var dnaStr = getDna().toString();
    try{
        await contract.methods.createCatGen0(dnaStr).send()
        .on('receipt', function (receipt) {
            alert_msg("Cat created successfully", "success")
        })
    }
    catch(err){
        console.log(err)
    }
}

// 2. default Cat
$('#defaultButton').click(()=>{
    renderCat(defaultDNA);
})

// 3. random Cat
$('#randomButton').click(()=>{
    randomCat();
})
