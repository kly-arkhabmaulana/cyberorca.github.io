var articleSnippet = document.querySelectorAll('.fimela--articles--snippet'),
notEmpty = (articleSnippet.length > 0) ? 1 : 0;

if(notEmpty){
    var asCat = articleSnippet[0].querySelector('a.fimela--articles--snippet__category'),
    asTitle = articleSnippet[0].querySelector('a.fimela--articles--snippet__title'),
    asShortDesc = articleSnippet[0].querySelector('div.fimela--articles--snippet__short-desc'),
    asImgSnippet = articleSnippet[0].querySelector('img.fimela--articles--snippet__img-img');
    asCat.innerText = 'PROMOTED';
    asTitle.innerText = 'This title append by Revive Ads Server';
    asShortDesc.innerText = 'This testing short description generate by custom script Revive Ads Server, hope you encjoy it!';
    asImgSnippet.src = 'https://via.placeholder.com/200';
}
