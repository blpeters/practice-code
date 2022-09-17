def caesars_cipher(string, shift)
  puts "cipherin'..."
  original_array = string.chars
  shifted_text = ""

  original_array.each do |char|
    if char.ord >=65 && char.ord <=90
      if char.ord + shift > 90
        shifted_text << char.ord + shift - 26
      else shifted_text << char.ord + shift
      end
    elsif char.ord >=97 && char.ord <= 122
      if char.ord + shift > 122
        shifted_text << char.ord + shift - 26
      else shifted_text << char.ord + shift
      end
    else shifted_text << char.ord + shift
    end  
  end
puts shifted_text
end

caesars_cipher("You\'ll never read my secret", 9)    