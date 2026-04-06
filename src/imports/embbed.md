<div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://agenciapapoca.us17.list-manage.com/subscribe/post?u=200cd0a061548e0c1a0d7f162&amp;id=bf2293ff48&amp;f_id=005fade3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Receba o conteúdo da palestra por e-mail</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-FNAME">Seu nome </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-EMAIL">Seu e-mail <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-MMERGE9">Celular </label><input type="text" name="MMERGE9" class="REQ_CSS" id="mce-MMERGE9" value=""></div><div class="mc-field-group"><label for="mce-MMERGE12">Investimento mensal atual em SEO, GEO e conteúdo </label><select name="MMERGE12" class="" id="mce-MMERGE12"><option value=""></option><option value="Menos de 20k">Menos de 20k</option><option value="Entre 20k e 50k">Entre 20k e 50k</option><option value="Entre 50k e 100k">Entre 50k e 100k</option><option value="Mais de 100k">Mais de 100k</option></select></div>
<div hidden=""><input type="hidden" name="tags" value="8333429"></div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_200cd0a061548e0c1a0d7f162_bf2293ff48" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[9]='MMERGE9';ftypes[9]='phone';fnames[12]='MMERGE12';ftypes[12]='dropdown';fnames[3]='MMERGE3';ftypes[3]='text';fnames[4]='MMERGE4';ftypes[4]='text';fnames[5]='MMERGE5';ftypes[5]='text';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='date';fnames[2]='MMERGE2';ftypes[2]='text';fnames[10]='MMERGE10';ftypes[10]='text';fnames[11]='MMERGE11';ftypes[11]='number';/**
 * Translated default messages for the $ validation plugin.
 * Locale: PT_PT
 */
