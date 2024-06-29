function addPrefix() {
    const prefix = document.getElementById('prefix').value;
    const strings = document.getElementById('strings').value.split(',');
    const output = document.getElementById('output');

    output.innerHTML = ''; 

    strings.forEach(str => {
        const prefixedString = prefix + str.trim();
        const li = document.createElement('li');
        li.textContent = prefixedString;
        output.appendChild(li);
    });
}
