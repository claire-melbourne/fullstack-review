//what needs to be imported for this?
//do i need to run jquery script is it installed?
//what else needs to be installed for ajax requests?
//post request to /repos

search = function(text, callback) => {
  return $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:1128/repos',
    data: text,
    //dataType: ,
    success: callback
  })
}
