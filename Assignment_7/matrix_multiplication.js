function multiplyMatrices() {
	const a11 = parseInt(document.getElementById('a11').value);
    const a12 = parseInt(document.getElementById('a12').value);
    const a21 = parseInt(document.getElementById('a21').value);
    const a22 = parseInt(document.getElementById('a22').value);
	
	const b11 = parseInt(document.getElementById('b11').value);
    const b12 = parseInt(document.getElementById('b12').value);
    const b21 = parseInt(document.getElementById('b21').value);
    const b22 = parseInt(document.getElementById('b22').value);

    const c11 = a11 * b11 + a12 * b21;
    const c12 = a11 * b12 + a12 * b22;
    const c21 = a21 * b11 + a22 * b21;
    const c22 = a21 * b12 + a22 * b22;

	document.getElementById('c11').textContent = c11;
    document.getElementById('c12').textContent = c12;
    document.getElementById('c21').textContent = c21;
    document.getElementById('c22').textContent = c22;
}
   