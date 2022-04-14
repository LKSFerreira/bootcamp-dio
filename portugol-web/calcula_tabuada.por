programa {
	funcao inicio() {
		inteiro constante, contador, valor
		contador = 0
		valor = 0
		logico simVerdade
		simVerdade = verdadeiro
		
		faca {
		escreva("Deseja a tabuada de qual número?\n")
	    leia(constante)
	    
	    
	        faca {
		        valor = constante * contador
		        escreva(constante + " X " + contador + " = " + valor + "\n")
		        contador ++
	        } enquanto (contador <= 10)
	        contador = 0
	        
	        cadeia sim
	        sim = "sim"
	        escreva("Deseja obter a tabuada de outro número, sim ou não\n")
	        leia(sim)
	         se (sim!="sim"){
	             simVerdade = falso
	         }
	  
		} enquanto (simVerdade==verdadeiro)
	}
}
