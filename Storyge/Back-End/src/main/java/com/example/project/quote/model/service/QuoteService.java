package com.example.project.quote.model.service;

import com.example.project.quote.model.dto.QuoteDto;
import com.example.project.quote.model.entity.Quote;

import java.util.Optional;

public interface QuoteService {
    
    //명언 한 개 반환
    Optional<QuoteDto> selectOneQuote(Long quoteId);

    default QuoteDto toDto(Quote quote){
        return new QuoteDto().builder()
                .quoteContent(quote.getQuoteContent())
                .quoteSource((quote.getQuoteSource()))
                .build();
    }


//    default Quote toEntity(QuoteDto quoteDto){
//        return new Quote().builder()
//                .quteId(quoteDto.getQuoteId())
//                .quoteContent((quoteDto.getQuoteContent()))
//                .build();
//    }

}
