const http = require('http');
const fs = require('fs');

function Form(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = JSON.parse(body);
      const { isim, soyisim, favYemek } = formData;
      const data = `${isim} ${soyisim} ${favYemek}\n`;
      fs.appendFile('veri.txt', data, err => {
        if (err) throw err;
        console.log('Form data saved to file');
      });
      res.end('Form submitted successfully');
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <form method="POST">
        <h1>Sen Kimsin?</h1>
        <h3>Lütfen Aşağıdaki Formu Doldurun</h3>
        <label>
          İsim:
          <input type="text" name="isim"/>
        </label>
        <label>
          Soyisim:
          <input type="text" name="soyisim"/>
        </label>
        <div class="col-md-4">
          <label for="favYemek" class="form-label">Favori Yemek</label>
          <select class="form-select" id="state" name="favYemek" required="">
            <option value="">CSeçiniz...</option>
            <option>Mantı</option>
            <option>Sarma</option>
            <option>Pizza</option>
            <option>Hamburger</option>
          </select>
        </div>
        <button type="submit">Başvur</button>
      </form>
    `);
    res.end();
  }
}

const server = http.createServer(Form);
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