$.extend($.validator.messages, {
	required: "Campo de preenchimento obrigat&oacute;rio.",
	remote: "Por favor, corrija este campo.",
	email: "Por favor, introduza um endere&ccedil;o eletr&oacute;nico v&aacute;lido.",
	url: "Por favor, introduza um URL v&aacute;lido.",
	date: "Por favor, introduza uma data v&aacute;lida.",
	dateISO: "Por favor, introduza uma data v&aacute;lida (ISO).",
	number: "Por favor, introduza um n&uacute;mero v&aacute;lido.",
	digits: "Por favor, introduza apenas d&iacute;gitos.",
	creditcard: "Por favor, introduza um n&uacute;mero de cart&atilde;o de cr&eacute;dito v&aacute;lido.",
	equalTo: "Por favor, introduza de novo o mesmo valor.",
	accept: "Por favor, introduza um ficheiro com uma extens&atilde;o v&aacute;lida.",
	maxlength: $.validator.format("Por favor, n&atilde;o introduza mais do que {0} caracteres."),
	minlength: $.validator.format("Por favor, introduza pelo menos {0} caracteres."),
	rangelength: $.validator.format("Por favor, introduza entre {0} e {1} caracteres."),
	range: $.validator.format("Por favor, introduza um valor entre {0} e {1}."),
	max: $.validator.format("Por favor, introduza um valor menor ou igual a {0}."),
	min: $.validator.format("Por favor, introduza um valor maior ou igual a {0}.")
});}(jQuery));var $mcj = jQuery.noConflict(true);
    // SMS Phone Multi-Country Functionality
    if(!window.MC) {
      window.MC = {};
    }
    window.MC.smsPhoneData = {
      defaultCountryCode: 'BR',
      programs: [],
      smsProgramDataCountryNames: []
    };

    function getCountryUnicodeFlag(countryCode) {
       return countryCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    };

    // HTML sanitization function to prevent XSS
    function sanitizeHtml(str) {
      if (typeof str !== 'string') return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    }

    // URL sanitization function to prevent javascript: and data: URLs
    function sanitizeUrl(url) {
      if (typeof url !== 'string') return '';
      const trimmedUrl = url.trim().toLowerCase();
      if (trimmedUrl.startsWith('javascript:') || trimmedUrl.startsWith('data:') || trimmedUrl.startsWith('vbscript:')) {
        return '#';
      }
      return url;
    }

    const getBrowserLanguage = () => {
      if (!window?.navigator?.language?.split('-')[1]) {
        return window?.navigator?.language?.toUpperCase();
      }
      return window?.navigator?.language?.split('-')[1];
    };

    
    function getDefaultCountryProgram(defaultCountryCode, smsProgramData) {
      if (!smsProgramData || smsProgramData.length === 0) {
        return null;
      }

      const browserLanguage = getBrowserLanguage();

      if (browserLanguage) {
        const foundProgram = smsProgramData.find(
          (program) => program?.countryCode === browserLanguage,
        );
        if (foundProgram) {
          return foundProgram;
        }
      }

      if (defaultCountryCode) {
        const foundProgram = smsProgramData.find(
          (program) => program?.countryCode === defaultCountryCode,
        );
        if (foundProgram) {
          return foundProgram;
        }
      }

      return smsProgramData[0];
    }

    function updateSmsLegalText(countryCode, fieldName) {
      if (!countryCode || !fieldName) {
        return;
      }
      
      const programs = window?.MC?.smsPhoneData?.programs;
      if (!programs || !Array.isArray(programs)) {
        return;
      }
      
      const program = programs.find(program => program?.countryCode === countryCode);
      if (!program || !program.requiredTemplate) {
        return;
      }
    
      
      const legalTextElement = document.querySelector('#legal-text-' + fieldName);
      if (!legalTextElement) {
        return;
      }
      
      // Remove HTML tags and clean up the text
      const divRegex = new RegExp('</?[div][^>]*>', 'gi');
      const fullAnchorRegex = new RegExp('<a.*?</a>', 'g');
      const anchorRegex = new RegExp('<a href="(.*?)" target="(.*?)">(.*?)</a>');
      
      const template = program.requiredTemplate.replace(divRegex, '');
      
      

      legalTextElement.textContent = '';
      const parts = template.split(/(<a href=".*?" target=".*?">.*?<\/a>)/g);
      parts.forEach(function(part) {
        if (!part) {
          return;
        }
        const anchorMatch = part.match(/<a href="(.*?)" target="(.*?)">(.*?)<\/a>/);
        if (anchorMatch) {
          const linkElement = document.createElement('a');
          linkElement.href = sanitizeUrl(anchorMatch[1]);
          linkElement.target = sanitizeHtml(anchorMatch[2]);
          linkElement.textContent = sanitizeHtml(anchorMatch[3]);
          legalTextElement.appendChild(linkElement);
        } else {
          legalTextElement.appendChild(document.createTextNode(part));
        }
      });
          
    }

    function generateDropdownOptions(smsProgramData) {
      if (!smsProgramData || smsProgramData.length === 0) {
        return '';
      }

      var programs = false
        ? smsProgramData.filter(function(p, i, arr) {
            return arr.findIndex(function(q) { return q.countryCode === p.countryCode; }) === i;
          })
        : smsProgramData;
      
      return programs.map(program => {
        const flag = getCountryUnicodeFlag(program.countryCode);
        const countryName = getCountryName(program.countryCode);
        const callingCode = program.countryCallingCode || '';
        // Sanitize all values to prevent XSS
        const sanitizedCountryCode = sanitizeHtml(program.countryCode || '');
        const sanitizedCountryName = sanitizeHtml(countryName || '');
        const sanitizedCallingCode = sanitizeHtml(callingCode || '');
        return '<option value="' + sanitizedCountryCode + '">' + sanitizedCountryName + ' ' + sanitizedCallingCode + '</option>';
      }).join('');
    }

    function getCountryName(countryCode) {
      if (window.MC?.smsPhoneData?.smsProgramDataCountryNames && Array.isArray(window.MC.smsPhoneData.smsProgramDataCountryNames)) {
        for (let i = 0; i < window.MC.smsPhoneData.smsProgramDataCountryNames.length; i++) {
          if (window.MC.smsPhoneData.smsProgramDataCountryNames[i].code === countryCode) {
            return window.MC.smsPhoneData.smsProgramDataCountryNames[i].name;
          }
        }
      }
      return countryCode;
    }

    function getDefaultPlaceholder(countryCode) {
      if (!countryCode || typeof countryCode !== 'string') {
        return '+1 000 000 0000'; // Default US placeholder
      }
      
            var mockPlaceholders = [
        {
          countryCode: 'US',
          placeholder: '+1 000 000 0000',
          helpText: 'Include the US country code +1 before the phone number',
        },
        {
          countryCode: 'GB',
          placeholder: '+44 0000 000000',
          helpText: 'Include the GB country code +44 before the phone number',
        },
        {
          countryCode: 'CA',
          placeholder: '+1 000 000 0000',
          helpText: 'Include the CA country code +1 before the phone number',
        },
        {
          countryCode: 'AU',
          placeholder: '+61 000 000 000',
          helpText: 'Include the AU country code +61 before the phone number',
        },
        {
          countryCode: 'DE',
          placeholder: '+49 000 0000000',
          helpText: 'Fügen Sie vor der Telefonnummer die DE-Ländervorwahl +49 ein',
        },
        {
          countryCode: 'FR',
          placeholder: '+33 0 00 00 00 00',
          helpText: 'Incluez le code pays FR +33 avant le numéro de téléphone',
        },
        {
          countryCode: 'ES',
          placeholder: '+34 000 000 000',
          helpText: 'Incluya el código de país ES +34 antes del número de teléfono',
        },
        {
          countryCode: 'NL',
          placeholder: '+31 0 00000000',
          helpText: 'Voeg de NL-landcode +31 toe vóór het telefoonnummer',
        },
        {
          countryCode: 'BE',
          placeholder: '+32 000 00 00 00',
          helpText: 'Incluez le code pays BE +32 avant le numéro de téléphone',
        },
        {
          countryCode: 'CH',
          placeholder: '+41 00 000 00 00',
          helpText: 'Fügen Sie vor der Telefonnummer die CH-Ländervorwahl +41 ein',
        },
        {
          countryCode: 'AT',
          placeholder: '+43 000 000 0000',
          helpText: 'Fügen Sie vor der Telefonnummer die AT-Ländervorwahl +43 ein',
        },
        {
          countryCode: 'IE',
          placeholder: '+353 00 000 0000',
          helpText: 'Include the IE country code +353 before the phone number',
        },
        {
          countryCode: 'IT',
          placeholder: '+39 000 000 0000',
          helpText: 'Includere il prefisso internazionale IT +39 prima del numero di telefono',
        },
        {
          countryCode: 'NO',
          placeholder: '+47 000 00 000',
          helpText: 'Inkluder NO landskode +47 før telefonnummeret',
        },
        {
          countryCode: 'SE',
          placeholder: '+46 00 000 00 00',
          helpText: 'Inkludera SE landskod +46 före telefonnumret',
        },
        {
          countryCode: 'DK',
          placeholder: '+45 00 00 00 00',
          helpText: 'Inkluder DK landekode +45 før telefonnummeret',
        },
        {
          countryCode: 'FI',
          placeholder: '+358 00 000 0000',
          helpText: 'Sisällytä FI-maakoodi +358 ennen puhelinnumeroa',
        },
        {
          countryCode: 'EE',
          placeholder: '+372 0000 0000',
          helpText: 'Lisage EE riigikood +372 telefoninumbri ette',
        },
        {
          countryCode: 'PL',
          placeholder: '+48 000 000 000',
          helpText: 'Podaj numer kierunkowy PL +48 przed numerem telefonu',
        },
        {
          countryCode: 'SK',
          placeholder: '+421 000 000 000',
          helpText: 'Pred telefónne číslo uveďte kód krajiny SK +421',
        },
        {
          countryCode: 'LV',
          placeholder: '+371 0000 0000',
          helpText: 'Iekļaujiet LV valsts kodu +371 pirms tālruņa numura',
        },
        {
          countryCode: 'LT',
          placeholder: '+370 0000 0000',
          helpText: 'Įtraukite LT šalies kodą +370 prieš telefono numerį',
        },
        {
          countryCode: 'GR',
          placeholder: '+30 000 000 0000',
          helpText: 'Συμπεριλάβετε τον κωδικό χώρας GR +30 πριν από τον αριθμό τηλεφώνου',
        },
        {
          countryCode: 'PT',
          placeholder: '+351 000 000 000',
          helpText: 'Inclua o código de país PT +351 antes do número de telefone',
        },
        {
          countryCode: 'HR',
          placeholder: '+385 00 000 0000',
          helpText: 'Uključite HR pozivni broj države +385 prije telefonskog broja',
        },
        {
          countryCode: 'SI',
          placeholder: '+386 00 000 000',
          helpText: 'Vključite SI kodo države +386 pred telefonsko številko',
        },
        {
          countryCode: 'IS',
          placeholder: '+354 000 0000',
          helpText: 'Láttu IS landsnúmer +354 fylgja á undan símanúmerinu',
        },
        {
          countryCode: 'LU',
          placeholder: '+352 000 000 000',
          helpText: 'Incluez le code pays LU +352 avant le numéro de téléphone',
        },
        {
          countryCode: 'MC',
          placeholder: '+377 00 00 00 00',
          helpText: 'Incluez le code pays MC +377 avant le numéro de téléphone',
        },
        {
          countryCode: 'AD',
          placeholder: '+376 000 000',
          helpText: 'Incloeu el codi de país AD +376 abans del número de telèfon',
        },
        {
          countryCode: 'JE',
          placeholder: '+44 0000 000000',
          helpText: 'Include the JE country code +44 before the phone number',
        },
        {
          countryCode: 'IM',
          placeholder: '+44 0000 000000',
          helpText: 'Include the IM country code +44 before the phone number',
        },
        {
          countryCode: 'GG',
          placeholder: '+44 0000 000000',
          helpText: 'Include the GG country code +44 before the phone number',
        },
        {
          countryCode: 'AL',
          placeholder: '+355 00 000 0000',
          helpText: 'Përfshini kodin e vendit AL +355 para numrit të telefonit',
        },
        {
          countryCode: 'SM',
          placeholder: '+378 0000 000000',
          helpText: 'Includere il prefisso internazionale SM +378 prima del numero di telefono',
        },
        {
          countryCode: 'FO',
          placeholder: '+298 000000',
          helpText: 'Inkluder FO landekode +298 før telefonnummeret',
        },
        {
          countryCode: 'MT',
          placeholder: '+356 0000 0000',
          helpText: 'Include the MT country code +356 before the phone number',
        },
        {
          countryCode: 'LI',
          placeholder: '+423 000 0000',
          helpText: 'Fügen Sie vor der Telefonnummer die LI-Ländervorwahl +423 ein',
        },
        {
          countryCode: 'GI',
          placeholder: '+350 000 00000',
          helpText: 'Include the GI country code +350 before the phone number',
        },
        {
          countryCode: 'MD',
          placeholder: '+373 00 000 000',
          helpText: 'Includeți codul de țară MD +373 înaintea numărului de telefon',
        },
        {
          countryCode: 'HU',
          placeholder: '+36 00 000 0000',
          helpText: 'A telefonszám előtt adja meg a HU országkódot +36',
        },
        {
          countryCode: 'NZ',
          placeholder: '+64 00 000 0000',
          helpText: 'Include the NZ country code +64 before the phone number',
        },
        {
          countryCode: 'ME',
          placeholder: '+382 00 000 000',
          helpText: 'Uključite ME pozivni broj države +382 prije telefonskog broja',
        },
      ];

      const selectedPlaceholder = mockPlaceholders.find(function(item) {
        return item && item.countryCode === countryCode;
      });
      
      return selectedPlaceholder ? selectedPlaceholder.placeholder : mockPlaceholders[0].placeholder;
    }

    function updatePlaceholder(countryCode, fieldName) {
      if (!countryCode || !fieldName) {
        return;
      }
      
      const phoneInput = document.querySelector('#mce-' + fieldName);
      if (!phoneInput) {
        return;
      }
      
      const placeholder = getDefaultPlaceholder(countryCode);
      if (placeholder) {
        phoneInput.placeholder = placeholder;
      }
    }

    function updateCountryCodeInstruction(countryCode, fieldName) {
      updatePlaceholder(countryCode, fieldName);
      
    }

    function getDefaultHelpText(countryCode) {
      var mockPlaceholders = [
        {
          countryCode: 'US',
          placeholder: '+1 000 000 0000',
          helpText: 'Include the US country code +1 before the phone number',
        },
        {
          countryCode: 'GB',
          placeholder: '+44 0000 000000',
          helpText: 'Include the GB country code +44 before the phone number',
        },
        {
          countryCode: 'CA',
          placeholder: '+1 000 000 0000',
          helpText: 'Include the CA country code +1 before the phone number',
        },
        {
          countryCode: 'AU',
          placeholder: '+61 000 000 000',
          helpText: 'Include the AU country code +61 before the phone number',
        },
        {
          countryCode: 'DE',
          placeholder: '+49 000 0000000',
          helpText: 'Fügen Sie vor der Telefonnummer die DE-Ländervorwahl +49 ein',
        },
        {
          countryCode: 'FR',
          placeholder: '+33 0 00 00 00 00',
          helpText: 'Incluez le code pays FR +33 avant le numéro de téléphone',
        },
        {
          countryCode: 'ES',
          placeholder: '+34 000 000 000',
          helpText: 'Incluya el código de país ES +34 antes del número de teléfono',
        },
        {
          countryCode: 'NL',
          placeholder: '+31 0 00000000',
          helpText: 'Voeg de NL-landcode +31 toe vóór het telefoonnummer',
        },
        {
          countryCode: 'BE',
          placeholder: '+32 000 00 00 00',
          helpText: 'Incluez le code pays BE +32 avant le numéro de téléphone',
        },
        {
          countryCode: 'CH',
          placeholder: '+41 00 000 00 00',
          helpText: 'Fügen Sie vor der Telefonnummer die CH-Ländervorwahl +41 ein',
        },
        {
          countryCode: 'AT',
          placeholder: '+43 000 000 0000',
          helpText: 'Fügen Sie vor der Telefonnummer die AT-Ländervorwahl +43 ein',
        },
        {
          countryCode: 'IE',
          placeholder: '+353 00 000 0000',
          helpText: 'Include the IE country code +353 before the phone number',
        },
        {
          countryCode: 'IT',
          placeholder: '+39 000 000 0000',
          helpText: 'Includere il prefisso internazionale IT +39 prima del numero di telefono',
        },
        {
          countryCode: 'NO',
          placeholder: '+47 000 00 000',
          helpText: 'Inkluder NO landskode +47 før telefonnummeret',
        },
        {
          countryCode: 'SE',
          placeholder: '+46 00 000 00 00',
          helpText: 'Inkludera SE landskod +46 före telefonnumret',
        },
        {
          countryCode: 'DK',
          placeholder: '+45 00 00 00 00',
          helpText: 'Inkluder DK landekode +45 før telefonnummeret',
        },
        {
          countryCode: 'FI',
          placeholder: '+358 00 000 0000',
          helpText: 'Sisällytä FI-maakoodi +358 ennen puhelinnumeroa',
        },
        {
          countryCode: 'EE',
          placeholder: '+372 0000 0000',
          helpText: 'Lisage EE riigikood +372 telefoninumbri ette',
        },
        {
          countryCode: 'PL',
          placeholder: '+48 000 000 000',
          helpText: 'Podaj numer kierunkowy PL +48 przed numerem telefonu',
        },
        {
          countryCode: 'SK',
          placeholder: '+421 000 000 000',
          helpText: 'Pred telefónne číslo uveďte kód krajiny SK +421',
        },
        {
          countryCode: 'LV',
          placeholder: '+371 0000 0000',
          helpText: 'Iekļaujiet LV valsts kodu +371 pirms tālruņa numura',
        },
        {
          countryCode: 'LT',
          placeholder: '+370 0000 0000',
          helpText: 'Įtraukite LT šalies kodą +370 prieš telefono numerį',
        },
        {
          countryCode: 'GR',
          placeholder: '+30 000 000 0000',
          helpText: 'Συμπεριλάβετε τον κωδικό χώρας GR +30 πριν από τον αριθμό τηλεφώνου',
        },
        {
          countryCode: 'PT',
          placeholder: '+351 000 000 000',
          helpText: 'Inclua o código de país PT +351 antes do número de telefone',
        },
        {
          countryCode: 'HR',
          placeholder: '+385 00 000 0000',
          helpText: 'Uključite HR pozivni broj države +385 prije telefonskog broja',
        },
        {
          countryCode: 'SI',
          placeholder: '+386 00 000 000',
          helpText: 'Vključite SI kodo države +386 pred telefonsko številko',
        },
        {
          countryCode: 'IS',
          placeholder: '+354 000 0000',
          helpText: 'Láttu IS landsnúmer +354 fylgja á undan símanúmerinu',
        },
        {
          countryCode: 'LU',
          placeholder: '+352 000 000 000',
          helpText: 'Incluez le code pays LU +352 avant le numéro de téléphone',
        },
        {
          countryCode: 'MC',
          placeholder: '+377 00 00 00 00',
          helpText: 'Incluez le code pays MC +377 avant le numéro de téléphone',
        },
        {
          countryCode: 'AD',
          placeholder: '+376 000 000',
          helpText: 'Incloeu el codi de país AD +376 abans del número de telèfon',
        },
        {
          countryCode: 'JE',
          placeholder: '+44 0000 000000',
          helpText: 'Include the JE country code +44 before the phone number',
        },
        {
          countryCode: 'IM',
          placeholder: '+44 0000 000000',
          helpText: 'Include the IM country code +44 before the phone number',
        },
        {
          countryCode: 'GG',
          placeholder: '+44 0000 000000',
          helpText: 'Include the GG country code +44 before the phone number',
        },
        {
          countryCode: 'AL',
          placeholder: '+355 00 000 0000',
          helpText: 'Përfshini kodin e vendit AL +355 para numrit të telefonit',
        },
        {
          countryCode: 'SM',
          placeholder: '+378 0000 000000',
          helpText: 'Includere il prefisso internazionale SM +378 prima del numero di telefono',
        },
        {
          countryCode: 'FO',
          placeholder: '+298 000000',
          helpText: 'Inkluder FO landekode +298 før telefonnummeret',
        },
        {
          countryCode: 'MT',
          placeholder: '+356 0000 0000',
          helpText: 'Include the MT country code +356 before the phone number',
        },
        {
          countryCode: 'LI',
          placeholder: '+423 000 0000',
          helpText: 'Fügen Sie vor der Telefonnummer die LI-Ländervorwahl +423 ein',
        },
        {
          countryCode: 'GI',
          placeholder: '+350 000 00000',
          helpText: 'Include the GI country code +350 before the phone number',
        },
        {
          countryCode: 'MD',
          placeholder: '+373 00 000 000',
          helpText: 'Includeți codul de țară MD +373 înaintea numărului de telefon',
        },
        {
          countryCode: 'HU',
          placeholder: '+36 00 000 0000',
          helpText: 'A telefonszám előtt adja meg a HU országkódot +36',
        },
        {
          countryCode: 'NZ',
          placeholder: '+64 00 000 0000',
          helpText: 'Include the NZ country code +64 before the phone number',
        },
        {
          countryCode: 'ME',
          placeholder: '+382 00 000 000',
          helpText: 'Uključite ME pozivni broj države +382 prije telefonskog broja',
        },
      ];
      
      if (!countryCode || typeof countryCode !== 'string') {
        return mockPlaceholders[0].helpText;
      }
      
      const selectedHelpText = mockPlaceholders.find(function(item) {
          return item && item.countryCode === countryCode;
        });
        
        return selectedHelpText ? selectedHelpText.helpText : mockPlaceholders[0].helpText;
    }

    function setDefaultHelpText(countryCode) {
      const helpTextSpan = document.querySelector('#help-text');
      if (!helpTextSpan) {
        return;
      }

        
    }

    function updateHelpTextCountryCode(countryCode, fieldName) {
      if (!countryCode || !fieldName) {
        return;
      }
      
      setDefaultHelpText(countryCode);
    }

    function initializeSmsPhoneDropdown(fieldName) {
      if (!fieldName || typeof fieldName !== 'string') {
        return;
      }
      
      const dropdown = document.querySelector('#country-select-' + fieldName);
      const displayFlag = document.querySelector('#flag-display-' + fieldName);
      
      if (!dropdown || !displayFlag) {
        return;
      }

      const smsPhoneData = window.MC?.smsPhoneData;
      if (smsPhoneData && smsPhoneData.programs && Array.isArray(smsPhoneData.programs)) {
        dropdown.innerHTML = generateDropdownOptions(smsPhoneData.programs);
      }

      const defaultProgram = getDefaultCountryProgram(smsPhoneData?.defaultCountryCode, smsPhoneData?.programs);
      if (defaultProgram && defaultProgram.countryCode) {
        dropdown.value = defaultProgram.countryCode;
        
        const flagSpan = displayFlag?.querySelector('#flag-emoji-' + fieldName);
        if (flagSpan) {
          flagSpan.textContent = getCountryUnicodeFlag(defaultProgram.countryCode);
          flagSpan.setAttribute('aria-label', sanitizeHtml(defaultProgram.countryCode) + ' flag');
        }
        
        updateSmsLegalText(defaultProgram.countryCode, fieldName);
        updatePlaceholder(defaultProgram.countryCode, fieldName);
        updateCountryCodeInstruction(defaultProgram.countryCode, fieldName);
      }

     
      var smsNotRequiredRemoveCountryCodeEnabled = true;
      var smsField = Object.values({"FNAME":{"name":"FNAME","label":"Seu nome","helper_text":"","type":"text","required":false,"audience_field_name":"Seu nome","merge_id":1,"help_text_enabled":false,"enabled":true,"order":0,"field_type":"merge"},"EMAIL":{"name":"EMAIL","label":"Seu e-mail","helper_text":"","type":"email","required":true,"audience_field_name":"Seu e-mail","merge_id":0,"help_text_enabled":false,"enabled":true,"order":1,"field_type":"merge"},"MMERGE9":{"name":"MMERGE9","label":"Celular","helper_text":"","type":"phone","required":false,"audience_field_name":"Celular","phoneformat":"","merge_id":9,"help_text_enabled":false,"enabled":true,"order":2,"field_type":"merge"},"MMERGE12":{"name":"MMERGE12","label":"Investimento mensal atual em SEO, GEO e conteúdo","helper_text":"","type":"dropdown","required":false,"audience_field_name":"Investimento mensal atual em SEO, GEO e conteúdo","choices":[{"value":"Menos de 20k","label":"Menos de 20k"},{"value":"Entre 20k e 50k","label":"Entre 20k e 50k"},{"value":"Entre 50k e 100k","label":"Entre 50k e 100k"},{"value":"Mais de 100k","label":"Mais de 100k"}],"merge_id":12,"help_text_enabled":false,"enabled":true,"order":3,"field_type":"merge"},"MMERGE3":{"name":"MMERGE3","label":"E-mail responsável pelo cliente","helper_text":"","type":"text","required":false,"audience_field_name":"E-mail responsável pelo cliente","enabled":false,"order":null,"field_type":"merge","merge_id":3},"MMERGE4":{"name":"MMERGE4","label":"Last Name","helper_text":"","type":"text","required":false,"audience_field_name":"Last Name","enabled":false,"order":null,"field_type":"merge","merge_id":4},"MMERGE5":{"name":"MMERGE5","label":"Nome da empresa","helper_text":"","type":"text","required":false,"audience_field_name":"Nome da empresa","enabled":false,"order":null,"field_type":"merge","merge_id":5},"MMERGE6":{"name":"MMERGE6","label":"Responsável pelo cliente","helper_text":"","type":"text","required":false,"audience_field_name":"Responsável pelo cliente","enabled":false,"order":null,"field_type":"merge","merge_id":6},"MMERGE7":{"name":"MMERGE7","label":"Cargo","helper_text":"","type":"text","required":false,"audience_field_name":"Cargo","enabled":false,"order":null,"field_type":"merge","merge_id":7},"MMERGE8":{"name":"MMERGE8","label":"LAST_CHANGED","helper_text":"","type":"date","required":false,"audience_field_name":"LAST_CHANGED","dateformat":"MM/DD/YYYY","enabled":false,"order":null,"field_type":"merge","merge_id":8},"MMERGE2":{"name":"MMERGE2","label":"Segmento de atuação da empresa","helper_text":"","type":"text","required":false,"audience_field_name":"Segmento de atuação da empresa","enabled":false,"order":null,"field_type":"merge","merge_id":2},"MMERGE10":{"name":"MMERGE10","label":"Origem","helper_text":"","type":"text","required":false,"audience_field_name":"Origem","enabled":false,"order":null,"field_type":"merge","merge_id":10},"MMERGE11":{"name":"MMERGE11","label":"Member_rating","helper_text":"","type":"number","required":false,"audience_field_name":"Member_rating","enabled":false,"order":null,"field_type":"merge","merge_id":11},"interests_345281":{"name":"interests_345281","label":"Você estava no RD Summit?","helper_text":"","type":"checkbox","required":false,"choices":[{"value":"1","label":"Sim"},{"value":"2","label":"Não"}],"audience_field_name":"Você estava no RD Summit?","enabled":false,"order":null,"field_type":"group","group_id":345281}}).find(function(f) { return f.name === fieldName && f.type === 'smsphone'; });
      var isRequired = smsField ? smsField.required : false;
      var shouldAppendCountryCode = smsNotRequiredRemoveCountryCodeEnabled ? isRequired : true;
      
      var phoneInput = document.querySelector('#mce-' + fieldName);
      if (phoneInput && defaultProgram.countryCallingCode && shouldAppendCountryCode) {
        phoneInput.value = defaultProgram.countryCallingCode;
      }
      


      displayFlag?.addEventListener('click', function(e) {
        dropdown.focus();
      });


      dropdown?.addEventListener('change', function() {
        const selectedCountry = this.value;
        
        if (!selectedCountry || typeof selectedCountry !== 'string') {
          return;
        }
        
        const flagSpan = displayFlag?.querySelector('#flag-emoji-' + fieldName);
        if (flagSpan) {
          flagSpan.textContent = getCountryUnicodeFlag(selectedCountry);
          flagSpan.setAttribute('aria-label', sanitizeHtml(selectedCountry) + ' flag');
        }

         
        const selectedProgram = window.MC?.smsPhoneData?.programs.find(function(program) {
          return program && program.countryCode === selectedCountry;
        });

        var smsNotRequiredRemoveCountryCodeEnabled = true;
        var smsField = Object.values({"FNAME":{"name":"FNAME","label":"Seu nome","helper_text":"","type":"text","required":false,"audience_field_name":"Seu nome","merge_id":1,"help_text_enabled":false,"enabled":true,"order":0,"field_type":"merge"},"EMAIL":{"name":"EMAIL","label":"Seu e-mail","helper_text":"","type":"email","required":true,"audience_field_name":"Seu e-mail","merge_id":0,"help_text_enabled":false,"enabled":true,"order":1,"field_type":"merge"},"MMERGE9":{"name":"MMERGE9","label":"Celular","helper_text":"","type":"phone","required":false,"audience_field_name":"Celular","phoneformat":"","merge_id":9,"help_text_enabled":false,"enabled":true,"order":2,"field_type":"merge"},"MMERGE12":{"name":"MMERGE12","label":"Investimento mensal atual em SEO, GEO e conteúdo","helper_text":"","type":"dropdown","required":false,"audience_field_name":"Investimento mensal atual em SEO, GEO e conteúdo","choices":[{"value":"Menos de 20k","label":"Menos de 20k"},{"value":"Entre 20k e 50k","label":"Entre 20k e 50k"},{"value":"Entre 50k e 100k","label":"Entre 50k e 100k"},{"value":"Mais de 100k","label":"Mais de 100k"}],"merge_id":12,"help_text_enabled":false,"enabled":true,"order":3,"field_type":"merge"},"MMERGE3":{"name":"MMERGE3","label":"E-mail responsável pelo cliente","helper_text":"","type":"text","required":false,"audience_field_name":"E-mail responsável pelo cliente","enabled":false,"order":null,"field_type":"merge","merge_id":3},"MMERGE4":{"name":"MMERGE4","label":"Last Name","helper_text":"","type":"text","required":false,"audience_field_name":"Last Name","enabled":false,"order":null,"field_type":"merge","merge_id":4},"MMERGE5":{"name":"MMERGE5","label":"Nome da empresa","helper_text":"","type":"text","required":false,"audience_field_name":"Nome da empresa","enabled":false,"order":null,"field_type":"merge","merge_id":5},"MMERGE6":{"name":"MMERGE6","label":"Responsável pelo cliente","helper_text":"","type":"text","required":false,"audience_field_name":"Responsável pelo cliente","enabled":false,"order":null,"field_type":"merge","merge_id":6},"MMERGE7":{"name":"MMERGE7","label":"Cargo","helper_text":"","type":"text","required":false,"audience_field_name":"Cargo","enabled":false,"order":null,"field_type":"merge","merge_id":7},"MMERGE8":{"name":"MMERGE8","label":"LAST_CHANGED","helper_text":"","type":"date","required":false,"audience_field_name":"LAST_CHANGED","dateformat":"MM/DD/YYYY","enabled":false,"order":null,"field_type":"merge","merge_id":8},"MMERGE2":{"name":"MMERGE2","label":"Segmento de atuação da empresa","helper_text":"","type":"text","required":false,"audience_field_name":"Segmento de atuação da empresa","enabled":false,"order":null,"field_type":"merge","merge_id":2},"MMERGE10":{"name":"MMERGE10","label":"Origem","helper_text":"","type":"text","required":false,"audience_field_name":"Origem","enabled":false,"order":null,"field_type":"merge","merge_id":10},"MMERGE11":{"name":"MMERGE11","label":"Member_rating","helper_text":"","type":"number","required":false,"audience_field_name":"Member_rating","enabled":false,"order":null,"field_type":"merge","merge_id":11},"interests_345281":{"name":"interests_345281","label":"Você estava no RD Summit?","helper_text":"","type":"checkbox","required":false,"choices":[{"value":"1","label":"Sim"},{"value":"2","label":"Não"}],"audience_field_name":"Você estava no RD Summit?","enabled":false,"order":null,"field_type":"group","group_id":345281}}).find(function(f) { return f.name === fieldName && f.type === 'smsphone'; });
        var isRequired = smsField ? smsField.required : false;
        var shouldAppendCountryCode = smsNotRequiredRemoveCountryCodeEnabled ? isRequired : true;
        
        var phoneInput = document.querySelector('#mce-' + fieldName);
        if (phoneInput && selectedProgram.countryCallingCode && shouldAppendCountryCode) {
          phoneInput.value = selectedProgram.countryCallingCode;
        }
        
        
        updateSmsLegalText(selectedCountry, fieldName);
        updatePlaceholder(selectedCountry, fieldName);
        updateCountryCodeInstruction(selectedCountry, fieldName);
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      const smsPhoneFields = document.querySelectorAll('[id^="country-select-"]');
      
      smsPhoneFields.forEach(function(dropdown) {
        const fieldName = dropdown?.id.replace('country-select-', '');
        initializeSmsPhoneDropdown(fieldName);
      });
    });
    </script></div>
