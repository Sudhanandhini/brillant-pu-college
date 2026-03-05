path = 'src/pages/Home.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_start = '      {/* Popup 1 \u2014 Image */}'
old_end = '      )}\n\n      {/* Lightbox */'

start_idx = content.find(old_start)
end_idx = content.find('      {/* Lightbox */')

if start_idx == -1 or end_idx == -1:
    print(f'Not found: start={start_idx}, end={end_idx}')
    exit(1)

old_block = content[start_idx:end_idx]

new_block = '''      {/* Popup 1 \u2014 Image only */}
      {showImagePopup && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={() => setShowImagePopup(false)}
        >
          <div
            style={{ position: 'relative', maxWidth: '580px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={popupImg} alt="Admission" style={{ width: '100%', display: 'block', maxHeight: '82vh', objectFit: 'contain' }} />
            <button
              onClick={() => setShowImagePopup(false)}
              style={{
                position: 'absolute', top: '-13px', right: '-13px',
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#444', color: '#fff', border: 'none',
                cursor: 'pointer', fontSize: '15px', lineHeight: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >x</button>
            <button
              onClick={() => { setShowImagePopup(false); setShowFormPopup(true); }}
              style={{
                display: 'block', width: '100%', marginTop: '6px',
                padding: '11px', background: '#1a9dbd', color: '#fff',
                fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px',
                textTransform: 'uppercase', border: 'none', cursor: 'pointer'
              }}
            >Enquire Now</button>
          </div>
        </div>
      )}

      {/* Popup 2 \u2014 Enquiry Form */}
      {showFormPopup && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowFormPopup(false)}
        >
          <div
            style={{ background: '#fff', width: '100%', maxWidth: '430px', position: 'relative', padding: '28px 28px 44px', fontFamily: 'Arial,sans-serif' }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handlePopupSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', marginBottom: '5px', color: '#333' }}>Your Name (required)</label>
                <input name="name" value={popup.name} onChange={handlePopupChange} required
                  style={{ width: '100%', border: '1px solid #ccc', padding: '7px 10px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', marginBottom: '5px', color: '#333' }}>Your Email (required)</label>
                <input name="email" type="email" value={popup.email} onChange={handlePopupChange} required
                  style={{ width: '100%', border: '1px solid #ccc', padding: '7px 10px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', marginBottom: '5px', color: '#333' }}>Telephone No:</label>
                <input name="phone" value={popup.phone} onChange={handlePopupChange} placeholder="Telephone number"
                  style={{ width: '65%', border: '1px solid #ccc', padding: '7px 10px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', marginBottom: '5px', color: '#333' }}>Your Message</label>
                <textarea name="message" value={popup.message} onChange={handlePopupChange}
                  style={{ width: '100%', border: '1px solid #ccc', padding: '7px 10px', fontSize: '13px', outline: 'none', resize: 'none', height: '160px', boxSizing: 'border-box' }} />
              </div>
              {popupStatus === 'success' && <p style={{ color: 'green', fontSize: '12px', margin: 0 }}>Message sent! Thank you.</p>}
              {popupStatus === 'error' && <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>Failed to send. Please try again.</p>}
              <div>
                <button type="submit" disabled={popupStatus === 'sending'}
                  style={{ background: '#1a9dbd', color: '#fff', border: 'none', padding: '8px 20px', fontSize: '13px', cursor: 'pointer', opacity: popupStatus === 'sending' ? 0.6 : 1 }}>
                  {popupStatus === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
            <button
              onClick={() => setShowFormPopup(false)}
              style={{
                position: 'absolute', bottom: '10px', right: '10px',
                background: '#888', color: '#fff', border: 'none',
                width: '26px', height: '26px', cursor: 'pointer',
                fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >x</button>
          </div>
        </div>
      )}

'''

content = content[:start_idx] + new_block + content[end_idx:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
