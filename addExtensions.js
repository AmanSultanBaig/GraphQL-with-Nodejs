import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function addJsExtension(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            addJsExtension(fullPath);
        } else if (file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            content = content.replace(/(import\s+.*\s+from\s+['"])([^'"]+)(['"])/g, (match, p1, p2, p3) => {
                if (!p2.startsWith('.') || p2.endsWith('.js') || p2.includes('node_modules')) {
                    return match;
                }
                return `${p1}${p2}.js${p3}`;
            });
            fs.writeFileSync(fullPath, content, 'utf8');
        }
    });
}

addJsExtension(path.join(__dirname, 'dist'));