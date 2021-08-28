const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector("#progress")

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)


$video.addEventListener('loadedmetadata',handleLoadedMetadata)
$video.addEventListener('timeupdate',handleTimeUpdate)

$progress.addEventListener('input', handleProgressInput)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log("play")
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log("pause")
}

function handleForward(){
    $video.currentTime = $video.currentTime + 10
    console.log("pause")
}

function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log("pause")
}

function handleLoadedMetadata(){
    $progress.max = $video.duration
    console.log($progress.max)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
}



function handleProgressInput(){
    console.log($progress.value)
    $video.currentTime = $progress.value
}