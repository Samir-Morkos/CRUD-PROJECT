

var siteName = document.getElementById('siteName')
var siteUrl = document.getElementById('siteUrl')

var boxInfo = document.getElementById('box-info')

var siteList = []

if (localStorage.getItem('siteList') != null) {
    siteList = JSON.parse(localStorage.getItem('siteList'))
}
displayData()

function addSite() {
    if (validationUrl() == true && validationSite() == true) {
        var site = {
            sName: siteName.value,
            sUrl: siteUrl.value
        }

        siteList.push(site)

        localStorage.setItem('siteList', JSON.stringify(siteList))
        console.log(siteList)

        displayData()

        clear()


    }else{
        boxInfo.classList.remove('d-none')
        displayData()
        clear()
    }
    
}

function clear() {
    siteName.value = ""
    siteUrl.value = ""

}

function displayData() {
    var cartona = ""
    for (var i = 0; i < siteList.length; i++) {
        cartona += `<tr>
        <td class="">${Number([i]) + 1}</td>
        <td class="">${siteList[i].sName} </td>
        <td class=""><a href="${siteList[i].sUrl}" class="btn btn-success">
        <i class="icon-remove_red_eye "></i> Visit
        </a></td>
        <td class=""><button onclick="deleteSite(${i})" class="btn btn-danger">
        <i class="icon-trash-o " ></i> Delete
        </button></td>
        </tr>`
    }

    document.getElementById("tableBody").innerHTML = cartona;

}

function deleteSite(index) {

    siteList.splice(index, 1)

    localStorage.setItem('siteList', JSON.stringify(siteList))

    displayData()

}



function validationSite() {
    var siteText = siteName.value
    var regexSite = /^[A-z]{3,20}$/
    if (regexSite.test(siteText) == true) {
        siteName.classList.add('is-valid')
        siteName.classList.remove('is-invalid')
        return true
    } else {
        siteName.classList.add('is-invalid')
        siteName.classList.remove('is-valid')
        return false
    }
}
function validationUrl() {
    var urlText = siteUrl.value
    var regexUrl = /^(www.|http:)[A-z.\/]{2,20}$/
    if (regexUrl.test(urlText) == true) {
        siteUrl.classList.add('is-valid')
        siteUrl.classList.remove('is-invalid')
        return true
    } else {
        siteUrl.classList.add('is-invalid')
        siteUrl.classList.remove('is-valid')
        return false
    }
}

function closeDialog() {
    boxInfo.classList.add('d-none')
}

