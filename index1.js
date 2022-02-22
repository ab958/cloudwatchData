//const { async } = require('node-stream-zip');
const StreamZip = require('node-stream-zip');
const zip = new StreamZip.async({ file: './test.zip' });
       console.log(zip)
       zip.on('ready', () => {
        console.log('Entries read: ' + zip.entriesCount);
        for (const entry of Object.values(zip.entries())) {
            const desc = entry.isDirectory ? 'directory' : `${entry.size} bytes`;
            console.log(`Entry ${entry.name}: ${desc}`);
        }
        // Do not forget to close the file once you're done
        zip.close();
    });
       


  
