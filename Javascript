function searchDomain() {
    var domainName = document.getElementById("domain-input").value;
    if (domainName === "") {
        document.getElementById("result").innerHTML = "Please enter a domain name.";
    } else {
        document.getElementById("result").innerHTML = "Searching for " + domainName + ".ord";
        // TODO: Implement actual domain search logic
    }
}
