
const ping = function(){
    $('.results').empty()
    let ip = $('.ipInput').val()
    console.log(ip)
    $.get(`/ping/${ip}`, function(response){
        $('.results').append(response)
        $('.ipInput').val('')
    })
}