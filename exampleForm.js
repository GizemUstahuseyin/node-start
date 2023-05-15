function Form(){
    return(
<>
<form>
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
              <select class="form-select" id="state" required="">
                <option value="">Seçiniz...</option>
                <option>Mantı</option>
                <option>Sarma</option>
                <option>Pizza</option>
                <option>Hamburger</option>
              </select>
            </div>
    
    <button type="submit">Başvur</button>
</form>
</>
)}listen(8080);
export default Form;